// app/navigate/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, Navigation, ArrowLeft, RefreshCw } from 'lucide-react';
import { CAMPUSES, type CampusIdType } from './lib/database';
import type { Location, Route } from './lib/types';
import Link from 'next/link';
import { ThemeToggle } from './_components/ThemeToggle';
import { CampusSelector } from './_components/CampusSelector';

export default function NavigatePage() {
  const [selectedCampus, setSelectedCampus] = useState<CampusIdType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [route, setRoute] = useState<Route | null>(null);

  // Get current campus data
  const currentCampus = selectedCampus ? CAMPUSES[selectedCampus] : null;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const locations = currentCampus?.locations || [];
  const routes = currentCampus?.routes || [];

  // Search functionality
  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return locations.filter(loc => 
      loc.name.toLowerCase().includes(query) ||
      loc.aliases.some(alias => alias.toLowerCase().includes(query)) ||
      loc.description.toLowerCase().includes(query)
    );
  }, [searchQuery, locations]);

  // Find route
  const findRoute = (destination: Location) => {
    // In a real implementation, you'd use a proper pathfinding algorithm
    // For now, we'll just find direct routes
    const foundRoute = routes.find(r => r.to === destination.id);
    setRoute(foundRoute || null);
    setSelectedLocation(destination);
    setSearchQuery('');
  };

  // Reset campus selection
  const handleResetCampus = () => {
    setSelectedCampus(null);
    setSearchQuery('');
    setSelectedLocation(null);
    setRoute(null);
  };

  // If no campus selected, show campus selector
  if (!selectedCampus) {
    return <CampusSelector onSelectCampus={setSelectedCampus} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-xl uppercase font-bold text-foreground">fuldir</span>
          </Link>
          
          <div className="flex items-center gap-4">
            {/* Campus Badge */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{currentCampus?.name}</span>
            </div>
            
            <ThemeToggle />
            
            <button
              onClick={handleResetCampus}
              className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors"
              title="Change Campus"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline">Change Campus</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-24 pb-12 max-w-4xl">
        {/* Campus Info Banner */}
        <div className="mb-8 p-6 bg-card border border-border rounded-xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-1">
                {currentCampus?.name}
              </h2>
              <p className="text-sm text-muted-foreground">
                {currentCampus?.description}
              </p>
            </div>
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Where are you going? (e.g., Senate Building, Library, Health Center)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg rounded-xl bg-card border-2 border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Search Results */}
          {searchQuery && filteredLocations.length > 0 && (
            <div className="mt-4 bg-card border border-border rounded-xl overflow-hidden shadow-lg">
              {filteredLocations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => findRoute(location)}
                  className="w-full p-4 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 text-left"
                >
                  <div className="flex items-start gap-3">
                    <Navigation className="w-5 h-5 text-primary mt-1 shrink-0" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-1">{location.name}</h3>
                      <p className="text-sm text-muted-foreground">{location.description}</p>
                      <div className="flex gap-2 mt-2">
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                          {location.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          )}

          {searchQuery && filteredLocations.length === 0 && (
            <div className="mt-4 p-8 bg-card border border-border rounded-xl text-center">
              <p className="text-muted-foreground">
                No locations found for &quot;{searchQuery}&quot;. Try searching for buildings, departments, or facilities.
              </p>
            </div>
          )}
        </div>

        {/* Route Display */}
        {selectedLocation && route && (
          <div className="bg-card border border-border rounded-xl overflow-hidden shadow-lg">
            {/* Header */}
            <div className="p-6 bg-primary/5 border-b border-border">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    {selectedLocation.name}
                  </h2>
                  <p className="text-muted-foreground mb-4">{selectedLocation.description}</p>
                  <div className="flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">Distance: <strong className="text-foreground">{route.distance}m</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">Duration: <strong className="text-foreground">{route.duration} min</strong></span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setRoute(null);
                    setSelectedLocation(null);
                  }}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-muted-foreground" />
                </button>
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
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm shrink-0">
                        {index + 1}
                      </div>
                      {index < route.directions.length - 1 && (
                        <div className="w-0.5 h-full bg-border mt-2"></div>
                      )}
                    </div>
                    <p className="text-foreground pt-1 pb-6">{direction}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            {route.landmarks.length > 0 && (
              <div className="p-6 bg-muted/30 border-t border-border">
                <h3 className="font-semibold text-foreground mb-3">Landmarks to Look For</h3>
                <div className="flex flex-wrap gap-2">
                  {route.landmarks.map((landmark, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-card border border-border text-foreground text-sm rounded-full"
                    >
                      {landmark}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Quick Access Locations */}
        {!selectedLocation && !searchQuery && (
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Popular Locations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {locations.slice(0, 6).map((location) => (
                <button
                  key={location.id}
                  onClick={() => findRoute(location)}
                  className="p-4 bg-card border border-border rounded-xl hover:border-primary/50 hover:shadow-lg transition-all text-left group"
                >
                  <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {location.name}
                  </h4>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {location.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}