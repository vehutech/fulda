// app/_components/ui/DirectionsDisplay.tsx
'use client';

import { Navigation, MapPin, Clock, Car, Footprints, Eye, Map } from 'lucide-react';
import type { Route, Location } from '../../lib/types';
import Image from 'next/image';

interface DirectionsDisplayProps {
  route: Route;
  from: Location;
  to: Location;
  selectedCampus: string | null;
}

export function DirectionsDisplay({ selectedCampus, route, from, to }: DirectionsDisplayProps) {
  return (
    <div className="bg-card border-2 border-border rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header with Destination Image */}
      <div className="relative">
        {/* Destination Image Banner */}
        {route.destinationImage && (
          <div className="relative w-full h-56 md:h-72 bg-gradient-to-br from-primary/20 to-primary/5 overflow-hidden">
            <Image
              src={route.destinationImage}
              alt={to.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Navigation className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-white mb-1 drop-shadow-lg">
                    {to.name}
                  </h2>
                  <p className="text-white/90 text-sm drop-shadow">
                    From {from.name}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Fallback Header (no image) */}
        {!route.destinationImage && (
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border">
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
          </div>
        )}
      </div>

      {/* Route Stats */}
      <div className="p-6 border-b border-border bg-muted/30">
        <div className="grid grid-cols-3 gap-4">
          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-muted-foreground text-xs font-medium">Distance</div>
              <div className="font-bold text-foreground text-lg">{route.distance}m</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-green-600 dark:text-green-400" />
            </div>
            <div>
              <div className="text-muted-foreground text-xs font-medium">Duration</div>
              <div className="font-bold text-foreground text-lg">{route.duration} min</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center flex-shrink-0">
              {route.travelMode === 'car' ? (
                <Car className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              ) : (
                <Footprints className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              )}
            </div>
            <div>
              <div className="text-muted-foreground text-xs font-medium">Travel</div>
              <div className="font-bold text-foreground text-lg capitalize">
                {route.travelMode || 'Foot'}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Route Diagram */}
      
        <div className="p-6 bg-linear-to-br from-primary/5 to-transparent border-b border-border">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Map className="w-5 h-5 text-primary" />
            Route Overview
          </h3>
          <div className="relative w-full h-64 md:h-80 bg-white dark:bg-gray-900 rounded-xl overflow-hidden border-2 border-border shadow-inner">
            <Image
              src={selectedCampus === "adankolo" ? "/adankolo-route.png" : "/felele-route.jpg"}
              alt="Route diagram"
              fill
              className="object-contain p-4"
            />
          </div>
          <p className="text-xs text-muted-foreground mt-3 text-center">
            Follow the marked path from your starting point to reach your destination
          </p>
        </div>
      

      {/* Step-by-Step Directions */}
      <div className="p-6 border-b border-border">
        <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2 text-lg">
          <Navigation className="w-5 h-5 text-primary" />
          Step-by-Step Directions
        </h3>
        <div className="space-y-5">
          {route.directions.map((direction, index) => (
            <div key={index} className="flex gap-4 group">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/80 text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                {index < route.directions.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gradient-to-b from-border to-transparent mt-3 min-h-[50px]"></div>
                )}
              </div>
              <div className="flex-1 pt-1.5 pb-6">
                <p className="text-foreground leading-relaxed group-hover:text-primary transition-colors">
                  {direction}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visual Cues */}
      {route.visualCues && route.visualCues.length > 0 && (
        <div className="p-6 bg-blue-500/5 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            What to Look For
          </h3>
          <div className="space-y-3">
            {route.visualCues.map((cue, index) => (
              <div key={index} className="flex items-start gap-3 bg-card p-3 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 flex-shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{cue}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Landmarks */}
      {route.landmarks && route.landmarks.length > 0 && (
        <div className="p-6 bg-green-500/5 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-green-600 dark:text-green-400" />
            Key Landmarks Along the Way
          </h3>
          <div className="flex flex-wrap gap-2">
            {route.landmarks.map((landmark, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-card border-2 border-green-200/50 dark:border-green-800/50 text-foreground text-sm rounded-full hover:border-green-400/70 hover:shadow-md transition-all font-medium"
              >
                <span className="text-green-600 dark:text-green-400 mr-2">📍</span>
                {landmark}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Destination Info */}
      <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0 border border-primary/30">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-bold text-foreground mb-2 text-lg">About Your Destination</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {to.description}
            </p>
            <div className="flex gap-2 flex-wrap">
              <span className="px-3 py-1.5 bg-primary/20 text-primary text-xs rounded-full border border-primary/30 font-semibold">
                {to.category.toUpperCase()}
              </span>
              {to.aliases.slice(0, 3).map((alias, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full border border-border"
                >
                  {alias}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}