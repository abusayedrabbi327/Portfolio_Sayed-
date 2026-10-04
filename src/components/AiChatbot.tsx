import React, { useState, useEffect, useRef } from 'react';
import { cvData } from '../data/cvData';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
  links?: { label: string; url: string }[];
}

const quickPrompts = [
  { label: '🛡️ Tell me about AEGIS', prompt: 'Tell me about AEGIS and your cybersecurity research' },
  { label: '🚀 Top Projects', prompt: 'What are your top engineering projects?' },
  { label: '🔬 Explainable AI (XAI)', prompt: 'What is your research in Explainable AI and RT-XNIDS?' },
  { label: '💻 Tech Stack', prompt: 'What programming languages and frameworks do you use?' },
  { label: '🎓 Education & UIU', prompt: 'Where are you studying and what is your academic background?' },
  { label: '📬 Contact Sayed', prompt: 'How can I contact Abu Sayed Rabbi directly?' },
];

export const AiChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'bot',
      text: `Hello! I'm Sayed's AI Stand-in. Think of me as Abu Sayed Rabbi's 24/7 virtual assistant. Ask me anything about his research in AEGIS/XAI, software projects, tech stack, or get in touch!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const generateAnswer = (query: string): { text: string; links?: { label: string; url: string }[] } => {
    const q = query.toLowerCase();

    if (q.includes('aegis') || q.includes('capstone') || q.includes('fyp') || q.includes('intrusion') || q.includes('hids') || q.includes('nids')) {
      return {
        text: `🛡️ **AEGIS** is Sayed's flagship Undergraduate Capstone project at United International University. It is an AI-augmented Host/Network Intrusion Detection System combining deep learning classification with real-time SHAP/LIME Explainable AI (XAI) for sub-millisecond threat attribution and 99.4% detection accuracy on CICIDS2017.`,
        links: [
          { label: 'View Research Section', url: '#research' },
          { label: 'AEGIS GitHub Repository', url: 'https://github.com/Ishrak-1520/AEGIS' },
        ],
      };
    }

    if (q.includes('rt-xnids') || q.includes('xai') || q.includes('explainable') || q.includes('shap') || q.includes('lime') || q.includes('research')) {
      return {
        text: `🔬 **Research Focus**: Sayed focuses on Real-Time Explainable AI (XAI) for High-Speed Network Security (RT-XNIDS) and Water Quality AI prediction. His research bridges the black-box gap in deep learning by computing real-time feature attributions during line-rate network flow inspections.`,
        links: [
          { label: 'Explore Research Frontiers', url: '#research' },
          { label: 'Innovation Radar', url: '#current-focus' },
        ],
      };
    }

    if (q.includes('project') || q.includes('fender') || q.includes('pocketguru') || q.includes('biniorbit') || q.includes('pronto')) {
      return {
        text: `🚀 Sayed has built 20+ open-source and enterprise platforms including:\n• **AEGIS**: AI-powered Intrusion Detection System\n• **BiniOrbit**: Multi-tenant Investment Platform (PHP/Laravel/MySQL)\n• **Pronto**: AI Marketing Studio with Gemini 1.5 & Node.js\n• **Flux**: Agentic RAG Educational Scaffold\n• **VeritasAI**: Deepfake Detection System\n• **Echo**: AI Screen Assistant with Desktop Vision`,
        links: [
          { label: 'Browse All Projects', url: '#projects' },
          { label: 'GitHub Profile', url: cvData.github },
        ],
      };
    }

    if (q.includes('stack') || q.includes('language') || q.includes('skill') || q.includes('python') || q.includes('react') || q.includes('c++')) {
      return {
        text: `💻 **Core Stack**:\n• **Languages**: Python, C/C++, TypeScript, JavaScript, Java, PHP, SQL\n• **Frameworks**: React, Astro, Next.js, FastAPI, Node.js, Laravel, Tailwind CSS, PyQt5\n• **AI/ML**: PyTorch, Scikit-Learn, SHAP, LIME, OpenCV, Gemini API\n• **Tools & DevOps**: Docker, Linux, Git, Wireshark, Snort, Postman, Figma`,
        links: [{ label: 'View Skills Matrix', url: '#skills' }],
      };
    }

    if (q.includes('education') || q.includes('uiu') || q.includes('university') || q.includes('college') || q.includes('degree')) {
      return {
        text: `🎓 **Academic Background**:\n• **B.Sc. in Computer Science & Engineering**: United International University (UIU), Dhaka (2022 – 2026)\n• **Active Roles**: UIU English Language Forum (ELF) Executive, UIU Theater & Film Club, UIU Robotics Lab Contributor.`,
        links: [{ label: 'Leadership & Background', url: '#leadership' }],
      };
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach') || q.includes('phone') || q.includes('linkedin')) {
      return {
        text: `📬 You can reach Sayed directly via:\n• **Email**: ${cvData.email}\n• **LinkedIn**: ${cvData.linkedin}\n• **GitHub**: ${cvData.github}\nHe typically responds within 24 hours.`,
        links: [
          { label: 'Send Email Directly', url: `mailto:${cvData.email}` },
          { label: 'Connect on LinkedIn', url: cvData.linkedin },
        ],
      };
    }

    if (q.includes('cv') || q.includes('resume') || q.includes('download')) {
      return {
        text: `📄 You can view and download Abu Sayed Rabbi's comprehensive single-page ATS-optimized Master CV directly from the CV section.`,
        links: [{ label: 'Jump to CV Section', url: '#cv-section' }],
      };
    }

    return {
      text: `Thanks for asking! Sayed is a full-stack engineer and cybersecurity researcher based in Dhaka. Feel free to explore his research publications, check out his 20+ software projects, or contact him directly via email at ${cvData.email}.`,
      links: [
        { label: 'View Projects', url: '#projects' },
        { label: 'Contact Sayed', url: '#contact' },
      ],
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = generateAnswer(query);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        links: response.links,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Floating Chatbot Launch Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-label="Open AI Assistant"
          className="group relative flex items-center gap-3 px-4 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 text-slate-950 font-bold shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all cursor-pointer"
        >
          <div className="relative">
            <span className="text-xl">🤖</span>
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-400"></span>
            </span>
          </div>
          <span className="text-sm tracking-tight text-slate-950 font-extrabold hidden sm:inline">
            Chat with Sayed AI
          </span>
          <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-slate-950/20 text-slate-950 hidden md:inline">
            24/7 Stand-in
          </span>
        </button>
      )}

      {/* Chat Window Drawer */}
      {isOpen && (
        <div className="w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] rounded-3xl bg-[#090d16]/95 backdrop-blur-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-xl shadow-inner">
                🤖
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-900"></span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-bold text-sm text-white">Sayed AI</h4>
                  <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Virtual Stand-in
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono">Neural Assistant • Always Online</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 scrollbar-thin scrollbar-thumb-slate-800">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none shadow-md shadow-cyan-500/20'
                      : 'bg-slate-900/90 text-slate-200 border border-slate-800 rounded-tl-none shadow-sm'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.text}</p>

                  {/* Optional Action Links */}
                  {msg.links && msg.links.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-800 flex flex-wrap gap-1.5">
                      {msg.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.url}
                          onClick={() => {
                            if (link.url.startsWith('#')) setIsOpen(false);
                          }}
                          className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-1 rounded-lg bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 transition-colors"
                        >
                          <span>{link.label}</span>
                          <span>↗</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
                <span className="text-[10px] font-mono text-slate-500 mt-1 px-1">{msg.timestamp}</span>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 w-fit">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Starter Quick Prompt Chips */}
          <div className="px-3 py-2 bg-slate-950/60 border-t border-slate-800/80 overflow-x-auto whitespace-nowrap flex gap-1.5 scrollbar-none">
            {quickPrompts.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(item.prompt)}
                className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 hover:bg-cyan-950 text-slate-300 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40 transition-all shrink-0 cursor-pointer"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-900 border-t border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything about Sayed's work..."
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              aria-label="Send message"
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer text-xs sm:text-sm shadow-md shadow-cyan-500/20"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
