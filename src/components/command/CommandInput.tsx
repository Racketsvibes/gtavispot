import React from 'react';
import { Search, X } from 'lucide-react';

interface CommandInputProps {
  value: string;
  onChange: (val: string) => void;
  onClear: () => void;
}

export default function CommandInput({ value, onChange, onClear }: CommandInputProps) {
  return (
    <div className="relative flex items-center px-4 py-3.5 border-b border-white/5 bg-[#141720]/45">
      <Search className="h-5 w-5 text-gray-400 mr-3" />
      <input
        type="text"
        placeholder="Type a command or search entities (e.g. Lucia, Vice City)..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
        className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none border-none focus:ring-0"
      />
      {value && (
        <button
          onClick={onClear}
          className="rounded-lg p-1 text-gray-400 hover:bg-white/5 hover:text-white transition-colors"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
