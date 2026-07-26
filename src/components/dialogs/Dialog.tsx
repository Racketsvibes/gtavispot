'use client';

import React from 'react';
import { Modal } from './Modal';
import { Button } from '../ui/Button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  onClose,
  title,
  description,
  onConfirm,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  className = '',
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} className={`max-w-md ${className}`}>
      <div className="space-y-6">
        <p className="text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
        <div className="flex justify-end gap-3 border-t border-white/5 pt-4">
          <Button variant="ghost" onClick={onClose} size="sm">
            {cancelText}
          </Button>
          <Button variant="primary" onClick={onConfirm} size="sm">
            {confirmText}
          </Button>
        </div>
      </div>
    </Modal>
  );
};
