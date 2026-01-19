'use client'
import { motion } from 'motion/react';
import { Send, Sparkles, MessageSquare} from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useState } from 'react';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    role: 'assistant',
    content: "Welcome to FurniVision's AI Design Assistant! I'm here to help you find the perfect furniture pieces for your space. What style are you looking for?",
    timestamp: new Date()
  }
];

const suggestedPrompts = [
  'Show me modern minimalist chairs',
  'I need a dining table for 8 people',
  'What wood finishes do you have?',
  'Design a complete living room'
];

export function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      role: 'user',
      content: input,
      timestamp: new Date()
    };

    setMessages([...messages, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        role: 'assistant',
        content: `I'd be happy to help you with "${input}". Based on your preferences, I recommend exploring our Milano and Zen collections. Each piece features sustainable hardwood construction with AI-optimized ergonomics. Would you like to see specific options or discuss customization?`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
  };

  return (
    <section id="ai-assistant" className="py-24 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#8B4513] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8B4513] rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-[#8B4513]" />
            <span className="text-[#8B4513] tracking-widest text-sm uppercase">
              AI-Powered Design
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#F5F5DC] mb-4">
            Your Personal Design Assistant
          </h2>
          <p className="text-[#F5F5DC]/70 max-w-2xl mx-auto text-lg">
            Harness the power of AI to create your perfect space. Get instant recommendations,
            visualizations, and expert guidance.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#8B4513]/10 to-[#8B4513]/5 rounded-2xl border border-[#8B4513]/20 overflow-hidden backdrop-blur-sm">
            {/* Chat Header */}
            <div className="bg-[#8B4513]/20 border-b border-[#8B4513]/20 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8B4513] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-[#F5F5DC]" />
                </div>
                <div>
                  <h3 className="text-[#F5F5DC] font-semibold">FurniVision AI</h3>
                  <p className="text-[#F5F5DC]/60 text-sm">Always here to help</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-[#F5F5DC]/60 text-sm">Online</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-5 py-3 ${message.role === 'user'
                        ? 'bg-[#8B4513] text-[#F5F5DC]'
                        : 'bg-[#F5F5DC]/10 text-[#F5F5DC] border border-[#F5F5DC]/20'
                      }`}
                  >
                    <p className="leading-relaxed">{message.content}</p>
                    <p className={`text-xs mt-2 ${message.role === 'user' ? 'text-[#F5F5DC]/70' : 'text-[#F5F5DC]/50'
                      }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-[#F5F5DC]/10 border border-[#F5F5DC]/20 rounded-2xl px-5 py-3">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                        className="w-2 h-2 bg-[#8B4513] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                        className="w-2 h-2 bg-[#8B4513] rounded-full"
                      />
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                        className="w-2 h-2 bg-[#8B4513] rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="px-6 pb-4">
                <p className="text-[#F5F5DC]/60 text-sm mb-3">Try asking:</p>
                <div className="grid grid-cols-2 gap-2">
                  {suggestedPrompts.map((prompt, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handlePromptClick(prompt)}
                      className="text-left px-4 py-2 bg-[#F5F5DC]/5 hover:bg-[#F5F5DC]/10 border border-[#F5F5DC]/20 rounded-lg text-[#F5F5DC]/80 text-sm transition-colors"
                    >
                      {prompt}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="border-t border-[#8B4513]/20 p-4 bg-[#8B4513]/5">
              <div className="flex gap-3">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask about furniture, styles, or design ideas..."
                  className="flex-1 bg-[#F5F5DC]/10 border-[#F5F5DC]/20 text-[#F5F5DC] placeholder:text-[#F5F5DC]/40 focus:border-[#8B4513] focus:ring-[#8B4513]"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  className="bg-[#8B4513] hover:bg-[#8B4513]/90 text-[#F5F5DC] disabled:opacity-50"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                icon: Sparkles,
                title: 'Smart Recommendations',
                description: 'AI analyzes your preferences to suggest perfect pieces'
              },
              {
                icon: MessageSquare,
                title: 'Real-time Assistance',
                description: 'Get instant answers about products and customization'
              },
              {
                icon: Sparkles,
                title: 'Virtual Staging',
                description: 'Visualize furniture in your space with AR technology'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F5F5DC]/5 border border-[#F5F5DC]/10 rounded-xl p-6 text-center"
              >
                <div className="w-12 h-12 bg-[#8B4513]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-[#8B4513]" />
                </div>
                <h4 className="text-[#F5F5DC] font-semibold mb-2">{feature.title}</h4>
                <p className="text-[#F5F5DC]/60 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
