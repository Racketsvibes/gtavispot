import React from 'react';

export default function CommandFooter() {
  return (
    <div className="flex items-center justify-between px-4 py-2.5 border-t border-white/5 bg-[#090b0e]/30 text-xxs text-gray-500 font-mono tracking-wider uppercase">
      <div className="flex gap-4">
        <span>
          <kbd className="bg-white/5 px-1.5 py-0.5 rounded text-gray-400">↑↓</kbd> Navigate
        </span>
        <span>
          <kbd className="bg-white/5 px-1.5 py-0.5 rounded text-gray-400">Enter</kbd> Select
        </span>
      </div>
      <div>
        <span>
          <kbd className="bg-white/5 px-1.5 py-0.5 rounded text-gray-400">Esc</kbd> Close
        </span>
      </div>
    </div>
  );
}
