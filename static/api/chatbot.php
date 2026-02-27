<?php
/**
 * Chatbot API Endpoint – powered by Google Gemini
 * Supports multi-chat: each user can have multiple independent conversations.
 *
 * GET  → returns config / chatbot UI data
 * POST → chat actions (send message, create/list/delete/rename chats)
 *
 * POST actions:
 *   {message, chat_id}              → send message to a chat
 *   {action: "create_chat", title?} → create new chat
 *   {action: "list_chats"}          → list all chats
 *   {action: "delete_chat", chat_id}→ delete a chat
 *   {action: "rename_chat", chat_id, title} → rename a chat
 */

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-cache, must-revalidate');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// ────────────────────────────────────────────────
//  Configuration
// ────────────────────────────────────────────────
$apiKey      = getenv('GEMINI_API_KEY') ?: 'AIzaSyBQ4qVWIMRCB4EPSjUzhCxmEP25IuV7KGo';
$modelName   = 'models/gemini-2.5-flash';
$systemPrompt = "You are a friendly, concise assistant for Scale Infinite documentation. Answer naturally and helpfully.";

// ────────────────────────────────────────────────
//  Load Composer autoloader
// ────────────────────────────────────────────────
$autoloadPath = __DIR__ . '/gemini-lib/vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'Composer autoloader not found. Run composer install']);
    exit;
}
require $autoloadPath;

use Gemini\Data\Content;
use Gemini\Enums\Role;

$client = Gemini::client($apiKey);

// ────────────────────────────────────────────────
//  Handle GET – return static chatbot UI data
// ────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $jsonFile = __DIR__ . '/../chatbot-data.json';
    if (!file_exists($jsonFile)) {
        http_response_code(404);
        echo json_encode(['error' => 'Chatbot data file not found']);
        exit;
    }
    $data = file_get_contents($jsonFile);
    if ($data === false) {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to read chatbot data']);
        exit;
    }
    echo $data;
    exit;
}

// ────────────────────────────────────────────────
//  Only allow POST from now on
// ────────────────────────────────────────────────
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed. Use POST']);
    exit;
}

// ────────────────────────────────────────────────
//  Read JSON input & start session
// ────────────────────────────────────────────────
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

session_start();
$chatsKey = 'gemini_chats';
if (!isset($_SESSION[$chatsKey]) || !is_array($_SESSION[$chatsKey])) {
    $_SESSION[$chatsKey] = [];
}

$action = $input['action'] ?? null;

// ────────────────────────────────────────────────
//  Action: create_chat
// ────────────────────────────────────────────────
if ($action === 'create_chat') {
    $chatId = uniqid('chat_', true);
    $title  = trim($input['title'] ?? '') ?: 'New Chat';
    $now    = date('c');

    $_SESSION[$chatsKey][$chatId] = [
        'id'         => $chatId,
        'title'      => $title,
        'created_at' => $now,
        'updated_at' => $now,
        'history'    => [],
    ];

    echo json_encode([
        'chat_id' => $chatId,
        'title'   => $title,
        'created_at' => $now,
    ]);
    exit;
}

// ────────────────────────────────────────────────
//  Action: list_chats
// ────────────────────────────────────────────────
if ($action === 'list_chats') {
    $chatList = [];
    foreach ($_SESSION[$chatsKey] as $chat) {
        $history = $chat['history'] ?? [];
        $lastMsg = '';
        if (count($history) > 0) {
            $last = end($history);
            $lastMsg = mb_substr($last['text'], 0, 80);
        }
        $chatList[] = [
            'id'           => $chat['id'],
            'title'        => $chat['title'],
            'last_message' => $lastMsg,
            'updated_at'   => $chat['updated_at'],
            'message_count'=> count($history),
        ];
    }
    // Sort by updated_at descending
    usort($chatList, function($a, $b) {
        return strcmp($b['updated_at'], $a['updated_at']);
    });

    echo json_encode(['chats' => $chatList]);
    exit;
}

// ────────────────────────────────────────────────
//  Action: delete_chat
// ────────────────────────────────────────────────
if ($action === 'delete_chat') {
    $chatId = $input['chat_id'] ?? '';
    if (!$chatId || !isset($_SESSION[$chatsKey][$chatId])) {
        http_response_code(404);
        echo json_encode(['error' => 'Chat not found']);
        exit;
    }
    unset($_SESSION[$chatsKey][$chatId]);
    echo json_encode(['success' => true]);
    exit;
}

// ────────────────────────────────────────────────
//  Action: rename_chat
// ────────────────────────────────────────────────
if ($action === 'rename_chat') {
    $chatId = $input['chat_id'] ?? '';
    $title  = trim($input['title'] ?? '');
    if (!$chatId || !isset($_SESSION[$chatsKey][$chatId])) {
        http_response_code(404);
        echo json_encode(['error' => 'Chat not found']);
        exit;
    }
    if (!$title) {
        http_response_code(400);
        echo json_encode(['error' => 'Title is required']);
        exit;
    }
    $_SESSION[$chatsKey][$chatId]['title'] = $title;
    echo json_encode(['success' => true, 'title' => $title]);
    exit;
}

// ────────────────────────────────────────────────
//  Default action: send message
// ────────────────────────────────────────────────
if (empty($input['message'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Missing or empty "message" field']);
    exit;
}

$userMessage = trim($input['message']);
$chatId      = $input['chat_id'] ?? null;

// Auto-create chat if no chat_id provided
if (!$chatId || !isset($_SESSION[$chatsKey][$chatId])) {
    $chatId = uniqid('chat_', true);
    $now    = date('c');
    $_SESSION[$chatsKey][$chatId] = [
        'id'         => $chatId,
        'title'      => mb_substr($userMessage, 0, 40),
        'created_at' => $now,
        'updated_at' => $now,
        'history'    => [],
    ];
}

$chat = &$_SESSION[$chatsKey][$chatId];
$rawHistory = $chat['history'];

// Auto-title from first message if title is still default
if ($chat['title'] === 'New Chat' && count($rawHistory) === 0) {
    $chat['title'] = mb_substr($userMessage, 0, 40);
}

// Build Content history for Gemini SDK
$contentHistory = [];
foreach ($rawHistory as $msg) {
    $role = $msg['role'] === 'user' ? Role::USER : Role::MODEL;
    $contentHistory[] = Content::parse(part: $msg['text'], role: $role);
}

// Call Gemini API
try {
    $geminiChat = $client->generativeModel(model: $modelName)
        ->startChat(history: $contentHistory);

    $response = $geminiChat->sendMessage($userMessage);
    $aiText   = $response->text();

    $chat['history'][] = ['role' => 'user',  'text' => $userMessage];
    $chat['history'][] = ['role' => 'model', 'text' => $aiText];
    $chat['updated_at'] = date('c');

    echo json_encode([
        'response' => $aiText,
        'chat_id'  => $chatId,
        'title'    => $chat['title'],
        'history'  => $chat['history'],
        'model'    => $modelName,
    ]);
}
catch (\Exception $e) {
    http_response_code(500);
    echo json_encode([
        'error'   => 'Gemini API error',
        'message' => $e->getMessage(),
    ]);
}
