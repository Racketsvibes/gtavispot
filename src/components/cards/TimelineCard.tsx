'use client';

import React from 'react';
import { Card } from './Card';
import { Badge } from '../ui/Badge';
import { Calendar } from 'lucide-react';

interface TimelineCardProps {
  date: string;
  title: string;
  description: string;
  status?: string;
  className?: string;
}

export const TimelineCard: React.FC<TimelineCardProps> = ({
  date,
  title,
  description,
  status = 'Released',
  className = '',
}) => {
  return (
    <Card hoverable className={`relative pl-8 md:pl-12 flex flex-col gap-3 ${className}`}>
      {/* Decorative vertical line dot */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-bg-tertiary">
        <div className="absolute -top-1.5 -left-1 h-3.5 w-3.5 rounded-full bg-brand-pink border-4 border-bg-primary" />
      </div>

      <div className="flex items-center gap-3 justify-between flex-wrap">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase tracking-widest font-mono">
          <Calendar className="h-4 w-4 text-brand-pink" />
          {date}
        </span>
        <Badge variant={status === 'Released' ? 'green' : 'gold'}>
          {status}
        </Badge>
      </div>

      <div className="space-y-1.5">
        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
          {title}
        </h4>
        <p className="text-xs text-gray-400 leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
};
