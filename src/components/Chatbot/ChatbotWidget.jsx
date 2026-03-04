import React, { useState, useRef, useEffect, useCallback } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './chatbot.css';

// SVG icon components
const BotIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
    <line x1="8" y1="16" x2="8" y2="16" />
    <line x1="16" y1="16" x2="16" y2="16" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);

const CloseIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const SendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MessageIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
  </svg>
);

const HelpIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const EditIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const MessageSquareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1="9" y1="10" x2="15" y2="10" />
  </svg>
);

// ===== CONSTANTS =====
const CB_CHATS_KEY = 'cb_chats_data';
const CB_STATE_KEY = 'cb_chat_state';
const CB_SESSION_COOKIE = 'cb_session_active';

// ===== SESSION COOKIE =====
function setSessionCookie() {
  document.cookie = CB_SESSION_COOKIE + '=1;path=/;SameSite=Lax';
}

function hasSessionCookie() {
  return document.cookie.indexOf(CB_SESSION_COOKIE + '=1') !== -1;
}

// ===== LOCAL STORAGE HELPERS =====
function getChatsData() {
  try {
    const data = JSON.parse(localStorage.getItem(CB_CHATS_KEY) || '{}');
    if (!data.chats) data.chats = {};
    if (!data.chatOrder) data.chatOrder = [];
    return data;
  } catch (e) {
    return { chats: {}, chatOrder: [], activeChat: null };
  }
}

function saveChatsData(data) {
  try { localStorage.setItem(CB_CHATS_KEY, JSON.stringify(data)); } catch (e) {}
}

function getLocalChat(chatId) {
  const data = getChatsData();
  return data.chats[chatId] || null;
}

function saveLocalChat(chatId, chatObj) {
  const data = getChatsData();
  data.chats[chatId] = chatObj;
  if (data.chatOrder.indexOf(chatId) === -1) {
    data.chatOrder.unshift(chatId);
  }
  saveChatsData(data);
}

function deleteLocalChat(chatId) {
  const data = getChatsData();
  delete data.chats[chatId];
  const idx = data.chatOrder.indexOf(chatId);
  if (idx !== -1) data.chatOrder.splice(idx, 1);
  if (data.activeChat === chatId) data.activeChat = null;
  saveChatsData(data);
}

function saveMessageToChat(chatId, msg) {
  const data = getChatsData();
  if (!data.chats[chatId]) return;
  data.chats[chatId].messages.push(msg);
  data.chats[chatId].updated_at = new Date().toISOString();
  const idx = data.chatOrder.indexOf(chatId);
  if (idx > 0) {
    data.chatOrder.splice(idx, 1);
    data.chatOrder.unshift(chatId);
  }
  saveChatsData(data);
}

function setActiveChatStorage(chatId) {
  const data = getChatsData();
  data.activeChat = chatId;
  saveChatsData(data);
}

function updateLocalChatTitle(chatId, title) {
  const data = getChatsData();
  if (data.chats[chatId]) {
    data.chats[chatId].title = title;
    saveChatsData(data);
  }
}

function saveChatState(state) {
  try { localStorage.setItem(CB_STATE_KEY, JSON.stringify(state)); } catch (e) {}
}

function getChatState() {
  try { return JSON.parse(localStorage.getItem(CB_STATE_KEY) || '{}'); } catch (e) { return {}; }
}

