'use client';

import React from 'react';
import { Card } from './Card';
import { motion } from 'framer-motion';

interface StatisticsCardProps {
  label: string;
  value: string | number;
  change?: string | number;
  trend?: 'up' | 'down' | 'neutral';
  className?: string;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  label,
  value,
  change,
  trend = 'neutral',
  className = '',
}) => {
  const trendColors = {
    up: 'text-emerald-400',
    down: 'text-brand-magenta',
    neutral: 'text-gray-500',
  };

  return (
    <Card className={`relative overflow-hidden flex flex-col justify-between ${className}`}>
      <div className="space-y-1">
        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block font-mono">
          {label}
        </span>
        <div className="text-3xl font-black tracking-tight text-white font-mono">
          {value}
        </div>
      </div>

      {change !== undefined && (
        <div className="flex items-center gap-1.5 mt-4 text-xxs font-bold uppercase tracking-wider font-mono">
          <span className={trendColors[trend]}>
            {trend === 'up' ? '▲' : trend === 'down' ? '▼' : '•'} {change}
          </span>
          <span className="text-gray-500">vs last import</span>
        </div>
      )}
    </Card>
  );
};
