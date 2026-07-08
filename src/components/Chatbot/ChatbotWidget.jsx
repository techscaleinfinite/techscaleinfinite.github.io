import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Bot, MessageSquare, X, Send, Home, MessageCircle, HelpCircle,
  ChevronRight, ChevronLeft, Plus, Pencil, Trash2, Info, ChevronsRight,
} from 'lucide-react';
import './chatbot.css';

const CB_CHATS_KEY = 'cb_chats_data';
const CB_STATE_KEY = 'cb_chat_state';
const CB_SESSION_COOKIE = 'cb_session_active';

function setSessionCookie() {
  document.cookie = CB_SESSION_COOKIE + '=1;path=/;SameSite=Lax';
}

function hasSessionCookie() {
  return document.cookie.indexOf(CB_SESSION_COOKIE + '=1') !== -1;
}

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

function apiPost(apiUrl, data) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('POST', apiUrl, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          try { resolve(JSON.parse(xhr.responseText)); }
          catch (e) { reject('Failed to parse response'); }
        } else {
          reject('Request failed: ' + xhr.status);
        }
      }
    };
    xhr.send(JSON.stringify(data));
  });
}

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
  const [subView, setSubView] = useState('list');
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

  const apiUrl = 'https://cloud.scaleinfinite.fr/themes/cloudfloat/core/api/chatbot.php';

  useEffect(() => { activeChatIdRef.current = activeChatId; }, [activeChatId]);

  useEffect(() => {
    fetch('/chatbot-data.json')
      .then(res => res.json())
      .then(data => setChatbotData(data))
      .catch(err => console.error('Chatbot: Failed to load data', err));
  }, []);

  useEffect(() => {
    if (messagesRef.current) messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
  }, [currentMessages, isTyping]);

  useEffect(() => {
    if (subView === 'active' && inputRef.current) setTimeout(() => inputRef.current.focus(), 100);
  }, [subView, activeChatId]);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape' && isOpen) setIsOpen(false); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  useEffect(() => {
    setLauncherPos({ left: window.innerWidth - 88, top: window.innerHeight - 88 });
  }, []);

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

  const refreshChatList = useCallback(() => { setChatListData(getChatsData()); }, []);

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
        setCurrentMessages([{ text: chatbotData.greeting.botWelcome, type: 'bot', time: getTimestamp() }]);
      }
    }
    setIsTyping(!!pendingRequestsRef.current[chatId]);
  }, [chatbotData]);

  const showChatList = useCallback(() => {
    setSubView('list');
    setActiveChatId(null);
    setCurrentMessages([]);
    refreshChatList();
  }, [refreshChatList]);

  const createNewChat = useCallback((callback) => {
    apiPost(apiUrl, { action: 'create_chat' })
      .then(res => {
        if (res && res.chat_id) {
          const chatObj = { id: res.chat_id, title: res.title || 'New Chat', messages: [], updated_at: new Date().toISOString() };
          saveLocalChat(res.chat_id, chatObj);
          if (callback) callback(res.chat_id);
        } else { throw new Error('No chat_id'); }
      })
      .catch(() => {
        const id = 'local_' + Date.now();
        const chatObj = { id, title: 'New Chat', messages: [], updated_at: new Date().toISOString() };
        saveLocalChat(id, chatObj);
        if (callback) callback(id);
      });
  }, [apiUrl]);

  const deleteChatById = useCallback((chatId) => {
    deleteLocalChat(chatId);
    apiPost(apiUrl, { action: 'delete_chat', chat_id: chatId }).catch(() => {});
    if (activeChatIdRef.current === chatId) showChatList();
    else refreshChatList();
  }, [apiUrl, showChatList, refreshChatList]);

  const switchTab = useCallback((tabName) => {
    setActiveTab(tabName);
    saveChatState({ open: true, tab: tabName });
    if (tabName === 'message') {
      if (!activeChatIdRef.current) { refreshChatList(); setSubView('list'); }
    }
  }, [refreshChatList]);

  const sendMessage = useCallback(() => {
    const text = inputValue.trim();
    if (!text || !activeChatId) return;
    const time = getTimestamp();
    const userMsg = { text, type: 'user', time };
    setCurrentMessages(prev => [...prev, userMsg]);
    saveMessageToChat(activeChatId, userMsg);
    setInputValue('');
    setIsTyping(true);
    const chatId = activeChatId;
    pendingRequestsRef.current[chatId] = true;

    apiPost(apiUrl, { message: text, chat_id: chatId })
      .then(data => {
        delete pendingRequestsRef.current[chatId];
        let responseText = (data && data.response) ? data.response
          : (data && data.error) ? 'Sorry, something went wrong: ' + (data.message || data.error)
          : 'Sorry, I had trouble understanding the response. Please try again.';
        const botMsg = { text: responseText, type: 'bot', time: getTimestamp() };
        if (activeChatIdRef.current === chatId) { setIsTyping(false); setCurrentMessages(prev => [...prev, botMsg]); }
        saveMessageToChat(chatId, botMsg);
        if (data && data.title) {
          updateLocalChatTitle(chatId, data.title);
          if (activeChatIdRef.current === chatId) setChatTitle(data.title);
        }
      })
      .catch(() => {
        delete pendingRequestsRef.current[chatId];
        const errorMsg = { text: 'Sorry, I could not reach the AI service. Please try again later.', type: 'bot', time: getTimestamp() };
        if (activeChatIdRef.current === chatId) { setIsTyping(false); setCurrentMessages(prev => [...prev, errorMsg]); }
        saveMessageToChat(chatId, errorMsg);
      });
  }, [inputValue, activeChatId, apiUrl]);

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
          if (activeChatIdRef.current === chatId) { setIsTyping(false); setCurrentMessages(prev => [...prev, botMsg]); }
          saveMessageToChat(chatId, botMsg);
          if (data && data.title) {
            updateLocalChatTitle(chatId, data.title);
            if (activeChatIdRef.current === chatId) setChatTitle(data.title);
          }
        })
        .catch(() => {
          delete pendingRequestsRef.current[chatId];
          const botMsg = { text: faq.a, type: 'bot', time: getTimestamp() };
          if (activeChatIdRef.current === chatId) { setIsTyping(false); setCurrentMessages(prev => [...prev, botMsg]); }
          saveMessageToChat(chatId, botMsg);
        });
    });
  }, [switchTab, createNewChat, openActiveChat, apiUrl]);

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

  const handleDeleteChat = useCallback(() => {
    if (!activeChatId) return;
    if (!confirm('Delete this chat?')) return;
    deleteChatById(activeChatId);
  }, [activeChatId, deleteChatById]);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    isDraggingRef.current = false;
    const launcher = e.currentTarget;
    launcher.setPointerCapture(e.pointerId);
    dragStartRef.current = { x: e.clientX, y: e.clientY, left: launcherPos.left, top: launcherPos.top };

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
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendMessage(); }
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
      <button
        id="cb-launcher"
        className={isOpen ? 'active' : ''}
        onPointerDown={handlePointerDown}
        onClick={handleLauncherClick}
        title="Chat with us"
        style={{ left: launcherPos.left + 'px', top: launcherPos.top + 'px', right: 'auto', bottom: 'auto' }}
      >
        <span className="cb-launcher-icon cb-launcher-open">
          <MessageSquare size={28} color="#fff" />
        </span>
      </button>

      <div id="cb-window" className={isOpen ? 'open' : ''}>
        <div className="cb-header">
          <div className="cb-header-info">
            <div className="cb-header-avatar"><Bot size={22} /></div>
            <div className="cb-header-text">
              <h3>Scale Infinite</h3>
              <span className="cb-header-status">
                <span className="cb-status-dot"></span> We typically reply in minutes
              </span>
            </div>
          </div>
          <button className="cb-header-close" title="Close" onClick={handleClose}>
            <X size={18} color="#fff" />
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
                <div className="cb-card-icon"><MessageCircle size={22} color="#fff" /></div>
                <div className="cb-card-text">
                  <h4>Send us a message</h4>
                  <p>We usually reply in a few minutes</p>
                </div>
                <span className="cb-card-arrow"><ChevronRight size={20} /></span>
              </div>
              <div className="cb-home-card" onClick={() => switchTab('help')}>
                <div className="cb-card-icon"><HelpCircle size={22} color="#fff" /></div>
                <div className="cb-card-text">
                  <h4>Frequently Asked Questions</h4>
                  <p>Find answers to common questions</p>
                </div>
                <span className="cb-card-arrow"><ChevronRight size={20} /></span>
              </div>
            </div>

            <div className="cb-salesiq-card">
              <div className="cb-salesiq-header">
                <Info size={18} />
                <span>To know about ScaleIQ</span>
              </div>
              <ul className="cb-salesiq-links">
                {['Try now for free', 'Book a personalized demo', 'Choose the right plan for you', 'Register for webinars'].map((text, i) => (
                  <li key={i}>
                    <a href="https://cloud.scaleinfinite.fr" target="_blank" rel="noopener noreferrer">
                      <ChevronsRight size={14} />
                      {text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Message View */}
        <div className={`cb-view cb-view-message ${activeTab === 'message' ? 'active' : ''}`}>
          <div className={`cb-sub-view cb-chat-list-view ${subView === 'list' ? 'active' : ''}`}>
            <div className="cb-chat-list-header">
              <h3>Messages</h3>
              <button className="cb-new-chat-btn" title="New Chat" onClick={() => createNewChat((chatId) => openActiveChat(chatId))}>
                <Plus size={16} />
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
                        <div className="cb-chat-item-icon"><MessageCircle size={18} color="#fff" /></div>
                        <div className="cb-chat-item-text">
                          <div className="cb-chat-item-title">{c.title || 'New Chat'}</div>
                          <div className="cb-chat-item-preview">{lastMsg || 'No messages yet'}</div>
                        </div>
                        <div className="cb-chat-item-meta">
                          <span className="cb-chat-item-time">{formatRelativeTime(c.updated_at)}</span>
                        </div>
                      </div>
                      <button className="cb-chat-item-delete" title="Delete" onClick={(e) => { e.stopPropagation(); deleteChatById(id); }}>
                        <X size={14} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="cb-chat-empty">
                <div className="cb-chat-empty-icon"><MessageSquare size={28} /></div>
                <p>No conversations yet</p>
                <button className="cb-start-chat-btn" onClick={() => createNewChat((chatId) => openActiveChat(chatId))}>Start a new chat</button>
              </div>
            )}
          </div>

          <div className={`cb-sub-view cb-active-chat-view ${subView === 'active' ? 'active' : ''}`}>
            <div className="cb-messages-header">
              <button className="cb-back-btn" title="Back to chats" onClick={showChatList}>
                <ChevronLeft size={18} />
              </button>
              <span className="cb-chat-title">{chatTitle}</span>
              <div className="cb-chat-header-actions">
                <button className="cb-rename-btn" title="Rename chat" onClick={handleRename}>
                  <Pencil size={16} />
                </button>
                <button className="cb-delete-chat-btn" title="Delete chat" onClick={handleDeleteChat}>
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
            <div className="cb-messages" ref={messagesRef}>
              {currentMessages.map((msg, i) => (
                <div key={i} className={`cb-msg-wrap ${msg.type}`}>
                  {msg.type === 'bot' && (
                    <div className="cb-msg-avatar"><Bot size={16} color="#fff" /></div>
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
                  <div className="cb-msg-avatar"><Bot size={16} color="#fff" /></div>
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
                <Send size={18} />
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
                    <ChevronRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="cb-footer">
          <button className={`cb-tab ${activeTab === 'home' ? 'active' : ''}`} onClick={() => switchTab('home')} title="Home">
            <Home size={22} /><span>Home</span>
          </button>
          <button className={`cb-tab ${activeTab === 'message' ? 'active' : ''}`} onClick={() => switchTab('message')} title="Messages">
            <MessageCircle size={22} /><span>Messages</span>
          </button>
          <button className={`cb-tab ${activeTab === 'help' ? 'active' : ''}`} onClick={() => switchTab('help')} title="Help">
            <HelpCircle size={22} /><span>Help</span>
          </button>
        </div>
      </div>
    </>
  );
}
