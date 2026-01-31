// // ==================== lib/searchUtils.ts ====================
// import { Location, Route, SearchResult } from './types';

// export const fuzzySearch = (query: string, locations: Location[]): SearchResult[] => {
//   const lowerQuery = query.toLowerCase().trim();
  
//   if (!lowerQuery) return [];

//   const results = locations.map(location => {
//     let score = 0;
//     const searchTerms = [location.name, ...location.aliases].map(t => t.toLowerCase());
    
//     searchTerms.forEach(term => {
//       if (term === lowerQuery) score += 100;
//       else if (term.startsWith(lowerQuery)) score += 50;
//       else if (term.includes(lowerQuery)) score += 25;
      
//       const words = lowerQuery.split(' ');
//       words.forEach(word => {
//         if (term.includes(word)) score += 10;
//       });
//     });

//     return { location, score };
//   });

//   return results
//     .filter(r => r.score > 0)
//     .sort((a, b) => b.score - a.score)
//     .slice(0, 8);
// };

// export const findRoute = (fromId: string, toId: string, routes: Route[]): Route | null => {
//   const direct = routes.find(r => r.from === fromId && r.to === toId);
//   if (direct) return direct;

//   const reverse = routes.find(r => r.from === toId && r.to === fromId);
//   if (reverse) {
//     return {
//       ...reverse,
//       from: fromId,
//       to: toId,
//       directions: [...reverse.directions].reverse().map(d => 
//         d.replace(/\bleft\b/gi, 'TEMP')
//           .replace(/\bright\b/gi, 'left')
//           .replace(/TEMP/g, 'right')
//       )
//     };
//   }

//   return null;
// };
