'use client';

import React from 'react';
import { Card } from './Card';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: Icon,
  className = '',
}) => {
  return (
    <Card className={`relative overflow-hidden ${className}`}>
      {/* Background radial highlight */}
      <div className="absolute top-0 right-0 h-24 w-24 bg-brand-pink/5 blur-2xl rounded-full" />
      
      <div className="flex flex-col gap-4">
        <div className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-brand-pink/10 border border-brand-pink/20 text-brand-pink">
          <Icon className="h-5 w-5" />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-bold text-white uppercase tracking-wider">
            {title}
          </h4>
          <p className="text-xs text-gray-400 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
};
