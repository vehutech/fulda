// app/_components/LocationCard.tsx
'use client';

import { MapPin, ArrowRight } from 'lucide-react';
import type { Location } from '../lib/types';
import Image from 'next/image';

interface LocationCardProps {
  location: Location;
  onClick: () => void;
}

export function LocationCard({ location, onClick }: LocationCardProps) {
  const categoryColors = {
    academic: 'bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300',
    administrative: 'bg-purple-500/10 border-purple-500/30 text-purple-700 dark:text-purple-300',
    facility: 'bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-300',
    residence: 'bg-orange-500/10 border-orange-500/30 text-orange-700 dark:text-orange-300',
    gate: 'bg-gray-500/10 border-gray-500/30 text-gray-700 dark:text-gray-300',
  };

  const categoryIcons = {
    academic: '🎓',
    administrative: '🏛️',
    facility: '🏢',
    residence: '🏠',
    gate: '🚪',
  };

  return (
    <button
      onClick={onClick}
      className="w-full bg-card border-2 border-border rounded-xl hover:border-primary hover:shadow-2xl transition-all duration-300 text-left group overflow-hidden"
    >
      <div className="flex gap-0">
        {/* Building Image Thumbnail */}
        {location.image && (
          <div className="relative w-32 h-32 flex-shrink-0 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
            <Image
              src={location.image}
              alt={location.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="flex-1 p-4 flex items-start gap-3">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors border border-primary/20">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors text-lg">
                {location.name}
              </h3>
              <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0 mt-1" />
            </div>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3 leading-relaxed">
              {location.description}
            </p>
            
            <div className="flex gap-2 flex-wrap items-center">
              <span className={`px-3 py-1 text-xs rounded-full border-2 font-semibold ${categoryColors[location.category]}`}>
                <span className="mr-1">{categoryIcons[location.category]}</span>
                {location.category.toUpperCase()}
              </span>
              {location.aliases.slice(0, 2).map((alias, idx) => (
                <span 
                  key={idx}
                  className="px-2.5 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border hover:border-primary/30 transition-colors"
                >
                  {alias}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}