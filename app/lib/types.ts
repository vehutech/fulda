// ==================== lib/types.ts ====================
export interface Location {
  id: string;
  name: string;
  aliases: string[];
  category: 'academic' | 'administrative' | 'facility' | 'gate' | 'residence';
  coordinates: { x: number; y: number };
  description: string;
}

export interface Route {
  from: string;
  to: string;
  distance: number;
  duration: number;
  directions: string[];
  landmarks: string[];
}

export interface SearchResult {
  location: Location;
  score: number;
}
