// app/_components/LocationCard.tsx
'use client';

import { MapPin } from 'lucide-react';
import type { Location } from '../lib/types';

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

export function LocationCard({ location, onClick }: LocationCardProps) {
  const categoryColors = {
    academic: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400',
    administrative: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400',
    facility: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400',
    residence: 'bg-orange-500/10 border-orange-500/20 text-orange-600 dark:text-orange-400',
    gate: 'bg-gray-500/10 border-gray-500/20 text-gray-600 dark:text-gray-400',
  };

  return (
    <button
      onClick={onClick}
      className="w-full p-4 bg-card border-2 border-border rounded-lg hover:border-primary hover:shadow-lg transition-all text-left group"
    >
      <div className="flex items-start gap-3">
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
          <MapPin className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
            {location.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-2">
            {location.description}
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className={`px-2 py-1 text-xs rounded-full border ${categoryColors[location.category]}`}>
              {location.category}
            </span>
            {location.aliases.slice(0, 2).map((alias, idx) => (
              <span 
                key={idx}
                className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full"
              >
                {alias}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}