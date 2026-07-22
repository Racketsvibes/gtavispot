'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Send, Trash2, HelpCircle, ArrowRight, ShieldCheck, Sparkles, MessageSquare, Compass, ExternalLink } from 'lucide-react';
import { askAssistant } from './actions';

interface Citation {
  sourceName: string;
  url?: string | null;
}

interface RelatedEntity {
  id: string;
  type: string;
  name: string;
  slug: string;
}

interface Message {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  confidenceScore?: number;
  citations?: Citation[];
  relatedEntities?: RelatedEntity[];
}

export default function AssistantClient() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: 'Hello! I am the GTA VI Spot AI Assistant. Ask me anything about Lucia, Jason, Vice City locations, businesses, vehicles, or trailers. I answer strictly based on database facts.',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('assistant_recent_searches');
    if (saved) {
      try {
        setRecentSearches(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Auto-scroll messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    // Save to recents
    const nextRecents = [text, ...recentSearches.filter((s) => s !== text)].slice(0, 5);
    setRecentSearches(nextRecents);
    localStorage.setItem('assistant_recent_searches', JSON.stringify(nextRecents));

    // Call server action
    const response = await askAssistant(text);

    const assistantMessage: Message = {
      id: `ai-${Date.now()}`,
      sender: 'assistant',
      text: response.answer,
      confidenceScore: response.confidenceScore,
      citations: response.citations,
      relatedEntities: response.relatedEntities,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setLoading(false);
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'assistant',
        text: 'Hello! I am the GTA VI Spot AI Assistant. Ask me anything about Lucia, Jason, Vice City locations, businesses, vehicles, or trailers. I answer strictly based on database facts.',
      },
    ]);
    setRecentSearches([]);
    localStorage.removeItem('assistant_recent_searches');
  };

  const getEntityUrl = (ent: RelatedEntity) => {
    const type = ent.type.toLowerCase();
    return type === 'character' ? `/characters/${ent.slug}` : `/${type}s/${ent.slug}`;
  };

  return (
    <div className="flex h-[calc(100vh-80px)] w-screen overflow-hidden bg-[#090b0e] text-white">
      {/* 1. Sidebar Panel (History & Suggested) */}
      <div className="hidden w-80 border-r border-white/5 bg-[#0a0c10]/60 p-6 md:flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-pink-500">
            <Sparkles className="h-5 w-5" />
            <span className="font-bold tracking-wider text-sm uppercase">Leonida Assistant</span>
          </div>

          {/* Suggested Queries */}
          <div className="space-y-3">
            <span className="text-xxs font-semibold uppercase tracking-wider text-gray-500">
              Suggested Questions
            </span>
            <div className="space-y-2">
              {[
                'Tell me about Lucia.',
                'Which locations appeared in Trailer 2?',
                'Which businesses are located in Vice City?',
                'What vehicles are connected to Jason?',
              ].map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="w-full text-left rounded-xl border border-white/5 bg-[#12141c]/40 hover:bg-[#151924]/60 p-3 text-xs text-gray-300 transition-all flex justify-between items-center group"
                >
                  <span className="font-medium pr-2">{q}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-gray-500 transition-transform group-hover:translate-x-0.5" />
                </button>
              ))}
            </div>
          </div>

          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <div className="space-y-3">
              <span className="text-xxs font-semibold uppercase tracking-wider text-gray-500">
                Recent Queries
              </span>
              <div className="space-y-1">
                {recentSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(term)}
                    className="w-full text-left truncate py-1.5 px-2 text-xs text-gray-400 hover:text-white rounded hover:bg-white/5"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Clear buttons */}
        <button
          onClick={handleClearHistory}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-3 text-xs font-semibold text-gray-400 hover:text-red-400 hover:border-red-500/20 hover:bg-red-500/5 transition-all"
        >
          <Trash2 className="h-4 w-4" />
          Clear Conversation
        </button>
      </div>

      {/* 2. Main Chat Panel */}
      <div className="flex-1 flex flex-col justify-between h-full bg-[#07080a]/30">
        {/* Chat Window */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex w-full ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-xl rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.sender === 'user'
                    ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white font-medium rounded-tr-none'
                    : 'bg-[#12141c]/80 border border-white/5 text-gray-200 rounded-tl-none space-y-4'
                }`}
              >
                <div>{msg.text}</div>

                {/* AI Meta features (Confidence & Citations) */}
                {msg.sender === 'assistant' && msg.id !== 'welcome' && (
                  <div className="space-y-3 border-t border-white/5 pt-3 mt-1">
                    <div className="flex flex-wrap items-center gap-3">
                      {/* Confidence Tag */}
                      {msg.confidenceScore !== undefined && (
                        <div className="flex items-center gap-1.5 text-xxs font-mono text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded-full">
                          <ShieldCheck className="h-3.5 w-3.5" />
                          <span>{(msg.confidenceScore * 100).toFixed(0)}% Confidence</span>
                        </div>
                      )}

                      {/* Citation URLs */}
                      {msg.citations && msg.citations.length > 0 && (
                        <div className="flex items-center gap-1 text-xxs text-gray-500 font-medium">
                          <span>Cited:</span>
                          {msg.citations.map((cite, idx) => (
                            <a
                              key={idx}
                              href={cite.url || '#'}
                              target="_blank"
                              rel="noreferrer"
                              className="text-pink-400 hover:underline inline-flex items-center gap-0.5"
                            >
                              [{cite.sourceName}]
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Linked entities list */}
                    {msg.relatedEntities && msg.relatedEntities.length > 0 && (
                      <div className="space-y-1.5">
                        <span className="text-xxs font-bold text-gray-500 uppercase tracking-wider block">
                          Related Profiles
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {msg.relatedEntities.map((ent, idx) => (
                            <Link
                              key={idx}
                              href={getEntityUrl(ent)}
                              className="inline-flex items-center gap-1 text-xs rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 hover:bg-white/10 hover:border-pink-500/20 text-gray-200 transition-all font-semibold"
                            >
                              <span>{ent.name}</span>
                              <ExternalLink className="h-3 w-3 text-gray-400" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Loading spinner */}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#12141c]/80 border border-white/5 rounded-2xl rounded-tl-none p-4 flex items-center gap-2">
                <div className="h-2 w-2 animate-bounce rounded-full bg-pink-500" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-pink-500 [animation-delay:0.2s]" />
                <div className="h-2 w-2 animate-bounce rounded-full bg-pink-500 [animation-delay:0.4s]" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input form */}
        <div className="p-6 border-t border-white/5 bg-[#0a0c10]/40">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputText);
            }}
            className="flex gap-2 max-w-4xl mx-auto"
          >
            <input
              type="text"
              placeholder="Ask the Leonida AI Assistant (e.g. Tell me about Vice City)..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="flex-1 rounded-2xl border border-white/10 bg-[#12141c] py-4 px-6 text-sm outline-none transition-all focus:border-pink-500/50"
              aria-label="Factual query text"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || loading}
              className="rounded-2xl bg-pink-500 hover:bg-pink-600 px-6 py-4 transition-all active:scale-95 disabled:opacity-50 flex items-center justify-center shadow-lg shadow-pink-500/10"
              aria-label="Submit query"
            >
              <Send className="h-5 w-5 text-white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