// ===== UTILITY FUNCTIONS =====
function getTimestamp() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  m = m < 10 ? '0' + m : m;
  return h + ':' + m + ' ' + ampm;
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function markdownToHtml(str) {
  let text = escapeHtml(str);
  text = text.replace(/```(\w*)\n([\s\S]*?)```/g, '<pre><code>$2</code></pre>');
  text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
  text = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/__(.+?)__/g, '<strong>$1</strong>');
  text = text.replace(/\*(.+?)\*/g, '<em>$1</em>');
  text = text.replace(/(?<!\w)_(.+?)_(?!\w)/g, '<em>$1</em>');
  text = text.replace(/^### (.+)$/gm, '<h4>$1</h4>');
  text = text.replace(/^## (.+)$/gm, '<h3>$1</h3>');
  text = text.replace(/^# (.+)$/gm, '<h2>$1</h2>');
  text = text.replace(/^\* (.+)$/gm, '<li>$1</li>');
  text = text.replace(/^- (.+)$/gm, '<li>$1</li>');
  text = text.replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>');
  text = text.replace(/^\d+\. (.+)$/gm, '<li>$1</li>');
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  text = text.replace(/(?<!href="|">)(https?:\/\/[^\s<"]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>');
  text = text.replace(/\n/g, '<br>');
  text = text.replace(/<\/li><br>/g, '</li>');
  text = text.replace(/<\/ul><br>/g, '</ul>');
  text = text.replace(/<\/pre><br>/g, '</pre>');
  text = text.replace(/<\/h([234])><br>/g, '</h$1>');
  return text;
}

function formatRelativeTime(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  const now = new Date();
  const diff = Math.floor((now - date) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return Math.floor(diff / 60) + 'm ago';
  if (diff < 86400) return Math.floor(diff / 3600) + 'h ago';
  if (diff < 604800) return Math.floor(diff / 86400) + 'd ago';
  return date.toLocaleDateString();
}

function buildKeywordRegex(keywords) {
  return new RegExp(
    '\\b(' + keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
    'i'
  );
}

// ===== API HELPER =====
function apiPost(apiUrl, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try {
            resolve(JSON.parse(xhr.responseText));
          } catch (e) {
            reject('Failed to parse response');
          }
        } else {
          reject('Request failed: ' + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  });
}

// ===== INIT SESSION =====
if (typeof window !== 'undefined') {
  if (!hasSessionCookie()) {
    try {
      localStorage.removeItem(CB_CHATS_KEY);
      localStorage.removeItem(CB_STATE_KEY);
    } catch (e) {}
  }
  setSessionCookie();
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [chatbotData, setChatbotData] = useState(null);
  const [launcherPos, setLauncherPos] = useState(null);
  const [inputValue, setInputValue] = useState('');

  // Multi-chat state
  const [subView, setSubView] = useState('list'); // 'list' or 'active'
  const [activeChatId, setActiveChatId] = useState(null);
  const [chatListData, setChatListData] = useState({ chats: {}, chatOrder: [] });
  const [currentMessages, setCurrentMessages] = useState([]);
  const [chatTitle, setChatTitle] = useState('New Chat');
  const [isTyping, setIsTyping] = useState(false);

  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const pendingRequestsRef = useRef({});
  const activeChatIdRef = useRef(null);

  const chatbotDataUrl = useBaseUrl('/chatbot-data.json');
  const apiUrl = 'https://cloud.scaleinfinite.fr/themes/cloudfloat/core/api/chatbot.php';

  // Keep ref in sync
  useEffect(() => {
    activeChatIdRef.current = activeChatId;
  }, [activeChatId]);

  // Load chatbot data
  useEffect(() => {
    fetch(chatbotDataUrl)
      .then(res => res.json())
      .then(data => setChatbotData(data))
      .catch(err => console.error('Chatbot: Failed to load data', err));
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [currentMessages, isTyping]);

  // Focus input when entering active chat
  useEffect(() => {
    if (subView === 'active' && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [subView, activeChatId]);

  // Escape key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && isOpen) setIsOpen(false);
    };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  // Set initial launcher position on mount
  useEffect(() => {
    setLauncherPos({ left: window.innerWidth - 88, top: window.innerHeight - 88 });
  }, []);

  // Restore previous session state
  useEffect(() => {
    if (!chatbotData) return;
    const prevState = getChatState();
    if (prevState.open) {
      setIsOpen(true);
      const tab = prevState.tab || 'home';
      setActiveTab(tab);
      if (tab === 'message') {
        const savedData = getChatsData();
        if (savedData.activeChat && savedData.chats[savedData.activeChat]) {
          openActiveChat(savedData.activeChat);
        } else {
          refreshChatList();
        }
      }
    }
  }, [chatbotData]);

  // Refresh chat list from localStorage
  const refreshChatList = useCallback(() => {
    setChatListData(getChatsData());
  }, []);

  // Open a specific chat
  const openActiveChat = useCallback((chatId) => {
    setSubView('active');
    setActiveChatId(chatId);
    setActiveChatStorage(chatId);

    const localChat = getLocalChat(chatId);
    if (localChat) {
      setChatTitle(localChat.title || 'New Chat');
      if (localChat.messages && localChat.messages.length > 0) {
        setCurrentMessages([...localChat.messages]);
      } else if (chatbotData) {
        setCurrentMessages([{
          text: chatbotData.greeting.botWelcome,
          type: 'bot',
          time: getTimestamp(),
        }]);
      }
    }

    // Show typing if there's a pending request for this chat
    if (pendingRequestsRef.current[chatId]) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  }, [chatbotData]);

  // Show chat list
  const showChatList = useCallback(() => {
    setSubView('list');
    setActiveChatId(null);
    setCurrentMessages([]);
    refreshChatList();
  }, [refreshChatList]);

  // Create new chat via API
  const createNewChat = useCallback((callback) => {
    apiPost(apiUrl, { action: 'create_chat' })
      .then(res => {
        if (res && res.chat_id) {
          const chatObj = {
            id: res.chat_id,
            title: res.title || 'New Chat',
            messages: [],
            updated_at: new Date().toISOString(),
          };
          saveLocalChat(res.chat_id, chatObj);
          if (callback) callback(res.chat_id);
        } else {
          throw new Error('No chat_id');
        }
      })
      .catch(() => {
        // Fallback: create locally
        const id = 'local_' + Date.now();
        const chatObj = {
          id,
          title: 'New Chat',
          messages: [],
          updated_at: new Date().toISOString(),
        };
        saveLocalChat(id, chatObj);
        if (callback) callback(id);
      });
  }, [apiUrl]);

  // Delete a chat
  const deleteChatById = useCallback((chatId) => {
    deleteLocalChat(chatId);
    apiPost(apiUrl, { action: 'delete_chat', chat_id: chatId }).catch(() => {});
    if (activeChatIdRef.current === chatId) {
      showChatList();
    } else {
      refreshChatList();
    }
  }, [apiUrl, showChatList, refreshChatList]);

  // Tab switching
  const switchTab = useCallback((tabName) => {
    setActiveTab(tabName);
    saveChatState({ open: true, tab: tabName });
    if (tabName === 'message') {
      if (!activeChatIdRef.current) {
        refreshChatList();
        setSubView('list');
      }
    }
  }, [refreshChatList]);

  // Send message
  const sendMessage = useCallback(() => {
    const text = inputValue.trim();
    if (!text || !activeChatId) return;

    const time = getTimestamp();
    const userMsg = { text, type: 'user', time };

    // Add user message
    setCurrentMessages(prev => [...prev, userMsg]);
    saveMessageToChat(activeChatId, userMsg);
    setInputValue('');
    setIsTyping(true);

    const chatId = activeChatId;
    pendingRequestsRef.current[chatId] = true;

    apiPost(apiUrl, { message: text, chat_id: chatId })
      .then(data => {
        delete pendingRequestsRef.current[chatId];

        let responseText;
        if (data && data.response) {
          responseText = data.response;
        } else if (data && data.error) {
          responseText = 'Sorry, something went wrong: ' + (data.message || data.error);
        } else {
          responseText = 'Sorry, I had trouble understanding the response. Please try again.';
        }

        const botMsg = { text: responseText, type: 'bot', time: getTimestamp() };

        if (activeChatIdRef.current === chatId) {
          setIsTyping(false);
          setCurrentMessages(prev => [...prev, botMsg]);
          saveMessageToChat(chatId, botMsg);
        } else {
          saveMessageToChat(chatId, botMsg);
        }

        // Update title if returned
        if (data && data.title) {
          updateLocalChatTitle(chatId, data.title);
          if (activeChatIdRef.current === chatId) {
            setChatTitle(data.title);
          }
        }
      })
      .catch(() => {
        delete pendingRequestsRef.current[chatId];
        const errorMsg = { text: 'Sorry, I could not reach the AI service. Please try again later.', type: 'bot', time: getTimestamp() };

        if (activeChatIdRef.current === chatId) {
          setIsTyping(false);
          setCurrentMessages(prev => [...prev, errorMsg]);
          saveMessageToChat(chatId, errorMsg);
        } else {
          saveMessageToChat(chatId, errorMsg);
        }
      });
  }, [inputValue, activeChatId, apiUrl]);

  // Handle FAQ click
  const handleFaqClick = useCallback((faq) => {
    switchTab('message');
    createNewChat((chatId) => {
      openActiveChat(chatId);

      const time = getTimestamp();
      const userMsg = { text: faq.q, type: 'user', time };
      setCurrentMessages(prev => [...prev, userMsg]);
      saveMessageToChat(chatId, userMsg);
      setIsTyping(true);

      pendingRequestsRef.current[chatId] = true;

      apiPost(apiUrl, { message: faq.q, chat_id: chatId })
        .then(data => {
          delete pendingRequestsRef.current[chatId];
          let responseText = (data && data.response) ? data.response : faq.a;
          const botMsg = { text: responseText, type: 'bot', time: getTimestamp() };

          if (activeChatIdRef.current === chatId) {
            setIsTyping(false);
            setCurrentMessages(prev => [...prev, botMsg]);
            saveMessageToChat(chatId, botMsg);
          } else {
            saveMessageToChat(chatId, botMsg);
          }

          if (data && data.title) {
            updateLocalChatTitle(chatId, data.title);
            if (activeChatIdRef.current === chatId) {
              setChatTitle(data.title);
            }
          }
        })
        .catch(() => {
          delete pendingRequestsRef.current[chatId];
          const botMsg = { text: faq.a, type: 'bot', time: getTimestamp() };
          if (activeChatIdRef.current === chatId) {
            setIsTyping(false);
            setCurrentMessages(prev => [...prev, botMsg]);
            saveMessageToChat(chatId, botMsg);
          } else {
            saveMessageToChat(chatId, botMsg);
          }
        });
    });
  }, [switchTab, createNewChat, openActiveChat, apiUrl]);

  // Rename chat
  const handleRename = useCallback(() => {
    if (!activeChatId) return;
    const localChat = getLocalChat(activeChatId);
    const currentTitle = localChat ? localChat.title : 'New Chat';
    const newTitle = prompt('Rename chat:', currentTitle);
    if (newTitle && newTitle.trim()) {
      const trimmed = newTitle.trim();
      updateLocalChatTitle(activeChatId, trimmed);
      setChatTitle(trimmed);
      apiPost(apiUrl, { action: 'rename_chat', chat_id: activeChatId, title: trimmed }).catch(() => {});
    }
  }, [activeChatId, apiUrl]);

  // Delete current chat
  const handleDeleteChat = useCallback(() => {
    if (!activeChatId) return;
    if (!confirm('Delete this chat?')) return;
    deleteChatById(activeChatId);
  }, [activeChatId, deleteChatById]);

  // Drag handlers for launcher
  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = false;
    const launcher = e.currentTarget;
    launcher.setPointerCapture(e.pointerId);
    dragStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      left: launcherPos.left,
      top: launcherPos.top,
    };

    const handlePointerMove = (moveEvent) => {
      const dx = moveEvent.clientX - dragStartRef.current.x;
      const dy = moveEvent.clientY - dragStartRef.current.y;
      if (!isDraggingRef.current && (Math.abs(dx) > 5 || Math.abs(dy) > 5)) {
        isDraggingRef.current = true;
        launcher.classList.add('dragging');
      }
      if (isDraggingRef.current) {
        const newLeft = Math.max(0, Math.min(window.innerWidth - 64, dragStartRef.current.left + dx));
        const newTop = Math.max(0, Math.min(window.innerHeight - 64, dragStartRef.current.top + dy));
        setLauncherPos({ left: newLeft, top: newTop });
      }
    };

    const handlePointerUp = () => {
      launcher.classList.remove('dragging');
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('pointerup', handlePointerUp);
    };

    document.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('pointerup', handlePointerUp);
  }, [launcherPos]);

  const handleLauncherClick = useCallback(() => {
    if (!isDraggingRef.current) {
      const newOpen = !isOpen;
      setIsOpen(newOpen);
      saveChatState({ open: newOpen, tab: activeTab });
    }
  }, [isOpen, activeTab]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleClose = useCallback(() => {
    setIsOpen(false);
    saveChatState({ open: false, tab: activeTab });
  }, [activeTab]);

  if (!chatbotData || !launcherPos) return null;

  const { greeting, faqs } = chatbotData;
  const chatList = chatListData;

  return (
    <>
      {/* Launcher Button */}
      <button
        id="cb-launcher"
        className={isOpen ? 'active' : ''}
        onPointerDown={handlePointerDown}
        onClick={handleLauncherClick}
        title="Chat with us"
        style={{ left: launcherPos.left + 'px', top: launcherPos.top + 'px', right: 'auto', bottom: 'auto' }}
      >
        <span className="cb-launcher-icon cb-launcher-open"><ChatIcon /></span>
      </button>

      {/* Chat Window */}
      <div id="cb-window" className={isOpen ? 'open' : ''}>
        {/* Header */}
        <div className="cb-header">
          <div className="cb-header-info">
            <div className="cb-header-avatar"><BotIcon /></div>
            <div className="cb-header-text">
              <h3>Scale Infinite</h3>
              <span className="cb-header-status">
                <span className="cb-status-dot"></span> We typically reply in minutes
              </span>
            </div>
          </div>
          <button className="cb-header-close" title="Close" onClick={handleClose}>
            <CloseIcon size={18} />
          </button>
        </div>

        {/* Home View */}
        <div className={`cb-view cb-view-home ${activeTab === 'home' ? 'active' : ''}`}>
          <div className="cb-home-content">
            <div className="cb-home-greeting">
              <h2 dangerouslySetInnerHTML={{ __html: greeting.title }} />
              <p>{greeting.subtitle}</p>
            </div>
            <div className="cb-home-cards">
              <div className="cb-home-card" onClick={() => {
                switchTab('message');
                createNewChat((chatId) => openActiveChat(chatId));
              }}>
                <div className="cb-card-icon"><MessageIcon /></div>
                <div className="cb-card-text">
                  <h4>Send us a message</h4>
                  <p>We usually reply in a few minutes</p>
                </div>
                <span className="cb-card-arrow"><ChevronRightIcon /></span>
              </div>
              <div className="cb-home-card" onClick={() => switchTab('help')}>
                <div className="cb-card-icon"><HelpIcon /></div>
                <div className="cb-card-text">
                  <h4>Frequently Asked Questions</h4>
                  <p>Find answers to common questions</p>
                </div>
                <span className="cb-card-arrow"><ChevronRightIcon /></span>
              </div>
            </div>

            {/* ScaleIQ Card */}
            <div className="cb-salesiq-card">
              <div className="cb-salesiq-header">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <span>To know about ScaleIQ</span>
              </div>
              <ul className="cb-salesiq-links">
                <li>
                  <a href="https://cloud.scaleinfinite.fr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>
                    Try now for free
                  </a>
                </li>
                <li>
                  <a href="https://cloud.scaleinfinite.fr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>
                    Book a personalized demo
                  </a>
                </li>
                <li>
                  <a href="https://cloud.scaleinfinite.fr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>
                    Choose the right plan for you
                  </a>
                </li>
                <li>
                  <a href="https://cloud.scaleinfinite.fr" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="13 17 18 12 13 7" /><polyline points="6 17 11 12 6 7" /></svg>
                    Register for webinars
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Message View */}
        <div className={`cb-view cb-view-message ${activeTab === 'message' ? 'active' : ''}`}>
          {/* Chat List Sub-view */}
          <div className={`cb-sub-view cb-chat-list-view ${subView === 'list' ? 'active' : ''}`}>
            <div className="cb-chat-list-header">
              <h3>Messages</h3>
              <button className="cb-new-chat-btn" title="New Chat" onClick={() => {
                createNewChat((chatId) => openActiveChat(chatId));
              }}>
                <PlusIcon />
                <span>New Chat</span>
              </button>
            </div>

            {chatList.chatOrder.length > 0 ? (
              <div className="cb-chat-list">
                {chatList.chatOrder.map(id => {
                  const c = chatList.chats[id];
                  if (!c) return null;
                  let lastMsg = '';
                  if (c.messages && c.messages.length > 0) {
                    const last = c.messages[c.messages.length - 1];
                    lastMsg = last.text;
                    if (lastMsg.length > 50) lastMsg = lastMsg.substring(0, 50) + '...';
                  }
                  return (
                    <div key={id} className="cb-chat-item" onClick={() => openActiveChat(id)}>
                      <div className="cb-chat-item-content">
                        <div className="cb-chat-item-icon"><MessageIcon /></div>
                        <div className="cb-chat-item-text">
                          <div className="cb-chat-item-title">{c.title || 'New Chat'}</div>
                          <div className="cb-chat-item-preview">{lastMsg || 'No messages yet'}</div>
                        </div>
                        <div className="cb-chat-item-meta">
                          <span className="cb-chat-item-time">{formatRelativeTime(c.updated_at)}</span>
                        </div>
                      </div>
                      <button className="cb-chat-item-delete" title="Delete" onClick={(e) => {
                        e.stopPropagation();
                        deleteChatById(id);
                      }}>
                        <XIcon />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="cb-chat-empty">
                <div className="cb-chat-empty-icon"><MessageSquareIcon /></div>
                <p>No conversations yet</p>
                <button className="cb-start-chat-btn" onClick={() => {
                  createNewChat((chatId) => openActiveChat(chatId));
                }}>Start a new chat</button>
              </div>
            )}
          </div>

          {/* Active Chat Sub-view */}
          <div className={`cb-sub-view cb-active-chat-view ${subView === 'active' ? 'active' : ''}`}>
            <div className="cb-messages-header">
              <button className="cb-back-btn" title="Back to chats" onClick={showChatList}>
                <ChevronLeftIcon />
              </button>
              <span className="cb-chat-title">{chatTitle}</span>
              <div className="cb-chat-header-actions">
                <button className="cb-rename-btn" title="Rename chat" onClick={handleRename}>
                  <EditIcon />
                </button>
                <button className="cb-delete-chat-btn" title="Delete chat" onClick={handleDeleteChat}>
                  <TrashIcon />
                </button>
              </div>
            </div>
            <div className="cb-messages" ref={messagesRef}>
              {currentMessages.map((msg, i) => (
                <div key={i} className={`cb-msg-wrap ${msg.type}`}>
                  {msg.type === 'bot' && (
                    <div className="cb-msg-avatar"><BotIcon size={16} /></div>
                  )}
                  <div className="cb-msg-body">
                    {msg.type === 'bot' ? (
                      <div className="cb-msg-bubble" dangerouslySetInnerHTML={{ __html: markdownToHtml(msg.text) }} />
                    ) : (
                      <div className="cb-msg-bubble">{msg.text}</div>
                    )}
                    <div className="cb-msg-time">{msg.time}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="cb-msg-wrap bot cb-typing-wrap">
                  <div className="cb-msg-avatar"><BotIcon size={16} /></div>
                  <div className="cb-msg-body">
                    <div className="cb-typing"><span></span><span></span><span></span></div>
                  </div>
                </div>
              )}
            </div>
            <div className="cb-composer">
              <div className="cb-composer-input">
                <textarea
                  ref={inputRef}
                  className="cb-input"
                  placeholder="Type your message..."
                  rows="1"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 100) + 'px';
                  }}
                />
              </div>
              <button className="cb-send-btn" title="Send" onClick={sendMessage}>
                <SendIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Help View */}
        <div className={`cb-view cb-view-help ${activeTab === 'help' ? 'active' : ''}`}>
          <div className="cb-help-content">
            <div className="cb-help-header">
              <h3>Frequently Asked Questions</h3>
              <p>Quick answers to common questions</p>
            </div>
            <div className="cb-faq-list">
              {faqs.map((faq, idx) => (
                <div key={idx} className="cb-faq-item" onClick={() => handleFaqClick(faq)}>
                  <div className="cb-faq-question">
                    <span>{faq.q}</span>
                    <ChevronRightIcon />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Tabs */}
        <div className="cb-footer">
          <button
            className={`cb-tab ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => switchTab('home')}
            title="Home"
          >
            <HomeIcon /><span>Home</span>
          </button>
          <button
            className={`cb-tab ${activeTab === 'message' ? 'active' : ''}`}
            onClick={() => switchTab('message')}
            title="Messages"
          >
            <MessageIcon /><span>Messages</span>
          </button>
          <button
            className={`cb-tab ${activeTab === 'help' ? 'active' : ''}`}
            onClick={() => switchTab('help')}
            title="Help"
          >
            <HelpIcon /><span>Help</span>
          </button>
        </div>
      </div>
    </>
  );
}
