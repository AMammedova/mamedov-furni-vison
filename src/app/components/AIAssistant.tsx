'use client';

import { motion } from 'motion/react';
import { Send, Sparkles, MessageSquare } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

interface Message {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export function AIAssistant() {
  const t = useTranslations('AIAssistant');

  const initialMessages: Message[] = [
    {
      id: 1,
      role: 'assistant',
      content: t('welcome_message'),
      timestamp: new Date()
    }
  ];

  const suggestedPrompts = [
    t('suggestions.1'),
    t('suggestions.2'),
    t('suggestions.3'),
    t('suggestions.4')
  ];

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
    <section id="ai-assistant" className="py-24 relative overflow-hidden">
      {/* Background decoration - Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-primary tracking-[0.2em] text-sm uppercase font-medium">
              {t('badge')}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 tracking-tight">
            {t('title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Glass Bubble Container */}
          <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] bg-gradient-to-b from-white/5 to-black/20 backdrop-blur-xl">
            {/* Glossy Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />

            {/* Chat Header */}
            <div className="px-8 py-5 flex items-center justify-between border-b border-white/5 bg-black/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/80 to-primary/40 flex items-center justify-center shadow-lg shadow-primary/20">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-serif text-lg tracking-wide">{t('chat_title')}</h3>
                  <p className="text-white/50 text-xs uppercase tracking-wider">{t('status')}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]" />
                <span className="text-white/70 text-xs font-medium">{t('active')}</span>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-[500px] overflow-y-auto p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-6 py-4 shadow-sm backdrop-blur-md transition-all duration-300 ${message.role === 'user'
                      ? 'bg-primary/90 text-white rounded-tr-sm shadow-lg shadow-primary/10'
                      : 'bg-white/10 text-white/90 border border-white/5 rounded-tl-sm'
                      }`}
                  >
                    <p className="leading-relaxed font-light">{message.content}</p>
                    <p className={`text-[10px] mt-2 uppercase tracking-wider ${message.role === 'user' ? 'text-white/60' : 'text-white/40'
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
                  <div className="bg-white/5 border border-white/5 rounded-2xl px-5 py-4 rounded-tl-sm">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.2 }}
                          className="w-1.5 h-1.5 bg-primary/80 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested Prompts */}
            {messages.length === 1 && (
              <div className="px-8 pb-4">
                <p className="text-white/40 text-xs mb-3 uppercase tracking-wider font-medium">Suggested Questions</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {suggestedPrompts.map((prompt, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.01, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      whileTap={{ scale: 0.99 }}
                      onClick={() => handlePromptClick(prompt)}
                      className="text-left px-4 py-3 bg-white/5 border border-white/5 rounded-xl text-white/70 text-sm transition-all duration-200 hover:text-white group"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/50 group-hover:bg-primary transition-colors"></span>
                        {prompt}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-4 bg-gradient-to-t from-black/20 to-transparent">
              <div className="relative flex items-center gap-2 bg-white/5 border border-white/10 rounded-full p-2 pl-6 backdrop-blur-md shadow-inner">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={t('placeholder')}
                  className="flex-1 bg-transparent border-none text-white placeholder:text-white/30 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 h-auto py-2 font-light"
                />
                <Button
                  onClick={handleSend}
                  disabled={!input.trim()}
                  size="icon"
                  className="rounded-full bg-primary hover:bg-primary/90 text-white w-10 h-10 shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-primary/40 shrink-0"
                >
                  <Send className="w-4 h-4 ml-0.5" />
                </Button>
              </div>
            </div>
          </div>

          {/* AI Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 px-4">
            {[
              {
                icon: Sparkles,
                title: t('features.recommendations_title'),
                description: t('features.recommendations_desc')
              },
              {
                icon: MessageSquare,
                title: t('features.assistance_title'),
                description: t('features.assistance_desc')
              },
              {
                icon: Sparkles,
                title: t('features.staging_title'),
                description: t('features.staging_desc')
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-white font-serif tracking-wide text-lg mb-2">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
