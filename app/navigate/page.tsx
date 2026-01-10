// ==================== app/navigate/page.tsx (NAVIGATION APP) ====================
'use client';

import { useState, useMemo } from 'react';
import { Search, ArrowLeft, MapPin } from 'lucide-react';
import Link from 'next/link';
import type { Location } from '../lib/types';
import { ThemeToggle } from '../_components/ThemeToggle';
import { LocationCard } from '../_components/LocationCard';
import { LOCATIONS, ROUTES } from '../lib/database';
import { fuzzySearch, findRoute } from '../lib/searchUtils';
import { DirectionsDisplay } from '../_components/ui/DirectionsDisplay';

export default function NavigatePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [destination, setDestination] = useState<Location | null>(null);
  const [startPoint, setStartPoint] = useState<Location | null>(null);
  const [showResults, setShowResults] = useState(false);

  const searchResults = useMemo(() => 
    fuzzySearch(searchQuery, LOCATIONS), 
    [searchQuery]
  );

  const route = useMemo(() => {
    if (!startPoint || !destination) return null;
    return findRoute(startPoint.id, destination.id, ROUTES);
  }, [startPoint, destination]);

  const handleLocationSelect = (location: Location): void => {
    setDestination(location);
    setSearchQuery('');
    setShowResults(false);
    
    if (!startPoint) {
      setStartPoint(LOCATIONS.find(l => l.id === 'main-gate') || null);
    }
  };

  const handleReset = (): void => {
    setDestination(null);
    setStartPoint(null);
    setSearchQuery('');
  };

  const handleChangeStart = (): void => {
    setStartPoint(null);
    setDestination(null);
  };

  const popularLocations = LOCATIONS.filter(l => 
    ['library', 'cafeteria', 'admin-block', 'engineering-faculty', 'ict-center', 'lecture-theater-1'].includes(l.id)
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-foreground" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">FULDA</span>
            </div>
          </Link>
          
          <ThemeToggle />
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Campus Navigator</h1>
          <p className="text-muted-foreground">Find your way around campus with ease</p>
        </div>

        {/* Search Interface */}
        {!destination && (
          <div className="mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Where are you going?"
                className="w-full pl-12 pr-4 py-4 text-lg rounded-lg bg-card border-2 border-border focus:border-primary outline-none transition-colors text-foreground placeholder:text-muted-foreground shadow-lg"
                autoFocus
              />
            </div>

            {/* Search Results */}
            {showResults && searchResults.length > 0 && (
              <div className="mt-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
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
              <div className="mt-4 p-6 bg-card border border-border rounded-lg text-center">
                <p className="text-muted-foreground">
                  No locations found for "<span className="font-semibold text-foreground">{searchQuery}</span>"
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Try searching for buildings, departments, or facilities
                </p>
              </div>
            )}

            {/* Popular Destinations */}
            {!searchQuery && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Popular Destinations
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {popularLocations.map(location => (
                    <LocationCard
                      key={location.id}
                      location={location}
                      onClick={() => handleLocationSelect(location)}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* All Categories */}
            {!searchQuery && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">Browse by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(['academic', 'facility', 'administrative'] as const).map(category => {
                    const count = LOCATIONS.filter(l => l.category === category).length;
                    const colors = {
                      academic: 'bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20',
                      facility: 'bg-green-500/10 border-green-500/20 text-green-600 dark:text-green-400 hover:bg-green-500/20',
                      administrative: 'bg-purple-500/10 border-purple-500/20 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20',
                    };
                    
                    return (
                      <button
                        key={category}
                        onClick={() => setSearchQuery(category)}
                        className={`p-4 rounded-lg border transition-all ${colors[category]}`}
                      >
                        <div className="font-semibold capitalize">{category}</div>
                        <div className="text-sm opacity-75 mt-1">{count} locations</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Directions Display */}
        {destination && startPoint && route && (
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <DirectionsDisplay route={route} from={startPoint} to={destination} />
            
            <div className="flex gap-3">
              <button
                onClick={handleReset}
                className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
              >
                New Search
              </button>
              <button
                onClick={handleChangeStart}
                className="px-6 py-3 bg-card border-2 border-border text-foreground rounded-lg font-medium hover:border-primary/50 transition-all"
              >
                Change Start
              </button>
            </div>
          </div>
        )}

        {/* No Route Found */}
        {destination && startPoint && !route && (
          <div className="bg-card border border-border rounded-lg p-8 text-center shadow-lg">
            <div className="w-16 h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-destructive" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">No Route Found</h3>
            <p className="text-muted-foreground mb-6">
              Sorry, we couldn't find a direct route from <strong>{startPoint.name}</strong> to <strong>{destination.name}</strong>.
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              Try asking for directions at the Student Affairs Office or contact campus security for assistance.
            </p>
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg"
            >
              Try Another Destination
            </button>
          </div>
        )}
      </div>

      {/* Footer Help */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-muted/50 border border-border rounded-lg p-6 text-center">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Need help?</strong> Visit the Student Affairs Office or contact campus security at the main gate.
          </p>
        </div>
      </div>
    </div>
  );
}