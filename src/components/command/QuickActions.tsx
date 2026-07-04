import React from 'react';
import { Map, Users, Compass, Car, Shield, Image } from 'lucide-react';

interface QuickActionsProps {
  onSelectAction: (route: string) => void;
}

export default function QuickActions({ onSelectAction }: QuickActionsProps) {
  const actions = [
    { label: 'Open Interactive Map', route: '/map', icon: Map, color: 'text-pink-400 bg-pink-500/10' },
    { label: 'Browse Characters', route: '/characters', icon: Users, color: 'text-purple-400 bg-purple-500/10' },
    { label: 'Browse Locations', route: '/locations', icon: Compass, color: 'text-cyan-400 bg-cyan-500/10' },
    { label: 'Browse Vehicles', route: '/vehicles', icon: Car, color: 'text-orange-400 bg-orange-500/10' },
    { label: 'Browse Weapons', route: '/weapons', icon: Shield, color: 'text-red-400 bg-red-500/10' },
    { label: 'Open Media Gallery', route: '/api/media/gallery', icon: Image, color: 'text-emerald-400 bg-emerald-500/10' },
  ];

  return (
    <div className="space-y-2 p-3 border-b border-white/5">
      <span className="px-2 text-xxs font-bold text-gray-500 uppercase tracking-wider block">
        Quick Shortcuts
      </span>
      <div className="grid grid-cols-2 gap-2">
        {actions.map((act) => {
          const Icon = act.icon;
          return (
            <div
              key={act.label}
              onClick={() => onSelectAction(act.route)}
              className="flex items-center gap-3 rounded-xl border border-white/5 bg-[#141720]/20 hover:bg-[#181d28]/70 hover:border-pink-500/30 p-3 text-sm text-gray-300 cursor-pointer transition-all hover:scale-[1.01]"
            >
              <div className={`rounded-lg p-2 ${act.color}`}>
                <Icon className="h-4 w-4" />
              </div>
              <span className="font-semibold text-xs">{act.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
