
import React, { useState, useRef, useEffect } from 'react';
import { chatWithLegalAI } from '../services/geminiService';

interface Message {
  role: 'user' | 'ai';
  text: string;
}

const Consultation: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'ai', text: '您好！我是东莞涉外法律助手。您可以咨询关于跨境投资、国际贸易纠纷、涉外仲裁等方面的问题。' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const aiResponse = await chatWithLegalAI(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col h-[700px]">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">涉外法律在线咨询</h1>
        <p className="text-gray-500">AI 智能分析法律问题，提供初步建议 (Powered by Gemini)</p>
      </div>

      <div className="flex-grow bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden flex flex-col">
        <div ref={scrollRef} className="flex-grow p-6 overflow-y-auto space-y-4 bg-gray-50">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[80%] p-4 rounded-2xl ${
                m.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'
              }`}>
                <div className="whitespace-pre-wrap text-sm leading-relaxed">{m.text}</div>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
               <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none shadow-sm">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                  </div>
               </div>
            </div>
          )}
        </div>

        <div className="p-4 bg-white border-t border-gray-100 flex items-center space-x-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="请在此输入您的问题..."
            className="flex-grow px-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={handleSend}
            disabled={loading}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
