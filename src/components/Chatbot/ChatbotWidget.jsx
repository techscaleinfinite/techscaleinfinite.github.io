import React, { useState, useRef, useEffect, useCallback } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import './chatbot.css';

// SVG icon components (replacing boxicons dependency)
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

function getTimestamp() {
  const now = new Date();
  let h = now.getHours();
  let m = now.getMinutes();
  const ampm = h >= 12 ? 'PM' : 'AM';
  h = h % 12 || 12;
  m = m < 10 ? '0' + m : m;
  return h + ':' + m + ' ' + ampm;
}

function buildKeywordRegex(keywords) {
  return new RegExp(
    '\\b(' + keywords.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|') + ')\\b',
    'i'
  );
}

function getResponse(chatbotData, userMsg) {
  const msg = userMsg.toLowerCase().trim();
  const { faqs, responses, fallback } = chatbotData;

  // Check exact FAQ question matches
  for (let i = 0; i < faqs.length; i++) {
    if (msg === faqs[i].q.toLowerCase()) {
      return faqs[i].a;
    }
  }

  // Check FAQ keyword matches
  for (let j = 0; j < faqs.length; j++) {
    if (faqs[j].keywords && faqs[j].keywords.length > 0) {
      if (msg.match(buildKeywordRegex(faqs[j].keywords))) {
        return faqs[j].a;
      }
    }
  }

  // Check general response keyword matches
  for (let k = 0; k < responses.length; k++) {
    if (responses[k].keywords && responses[k].keywords.length > 0) {
      if (msg.match(buildKeywordRegex(responses[k].keywords))) {
        return responses[k].reply;
      }
    }
  }

  return fallback || "I'm not sure about that. Please check the Help section for common questions!";
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('home');
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotData, setChatbotData] = useState(null);
  const [launcherPos, setLauncherPos] = useState(null);
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const hasWelcomedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0, left: 0, top: 0 });
  const chatbotDataUrl = useBaseUrl('/chatbot-data.json');

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
  }, [messages, isTyping]);

  // Focus input when switching to message tab
  useEffect(() => {
    if (activeTab === 'message' && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 100);
    }
  }, [activeTab]);

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
      setIsOpen(!isOpen);
    }
  }, [isOpen]);

  const switchTab = useCallback((tab) => {
    setActiveTab(tab);
    if (tab === 'message' && !hasWelcomedRef.current && chatbotData) {
      hasWelcomedRef.current = true;
      setMessages([{
        text: chatbotData.greeting.botWelcome,
        type: 'bot',
        time: getTimestamp(),
      }]);
    }
  }, [chatbotData]);

  const sendMessage = useCallback(() => {
    const text = inputValue.trim();
    if (!text || !chatbotData) return;

    setMessages(prev => [...prev, { text, type: 'user', time: getTimestamp() }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      const reply = getResponse(chatbotData, text);
      setMessages(prev => [...prev, { text: reply, type: 'bot', time: getTimestamp() }]);
    }, 700 + Math.random() * 500);
  }, [inputValue, chatbotData]);

  const handleFaqClick = useCallback((faq) => {
    switchTab('message');
    setMessages(prev => {
      const updated = hasWelcomedRef.current
        ? prev
        : [{ text: chatbotData.greeting.botWelcome, type: 'bot', time: getTimestamp() }];
      hasWelcomedRef.current = true;
      return [...updated, { text: faq.q, type: 'user', time: getTimestamp() }];
    });
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { text: faq.a, type: 'bot', time: getTimestamp() }]);
    }, 600);
  }, [chatbotData, switchTab]);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!chatbotData || !launcherPos) return null;

  const { greeting, faqs } = chatbotData;

  return (
    <>
      {/* Launcher Button — Draggable */}
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
          <button className="cb-header-close" title="Close" onClick={() => setIsOpen(false)}>
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
              <div className="cb-home-card" onClick={() => switchTab('message')}>
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

            {/* Know about ScaleIQ Card */}
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
          <div className="cb-messages" ref={messagesRef}>
            {messages.map((msg, i) => (
              <div key={i} className={`cb-msg-wrap ${msg.type}`}>
                {msg.type === 'bot' && (
                  <div className="cb-msg-avatar"><BotIcon size={16} /></div>
                )}
                <div className="cb-msg-body">
                  <div className="cb-msg-bubble">{msg.text}</div>
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
