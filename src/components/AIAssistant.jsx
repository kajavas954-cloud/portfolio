import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Cpu, User, ArrowRight, CornerDownLeft } from 'lucide-react';

const suggestionChips = [
  'Tell me about Shamith',
  'What are his core skills?',
  'Explain his AI CRM project',
  'Explain his MediEase project',
  'Why should we hire him?',
  'What is his availability?',
];

const knowledgeBase = {
  about: "Shamith R. Kajava is a motivated BCA graduate specializing in Software Development & Web Design. He has hands-on experience building full-stack web applications and integrating advanced agentic AI architectures like LangGraph, LangChain, and Groq LLMs. He is passionate about crafting clean, modern interfaces backed by performant, secure backends.",
  skills: "Shamith's core skillset is divided into:\n\n* **Languages**: Java, JavaScript, Python, SQL, HTML, CSS\n* **Frontend**: React, Redux Toolkit, Vite, Tailwind CSS, Bootstrap\n* **Backend**: FastAPI, Node.js, Express.js, REST APIs\n* **Database**: MySQL, SQLite, SQLAlchemy\n* **AI & Tools**: LangGraph, LangChain, Groq (Gemma 2-9B-IT), Git, GitHub, Postman, VS Code",
  crm: "His **AI-Powered CRM Co-Pilot for HCP Interactions** is an AI-first CRM built with React, FastAPI, LangGraph, and Groq LLM (Gemma 2-9B-IT). It features a conversational AI Chat Co-Pilot, automated entity extraction from transcripts, sentiment analysis, and machine-learning-based Next Best Action recommendations to optimize physician-representative interactions.",
  mediease: "His **MediEase – Online Medicine Ordering & Delivery System** is a full-stack platform built with React, Node.js, Express.js, and MySQL. It features user authentication, catalog searching, prescription medicine ordering, doctor appointment scheduling, and an administrative control panel to manage stocks and clinic bookings.",
  hire: "You should hire Shamith because he bridges the gap between modern Full Stack engineering and cognitive AI development. He is a fresher who has already built multi-agent LangGraph pipelines, designed production-ready Express backends, and implemented secure Nodemailer contact networks. He is eager to learn, adaptable, and immediately ready to deliver value.",
  education: "Shamith is pursuing a Bachelor of Computer Applications (BCA) in Software Development & Web Design at Srinivas University, Mangalore (2023–2026). He has maintained outstanding academic records in algorithmic studies and database management.",
  availability: "Shamith is seeking Full Stack Developer, Software Engineer, Frontend Developer, or Backend Developer opportunities. He is ready to relocate or work remotely and is available for interviews immediately.",
  default: "I can help you audit Shamith's credentials! Feel free to ask about his skills, education, AI CRM project, MediEase project, availability, or contact information."
};

const getResponse = (query) => {
  const q = query.toLowerCase();
  if (q.includes('about') || q.includes('who is') || q.includes('shamith') && !q.includes('hire') && !q.includes('skill')) return knowledgeBase.about;
  if (q.includes('skill') || q.includes('technolog') || q.includes('framework') || q.includes('language')) return knowledgeBase.skills;
  if (q.includes('crm') || q.includes('co-pilot') || q.includes('hcp') || q.includes('ai-powered crm')) return knowledgeBase.crm;
  if (q.includes('mediease') || q.includes('medicine') || q.includes('ordering')) return knowledgeBase.mediease;
  if (q.includes('hire') || q.includes('why should') || q.includes('benefit')) return knowledgeBase.hire;
  if (q.includes('education') || q.includes('bca') || q.includes('university') || q.includes('college')) return knowledgeBase.education;
  if (q.includes('avail') || q.includes('work') || q.includes('job') || q.includes('hire him')) return knowledgeBase.availability;
  if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('mail')) return `You can reach Shamith directly via email at **kajavas954@gmail.com** or phone at **+91 98807 86549**. You can also use the "Send a Transmission" contact form at the bottom of the page to message him and attach files!`;
  return knowledgeBase.default;
};

export default function AIAssistant({ onInteraction }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: 'bot', text: "Hello! I am Shamith's AI Assistant. Ask me anything about his experience, technical skills, academic projects, or job availability!", time: 'Just now' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isTyping]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // Trigger parent tracker click if callback provided
    if (onInteraction) onInteraction();

    const userMessage = { sender: 'user', text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking and typing latency
    setTimeout(() => {
      const replyText = getResponse(text);
      const botMessage = { sender: 'bot', text: replyText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setIsTyping(false);
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Floating Chat Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white shadow-xl hover:shadow-brand-purple/20 hover:scale-105 transition cursor-pointer flex items-center justify-center border border-white/10"
        whileTap={{ scale: 0.95 }}
      >
        <MessageSquare className="w-6 h-6" />
      </motion.button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed bottom-24 right-6 z-40 w-[95%] max-w-sm glass border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[480px]"
          >
            {/* Top Bar */}
            <div className="px-4 py-3 bg-gradient-to-r from-brand-purple/25 to-brand-blue/25 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Cpu className="w-5 h-5 text-brand-purple animate-pulse" />
                <div>
                  <h4 className="text-xs font-bold text-white tracking-tight">Kajava.ai Co-Pilot</h4>
                  <span className="text-[9px] font-mono text-emerald-400">Agentic Knowledge System</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin select-none">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 rounded-xl text-xs leading-relaxed border ${
                    msg.sender === 'user'
                      ? 'bg-brand-purple/10 border-brand-purple/20 text-white rounded-br-none'
                      : 'bg-white/4 border-white/5 text-gray-300 rounded-bl-none'
                  }`}>
                    {/* Markdown formatting simulation for bullets/bolding in bot replies */}
                    <div className="whitespace-pre-wrap">
                      {msg.text.split('\n').map((line, idx) => {
                        if (line.startsWith('* **')) {
                          // bold list item
                          const parts = line.split('**');
                          return (
                            <div key={idx} className="mt-1 flex items-start gap-1.5 pl-2">
                              <span className="text-brand-purple">•</span>
                              <span><strong>{parts[1]}</strong>{parts[2]}</span>
                            </div>
                          );
                        }
                        if (line.includes('**')) {
                          // bold inline text
                          const parts = line.split('**');
                          return (
                            <p key={idx} className="mb-1">
                              {parts[0]}<strong>{parts[1]}</strong>{parts[2]}
                            </p>
                          );
                        }
                        return <p key={idx} className="mb-1">{line}</p>;
                      })}
                    </div>
                    <span className="text-[8px] font-mono text-gray-500 block text-right mt-1.5">{msg.time}</span>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/4 border border-white/5 p-3 rounded-xl rounded-bl-none flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Suggestions Drawer */}
            <div className="px-4 py-2 border-t border-white/5 overflow-x-auto flex gap-1.5 scrollbar-none whitespace-nowrap bg-slate-950/20 select-none">
              {suggestionChips.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(chip)}
                  className="px-2.5 py-1 text-[9px] font-medium rounded-full bg-white/4 hover:bg-brand-purple/15 border border-white/5 hover:border-brand-purple/20 text-gray-400 hover:text-white transition duration-200 cursor-pointer text-center"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Form Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 border-t border-white/5 bg-slate-950/40 flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a question..."
                className="flex-1 bg-slate-900/50 border border-white/5 rounded-xl px-3.5 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-brand-purple/40 transition"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white disabled:opacity-50 transition cursor-pointer shrink-0 flex items-center justify-center border border-white/10"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
