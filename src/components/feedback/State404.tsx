'use client';

import React from 'react';
import Link from 'next/link';
import { Home, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface State404Props {
  title?: string;
  description?: string;
  className?: string;
}

export const State404: React.FC<State404Props> = ({
  title = 'Page Not Found',
  description = 'The coordinates you were looking for lead to uncharted leonida territories.',
  className = '',
}) => {
  return (
    <div className={`flex flex-col items-center justify-center text-center px-6 py-20 max-w-lg mx-auto space-y-6 ${className}`}>
      <div className="space-y-2">
        <h1 className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-orange font-mono select-none">
          404
        </h1>
        <h2 className="text-2xl font-extrabold text-white uppercase tracking-wider">
          {title}
        </h2>
        <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed">
          {description}
        </p>
      </div>

      <Link href="/" className="inline-block">
        <Button variant="primary" className="gap-2">
          <Home className="h-4 w-4" />
          <span>Back to Safehouse</span>
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};
