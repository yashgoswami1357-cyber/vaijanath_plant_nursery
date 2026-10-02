import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Trash2, 
  User, 
  Copy, 
  Check, 
  AlertCircle,
  Lightbulb,
  Sprout
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useAuth } from '../context/AuthContext';
import { AIChatMessage } from '../types';

interface AiAssistantPageProps {
  initialSubject?: string;
}

export const AiAssistantPage: React.FC<AiAssistantPageProps> = ({ initialSubject = '' }) => {
  const { language, t } = useLanguage();
  const { user } = useAuth();

  const [messages, setMessages] = useState<AIChatMessage[]>(() => {
    const saved = localStorage.getItem('vaijanath_ai_chat');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return [];
      }
    }
    return [];
  });

  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const isFirstRender = useRef(true);

  // Ensure page always starts at top when opening AI Assistant
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  // Initialize with contextual message if passed subject
  useEffect(() => {
    if (initialSubject && messages.length === 0) {
      const welcome: AIChatMessage = {
        id: 'msg_init',
        sender: 'assistant',
        text: `Namaste! I am Montu, your botanical & gardening advisor at Vaijanath Plant Nursery. I see you are inquiring about ${initialSubject}. How can I help you grow, protect, or nurture your ${initialSubject} today?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        contextPlant: initialSubject
      };
      setMessages([welcome]);
    } else if (messages.length === 0) {
      const welcome: AIChatMessage = {
        id: 'msg_init_gen',
        sender: 'assistant',
        text: `Namaste${user ? ` ${user.name}` : ''}! I am Montu, your AI gardening guide at Vaijanath Plant Nursery. Ask me anything about Indian plants, trees, organic fertilizers like Jeevamrut and Vermicompost, or natural pest remedies!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([welcome]);
    }
  }, [initialSubject]);

  // Scroll ONLY the internal chat container, never scroll the outer window to footer
  useEffect(() => {
    localStorage.setItem('vaijanath_ai_chat', JSON.stringify(messages));
    
    if (chatContainerRef.current) {
      if (isFirstRender.current) {
        // Fast instant scroll to bottom inside container on first load
        chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        isFirstRender.current = false;
      } else {
        // Smoothly scroll only within the chat messages container
        chatContainerRef.current.scrollTo({
          top: chatContainerRef.current.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  }, [messages]);

  // When loading state changes, ensure internal container scrolls to show typing indicator
  useEffect(() => {
    if (loading && chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [loading]);

  const quickPrompts = [
    'How do I care for Tulsi in winter?',
    'How to prepare Jeevamrut at home?',
    'Why are my Lemon plant leaves curling?',
    'Which plants are best for a sunny Gujarat balcony?',
    'How often should I water a Neem plant in summer?',
    'How to make organic banana peel potassium fertilizer?'
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputValue).trim();
    if (!query || loading) return;

    const userMessage: AIChatMessage = {
      id: 'usr_' + Date.now(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      contextPlant: initialSubject || undefined
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt: query,
          contextPlant: initialSubject,
          language: language,
          history: messages.slice(-6).map(m => ({
            role: m.sender === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          }))
        })
      });

      if (!response.ok) {
        throw new Error('API server returned error');
      }

      const data = await response.json();
      const assistantMessage: AIChatMessage = {
        id: 'ai_' + Date.now(),
        sender: 'assistant',
        text: data.text || 'I apologize, but I could not formulate an answer right now. Please try again.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch {
      // Graceful offline fallback answering based on known Indian gardening rules
      let fallbackAnswer = "In Indian climates, ensure well-draining soil with 30% vermicompost and river sand. Water deeply only when the top 1 inch is dry. For pest attacks, spray diluted neem oil (5ml/L with mild liquid soap) or sour buttermilk (1:10 dilution) in the early morning.";
      
      const lower = query.toLowerCase();
      if (lower.includes('tulsi')) {
        fallbackAnswer = "Tulsi needs 5 hours of morning sunlight. In winter, protect from cold night drafts and reduce watering to prevent root rot. Pinch off flower spikes (Manjari) to keep it bushy and green.";
      } else if (lower.includes('jeevamrut')) {
        fallbackAnswer = "To prepare Jeevamrut: Mix 10kg Desi cow dung, 10L Gomutra, 2kg organic jaggery, 2kg besan, and a handful of Banyan tree soil in 200L water. Stir clockwise twice daily for 48-72 hours in shade.";
      } else if (lower.includes('lemon') || lower.includes('nimbu')) {
        fallbackAnswer = "Curled lemon leaves are usually caused by Citrus Leaf Miner larvae or aphids. Prune badly curled tips and spray cold-pressed neem oil (5ml/L) early in the morning every 7 days.";
      }

      const assistantMessage: AIChatMessage = {
        id: 'ai_' + Date.now(),
        sender: 'assistant',
        text: fallbackAnswer,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, assistantMessage]);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const clearChat = () => {
    setMessages([]);
    localStorage.removeItem('vaijanath_ai_chat');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-6">
      
      {/* Header */}
      <div className="bg-white rounded-3xl border border-[#E2EDE3] p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <div className="w-14 h-14 rounded-2xl bg-[#EAF6E9] p-0.5 border-2 border-[#176B36]/30 overflow-hidden shrink-0 shadow-md">
            <img 
              src="/images/montu_avatar.png" 
              alt="Montu AI Gardening Guide" 
              className="w-full h-full object-cover object-top"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
              }}
            />
          </div>
          <div>
            <h1 className="font-serif text-xl sm:text-2xl font-bold text-[#064E2B] flex items-center gap-2 justify-center sm:justify-start">
              Montu – AI Gardening Guide
              <span className="w-2.5 h-2.5 rounded-full bg-[#3F9B45] animate-pulse"></span>
            </h1>
            <p className="text-xs text-[#718078]">
              Powered by Google Gemini • Vaijanath Nursery Botanical Intelligence
            </p>
          </div>
        </div>

        {messages.length > 0 && (
          <button
            onClick={clearChat}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-[#E2EDE3] hover:border-red-300 text-xs font-semibold text-[#718078] hover:text-red-600 transition-colors cursor-pointer"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear Chat
          </button>
        )}
      </div>

      {/* Chat Messages Box */}
      <div className="bg-white rounded-3xl border border-[#E2EDE3] shadow-xs flex flex-col h-[550px] overflow-hidden">
        
        {/* Messages Stream */}
        <div ref={chatContainerRef} className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#F8FBF7]/50">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${
                msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'
              }`}
            >
              {/* Avatar */}
              {msg.sender === 'user' ? (
                <div className="w-8 h-8 rounded-xl bg-[#176B36] text-white flex items-center justify-center text-xs font-bold shrink-0">
                  {user ? user.name.charAt(0) : 'U'}
                </div>
              ) : (
                <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-[#E2EDE3] shadow-2xs bg-[#EAF6E9]">
                  <img
                    src="/images/montu_avatar.png"
                    alt="Montu"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                    }}
                  />
                </div>
              )}

              {/* Message Bubble */}
              <div className={`max-w-[82%] sm:max-w-[75%] rounded-3xl p-4 text-sm leading-relaxed relative group ${
                msg.sender === 'user'
                  ? 'bg-[#176B36] text-white rounded-tr-xs'
                  : 'bg-white text-[#183426] border border-[#E2EDE3] shadow-xs rounded-tl-xs'
              }`}>
                {msg.contextPlant && msg.sender === 'assistant' && (
                  <span className="inline-block text-[10px] bg-[#EAF6E9] text-[#176B36] font-semibold px-2 py-0.5 rounded-full mb-1.5">
                    Context: {msg.contextPlant}
                  </span>
                )}

                <div className="whitespace-pre-line">
                  {msg.text}
                </div>

                <div className={`flex items-center justify-between gap-4 mt-2 pt-1 border-t text-[10px] ${
                  msg.sender === 'user' ? 'border-white/20 text-white/70' : 'border-[#E2EDE3] text-[#718078]'
                }`}>
                  <span className="flex items-center gap-1 font-medium">
                    {msg.sender === 'assistant' ? '🌱 Montu • ' : ''}{msg.timestamp}
                  </span>

                  {msg.sender === 'assistant' && (
                    <button
                      onClick={() => handleCopy(msg.id, msg.text)}
                      className="hover:text-[#176B36] flex items-center gap-1 cursor-pointer"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {loading && (
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 border border-[#E2EDE3] bg-[#EAF6E9]">
                <img
                  src="/images/montu_avatar.png"
                  alt="Montu"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://banner2.cleanpng.com/lnd/20240523/wab/ax7t3vb9m.webp';
                  }}
                />
              </div>
              <div className="bg-white border border-[#E2EDE3] rounded-2xl px-4 py-3 shadow-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#176B36] animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-[#176B36] animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-[#176B36] animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-[#718078] ml-1">Montu is thinking & checking botanical remedies...</span>
              </div>
            </div>
          )}
        </div>

        {/* Quick Prompts Bar */}
        <div className="p-3 bg-white border-t border-[#E2EDE3] overflow-x-auto scrollbar-none flex gap-2">
          {quickPrompts.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="text-xs bg-[#F8FBF7] hover:bg-[#EAF6E9] text-[#183426] hover:text-[#176B36] border border-[#E2EDE3] hover:border-[#176B36]/30 px-3 py-1.5 rounded-full whitespace-nowrap transition-colors cursor-pointer shrink-0"
            >
              🌱 {q}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div className="p-4 bg-white border-t border-[#E2EDE3]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask anything about plants, watering, soil, pests, or organic fertilizers..."
              className="flex-1 px-4 py-3 bg-[#F8FBF7] border border-[#E2EDE3] rounded-2xl text-sm focus:outline-none focus:border-[#176B36] text-[#183426] placeholder-[#718078]"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={!inputValue.trim() || loading}
              className="p-3 bg-[#176B36] hover:bg-[#064E2B] text-white rounded-2xl transition-all disabled:opacity-40 cursor-pointer shadow-md"
              title="Send question"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>

    </div>
  );
};
