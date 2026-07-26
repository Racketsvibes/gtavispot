'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface SidebarProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const Sidebar: React.FC<SidebarProps> = ({ title, children, className = '' }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <motion.div
      animate={{ width: isOpen ? '280px' : '64px' }}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={`relative min-h-screen bg-bg-secondary border-r border-white/5 flex flex-col ${className}`}
    >
      <div className="flex h-16 items-center justify-between px-4 border-b border-white/5">
        {isOpen && (
          <span className="text-sm font-bold uppercase tracking-wider text-brand-pink truncate">
            {title}
          </span>
        )}
        <Button
          variant="ghost"
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 rounded-lg ml-auto"
        >
          {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isOpen ? (
          children
        ) : (
          <div className="flex flex-col items-center gap-4 text-gray-500">
            {/* Minimal icons placeholder or dot when closed */}
            <div className="h-2 w-2 rounded-full bg-brand-pink/50" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
