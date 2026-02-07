// app/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Search, MapPin, RefreshCw } from 'lucide-react';
import { CAMPUSES, type CampusIdType } from './lib/database';
import type { Location } from './lib/types';
import Image from 'next/image';
import { ThemeToggle } from './_components/ThemeToggle';
import { CampusSelector } from './_components/CampusSelector';
import { LocationCard } from './_components/LocationCard';
import { DirectionsDisplay } from './_components/ui/DirectionsDisplay';

export default function HomePage() {
  const [selectedCampus, setSelectedCampus] = useState<CampusIdType | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [destination, setDestination] = useState<Location | null>(null);
  const [startPoint, setStartPoint] = useState<Location | null>(null);
  const [showResults, setShowResults] = useState(false);

  // Get current campus data
  const currentCampus = selectedCampus ? CAMPUSES[selectedCampus] : null;
  
  // Memoize LOCATIONS and ROUTES to prevent unnecessary re-renders
  const LOCATIONS = useMemo(() => {
    return currentCampus?.locations || [];
  }, [currentCampus]);
  
  const ROUTES = useMemo(() => {
    return currentCampus?.routes || [];
  }, [currentCampus]);

  // Get only the 4 main destinations (exclude main gates)
  const mainDestinations = useMemo(() => {
    return LOCATIONS.filter(loc => loc.id !== 'felele-main-gate' && loc.id !== 'adankolo-main-gate');
  }, [LOCATIONS]);

  // Fuzzy search implementation
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results = LOCATIONS
      .map(location => {
        let score = 0;
        
        if (location.name.toLowerCase() === query) score = 100;
        else if (location.name.toLowerCase().startsWith(query)) score = 90;
        else if (location.name.toLowerCase().includes(query)) score = 70;
        else if (location.aliases.some(alias => alias.toLowerCase() === query)) score = 95;
        else if (location.aliases.some(alias => alias.toLowerCase().startsWith(query))) score = 85;
        else if (location.aliases.some(alias => alias.toLowerCase().includes(query))) score = 65;
        else if (location.description.toLowerCase().includes(query)) score = 50;
        else if (location.category.toLowerCase().includes(query)) score = 60;
        
        return { location, score };
      })
      .filter(result => result.score > 0)
      .sort((a, b) => b.score - a.score);
    
    return results;
  }, [searchQuery, LOCATIONS]);

  // Find route between two points - inline logic to satisfy React Compiler
  const route = useMemo(() => {
    if (!startPoint || !destination) return null;
    
    // Find direct route
    const directRoute = ROUTES.find(r => r.from === startPoint.id && r.to === destination.id);
    if (directRoute) return directRoute;
    
    // Find reverse route and flip it
    const reverseRoute = ROUTES.find(r => r.from === destination.id && r.to === startPoint.id);
    if (reverseRoute) {
      return {
        ...reverseRoute,
        from: startPoint.id,
        to: destination.id,
        directions: [...reverseRoute.directions].reverse()
      };
    }
    
    return null;
  }, [startPoint, destination, ROUTES]);

  const handleLocationSelect = (location: Location) => {
    setDestination(location);
    setSearchQuery('');
    setShowResults(false);
    
    if (!startPoint) {
      // Set default start point to main gate
      const defaultStart = LOCATIONS.find(l => 
        l.id === (selectedCampus === 'felele' ? 'felele-main-gate' : 'adankolo-main-gate')
      );
      setStartPoint(defaultStart || null);
    }
  };

  const handleReset = () => {
    setDestination(null);
    setStartPoint(null);
    setSearchQuery('');
  };

  const handleResetCampus = () => {
    setSelectedCampus(null);
    setSearchQuery('');
    setDestination(null);
    setStartPoint(null);
  };

  // Show campus selector if no campus selected
  if (!selectedCampus) {
    return <CampusSelector onSelectCampus={setSelectedCampus} />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3 justify-center">
            <Image
              src="/logo.png"
              width={40}
              height={40}
              alt="University Logo"
              className="rounded-lg"
            />
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl uppercase font-bold text-foreground">fuldirect</span>
            </div>
          </div>
          
          {/* Right Side Controls */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Campus Badge */}
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg border border-primary/20">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">
                {selectedCampus === 'felele' ? 'Felele Campus' : 'Adankolo Campus'}
              </span>
            </div>
            
            <ThemeToggle />
            
            <button
              onClick={handleResetCampus}
              className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg transition-colors"
              title="Change Campus"
            >
              <RefreshCw className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Change</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Campus Navigator
          </h1>
          <p className="text-muted-foreground">
            Find your way around {selectedCampus === 'felele' ? 'Felele Campus' : 'Adankolo Campus'}
          </p>
        </div>

        {/* Search Interface - Only show when no destination selected */}
        {!destination && (
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Search for a location... (e.g., Library, Clinic, Senate)"
                className="w-full pl-12 pr-4 py-4 text-lg rounded-xl bg-card border-2 border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground shadow-lg"
                autoFocus
              />
            </div>

            {/* Search Results */}
            {showResults && searchResults.length > 0 && (
              <div className="mb-8 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
                <div className="text-sm text-muted-foreground mb-2 px-1">
                  {searchResults.length} location{searchResults.length !== 1 ? 's' : ''} found
                </div>
                {searchResults.map(({ location }) => (
                  <LocationCard
                    key={location.id}
                    location={location}
                    onClick={() => handleLocationSelect(location)}
                  />
                ))}
              </div>
            )}

            {/* No Results */}
            {showResults && searchQuery && searchResults.length === 0 && (
              <div className="mb-8 p-6 bg-card border border-border rounded-xl text-center">
                <p className="text-muted-foreground">
                  No locations found for &quot;<span className="font-semibold text-foreground">{searchQuery}</span>&quot;.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try searching for buildings, departments, or facilities
                </p>
              </div>
            )}

            {/* Main Destinations - Only show when not searching */}
            {!searchQuery && (
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Where would you like to go?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mainDestinations.map(location => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onClick={() => handleLocationSelect(location)}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Directions Display */}
        {destination && startPoint && route && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DirectionsDisplay
              selectedCampus={selectedCampus}
              route={route}
              from={startPoint}
              to={destination}
            />
            
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                Find Another Location
              </button>
              <button
                onClick={handleResetCampus}
                className="px-6 py-3 bg-card border-2 border-border text-foreground rounded-xl font-medium hover:border-primary/50 transition-all"
              >
                Change Campus
              </button>
            </div>
          </div>
        )}

        {/* No Route Found */}
        {destination && startPoint && !route && (
          <div className="bg-card border border-border rounded-xl p-8 text-center shadow-lg animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No Route Found</h3>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn&apos;t find a direct route from <strong>{startPoint.name}</strong> to <strong>{destination.name}</strong>.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Please ask for directions at the information desk or contact campus security for assistance.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Try Another Destination
            </button>
          </div>
        )}
      </div>

      {/* Footer Help */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-muted/50 border border-border rounded-xl p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Need help?</strong> Visit the information desk or contact campus security for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}