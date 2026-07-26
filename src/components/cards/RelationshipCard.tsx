'use client';

import React from 'react';
import { Card } from './Card';
import { Badge } from '../ui/Badge';
import { ArrowRightLeft } from 'lucide-react';

interface RelationshipCardProps {
  sourceName: string;
  sourceType: string;
  targetName: string;
  targetType: string;
  relationshipType: string;
  className?: string;
}

export const RelationshipCard: React.FC<RelationshipCardProps> = ({
  sourceName,
  sourceType,
  targetName,
  targetType,
  relationshipType,
  className = '',
}) => {
  return (
    <Card hoverable className={`flex flex-col gap-4 ${className}`}>
      <div className="flex items-center justify-between gap-2.5 text-xxs font-mono text-gray-500 uppercase tracking-wider">
        <span>{sourceType}</span>
        <ArrowRightLeft className="h-3 w-3" />
        <span>{targetType}</span>
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-gray-400 block">From</span>
          <span className="text-sm font-bold text-white block">{sourceName}</span>
        </div>

        <div className="rounded-lg bg-brand-pink/10 border border-brand-pink/20 px-3 py-1.5 text-center shrink-0">
          <span className="text-xxs font-bold text-brand-pink uppercase tracking-widest block font-mono">
            {relationshipType.replace(/_/g, ' ')}
          </span>
        </div>

        <div className="space-y-1 text-right ml-auto">
          <span className="text-xs font-semibold text-gray-400 block">To</span>
          <span className="text-sm font-bold text-white block">{targetName}</span>
        </div>
      </div>
    </Card>
  );
};
