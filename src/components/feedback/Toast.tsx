'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, CheckCircle, X } from 'lucide-react';
import { Button } from '../ui/Button';

interface ToastProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  type?: 'success' | 'error' | 'info';
}

export const Toast: React.FC<ToastProps> = ({
  isOpen,
  onClose,
  message,
  type = 'info',
}) => {
  const icons = {
    success: <CheckCircle className="h-5 w-5 text-emerald-400" />,
    error: <AlertCircle className="h-5 w-5 text-brand-magenta" />,
    info: <AlertCircle className="h-5 w-5 text-brand-pink" />,
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3.5 rounded-2xl border border-white/10 bg-bg-secondary p-4 shadow-2xl max-w-sm"
        >
          {icons[type]}
          <span className="text-xs font-semibold text-gray-200">
            {message}
          </span>
          <Button variant="ghost" onClick={onClose} className="p-1 rounded-lg ml-auto text-gray-500 hover:text-white">
            <X className="h-3.5 w-3.5" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
