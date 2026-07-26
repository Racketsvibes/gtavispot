'use client';

import React from 'react';
import { Card } from './Card';
import { Badge } from '../ui/Badge';
import { Avatar } from '../ui/Avatar';
import { MapPin, Eye, Link2 } from 'lucide-react';
import Link from 'next/link';

interface EntityCardProps {
  id: string;
  type: 'character' | 'location' | 'vehicle' | 'weapon' | 'business';
  slug: string;
  name: string;
  avatarSrc?: string | null;
  description?: string;
  status?: string;
  metadata?: Record<string, string>;
  className?: string;
}

export const EntityCard: React.FC<EntityCardProps> = ({
  type,
  slug,
  name,
  avatarSrc,
  description,
  status = 'official',
  metadata,
  className = '',
}) => {
  return (
    <Link href={`/${type}s/${slug}`} className="block">
      <Card hoverable className={`flex flex-col gap-4 ${className}`}>
        <div className="flex items-start gap-4">
          <Avatar src={avatarSrc} name={name} size="md" />
          <div className="space-y-1.5 flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <h4 className="text-sm font-bold text-white truncate">{name}</h4>
              <Badge variant={status === 'official' ? 'pink' : 'secondary'}>{status}</Badge>
            </div>
            <span className="text-xxs font-bold text-gray-500 uppercase tracking-widest block font-mono">
              {type}
            </span>
          </div>
        </div>

        {description && (
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {description}
          </p>
        )}

        {metadata && Object.keys(metadata).length > 0 && (
          <div className="grid grid-cols-2 gap-2 border-t border-white/5 pt-3 mt-auto">
            {Object.entries(metadata).slice(0, 2).map(([key, val]) => (
              <div key={key} className="space-y-0.5">
                <span className="text-[10px] text-gray-500 uppercase block font-mono">
                  {key}
                </span>
                <span className="text-xs font-semibold text-gray-300 truncate block">
                  {val}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </Link>
  );
};
