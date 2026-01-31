// app/_components/ui/DirectionsDisplay.tsx
'use client';

import { Navigation, MapPin, Clock } from 'lucide-react';
import type { Route, Location } from '../../lib/types';

interface DirectionsDisplayProps {
  route: Route;
  from: Location;
  to: Location;
}

export function DirectionsDisplay({ route, from, to }: DirectionsDisplayProps) {
  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="p-6 bg-primary/5 border-b border-border">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Navigation className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-foreground mb-1">
              {to.name}
            </h2>
            <p className="text-muted-foreground text-sm">
              From {from.name}
            </p>
          </div>
        </div>

        {/* Route Stats */}
        <div className="flex gap-4 text-sm bg-card border border-border rounded-lg p-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Distance</div>
              <div className="font-semibold text-foreground">{route.distance}m</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Clock className="w-4 h-4 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-muted-foreground text-xs">Duration</div>
              <div className="font-semibold text-foreground">{route.duration} min</div>
            </div>
          </div>
        </div>
      </div>

      {/* Directions */}
      <div className="p-6">
        <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
          <Navigation className="w-5 h-5 text-primary" />
          Step-by-Step Directions
        </h3>
        <div className="space-y-4">
          {route.directions.map((direction, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                {index < route.directions.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border mt-2 min-h-[40px]"></div>
                )}
              </div>
              <p className="text-foreground pt-1 pb-6 flex-1">{direction}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Landmarks */}
      {route.landmarks && route.landmarks.length > 0 && (
        <div className="p-6 bg-muted/30 border-t border-border">
          <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-primary" />
            Landmarks to Look For
          </h3>
          <div className="flex flex-wrap gap-2">
            {route.landmarks.map((landmark, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-card border border-border text-foreground text-sm rounded-full hover:border-primary/50 transition-colors"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Destination Info */}
      <div className="p-6 bg-primary/5 border-t border-border">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-5 h-5 text-primary" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground mb-1">About Your Destination</h4>
            <p className="text-sm text-muted-foreground">{to.description}</p>
            <div className="flex gap-2 mt-2">
              <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20">
                {to.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}