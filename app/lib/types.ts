// lib/types.ts

export interface Location {
  id: string;
  name: string;
  aliases: string[];
  category: 'academic' | 'administrative' | 'facility' | 'residence' | 'gate';
  coordinates: { x: number; y: number };
  description: string;
}

export interface Route {
  from: string;
  to: string;
  distance: number; // in meters
  duration: number; // in minutes
  directions: string[];
  landmarks: string[];
}

export type CampusId = 'felele' | 'adankolo';

export interface Campus {
  id: CampusId;
  name: string;
  description: string;
  locations: Location[];
  routes: Route[];
}