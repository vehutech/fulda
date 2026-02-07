// lib/types.ts
export interface Location {
  id: string;
  name: string;
  aliases: string[];
  category: 'academic' | 'administrative' | 'facility' | 'residence' | 'gate';
  coordinates: { x: number; y: number };
  description: string;
  image?: string; // Path to building image
}

export interface Route {
  from: string;
  to: string;
  distance: number; // in meters
  duration: number; // in minutes
  travelMode?: 'foot' | 'car'; // Mode of transportation
  directions: string[];
  landmarks: string[];
  routeDiagram?: string; // Path to route diagram/map
  destinationImage?: string; // Path to destination building image
  visualCues?: string[]; // Visual landmarks to help identify the destination
}

export type CampusId = 'felele' | 'adankolo';

export interface Campus {
  id: CampusId;
  name: string;
  description: string;
  locations: Location[];
  routes: Route[];
}