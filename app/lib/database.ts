// lib/database.ts
import type { Location, Route, CampusId } from './types';

// ==========================================
// CAMPUS 1: FELELE (PERMANENT SITE)
// Main Hub: Senate, Arts, Science, Education, Social Sciences
// ==========================================

export const FELELE_LOCATIONS: Location[] = [
  {
    id: 'felele-main-gate',
    name: 'Main Gate (Felele)',
    aliases: ['entrance', 'perm site gate', 'express entrance'],
    category: 'gate',
    coordinates: { x: 10, y: 10 },
    description: 'Primary entrance on Lokoja-Okene Expressway'
  },
  {
    id: 'senate-building',
    name: 'Senate Building',
    aliases: ['senate', 'vc office', 'admin'],
    category: 'administrative',
    coordinates: { x: 50, y: 50 },
    description: 'Central administrative hub and Vice Chancellor\'s office'
  },
  {
    id: 'university-library',
    name: 'University Library',
    aliases: ['library', 'main library'],
    category: 'facility',
    coordinates: { x: 55, y: 45 },
    description: 'Main central library'
  },
  {
    id: 'science-complex',
    name: 'Faculty of Science',
    aliases: ['science', 'science faculty', 'labs'],
    category: 'academic',
    coordinates: { x: 60, y: 60 },
    description: 'Science lecture halls and laboratories'
  },
  {
    id: 'arts-social-sciences',
    name: 'Faculty of Arts & Social Sciences',
    aliases: ['arts', 'social science', 'mass comm'],
    category: 'academic',
    coordinates: { x: 40, y: 60 },
    description: 'Lecture theaters for Arts and Social Science students'
  },
  {
    id: 'education-faculty',
    name: 'Faculty of Education',
    aliases: ['education', 'edu'],
    category: 'academic',
    coordinates: { x: 45, y: 65 },
    description: 'Faculty of Education complex'
  },
  {
    id: 'hostel-blocks',
    name: 'Student Hostels',
    aliases: ['hostel', 'accommodation'],
    category: 'residence',
    coordinates: { x: 20, y: 30 },
    description: 'Male and female student residential blocks'
  },
  {
    id: 'health-center-felele',
    name: 'University Health Services',
    aliases: ['clinic', 'sick bay'],
    category: 'facility',
    coordinates: { x: 25, y: 35 },
    description: 'Medical center for students and staff'
  },
  {
    id: 'ict-center-felele',
    name: 'ICT Directorate',
    aliases: ['ict', 'computer center'],
    category: 'facility',
    coordinates: { x: 52, y: 55 },
    description: 'Main ICT hub and server rooms'
  }
];

export const FELELE_ROUTES: Route[] = [
  {
    from: 'felele-main-gate',
    to: 'senate-building',
    distance: 1200,
    duration: 15,
    directions: [
      'Enter through the Main Gate on Lokoja-Okene Expressway',
      'Proceed straight along the main dual carriage boulevard',
      'Pass the security post and solar farm on your right',
      'The Senate Building is the massive multi-story structure straight ahead at the roundabout'
    ],
    landmarks: ['Solar Farm', 'Security Post', 'Roundabout']
  },
  {
    from: 'felele-main-gate',
    to: 'science-complex',
    distance: 1500,
    duration: 18,
    directions: [
      'From Main Gate, follow the main boulevard to the Senate roundabout',
      'Turn right at the roundabout towards the Academic Zone',
      'Pass the ICT Directorate',
      'The Faculty of Science is the large complex with laboratory blocks on the left'
    ],
    landmarks: ['Senate Roundabout', 'ICT Directorate']
  },
  {
    from: 'felele-main-gate',
    to: 'arts-social-sciences',
    distance: 1400,
    duration: 17,
    directions: [
      'From Main Gate, walk to the Senate Building roundabout',
      'Take the exit towards the left',
      'Walk past the Twin Lecture Theatres',
      'The Faculty of Arts and Social Sciences complex is ahead'
    ],
    landmarks: ['Twin Lecture Theatres', 'Senate Building']
  },
  {
    from: 'felele-main-gate',
    to: 'hostel-blocks',
    distance: 600,
    duration: 8,
    directions: [
      'From Main Gate, take the immediate right turn onto the ring road',
      'Follow the road for 400m',
      'The multi-story Hostel blocks (Male and Female) are visible on the right'
    ],
    landmarks: ['Ring Road', 'Fence Perimeter']
  },
  {
    from: 'senate-building',
    to: 'university-library',
    distance: 300,
    duration: 4,
    directions: [
      'Exit the Senate Building main entrance',
      'Walk towards the central academic core',
      'The Library is the large building directly adjacent to the Senate'
    ],
    landmarks: ['Senate Parking Lot']
  }
];

// ==========================================
// CAMPUS 2: ADANKOLO (COLLEGE OF HEALTH SCIENCES)
// Main Hub: Medicine, Nursing, Basic Medical Sciences
// ==========================================

export const ADANKOLO_LOCATIONS: Location[] = [
  {
    id: 'adankolo-main-gate',
    name: 'Main Gate (Adankolo)',
    aliases: ['mini campus gate', 'health sciences gate'],
    category: 'gate',
    coordinates: { x: 50, y: 10 },
    description: 'Entrance from Adankolo road, behind Specialist Hospital'
  },
  {
    id: 'provost-office',
    name: 'Provost Office',
    aliases: ['admin', 'college admin'],
    category: 'administrative',
    coordinates: { x: 50, y: 40 },
    description: 'Administrative block for College of Health Sciences'
  },
  {
    id: 'lecture-halls-health',
    name: 'Health Science Lecture Halls',
    aliases: ['classes', 'halls'],
    category: 'academic',
    coordinates: { x: 30, y: 50 },
    description: 'Main lecture halls (formerly Faculty of Science blocks)'
  },
  {
    id: 'anatomy-lab',
    name: 'Anatomy Laboratory',
    aliases: ['anatomy', 'lab'],
    category: 'academic',
    coordinates: { x: 70, y: 50 },
    description: 'Laboratory for anatomy and physiology'
  },
  {
    id: 'specialist-hospital-gate',
    name: 'Teaching Hospital Link Gate',
    aliases: ['hospital gate', 'back gate'],
    category: 'gate',
    coordinates: { x: 50, y: 90 },
    description: 'Pedestrian access to Kogi State Specialist Hospital'
  }
];

export const ADANKOLO_ROUTES: Route[] = [
  {
    from: 'adankolo-main-gate',
    to: 'provost-office',
    distance: 150,
    duration: 2,
    directions: [
      'Enter through the Adankolo Main Gate',
      'Walk straight along the paved path',
      'The Provost Office is in the renovated administrative block directly ahead'
    ],
    landmarks: ['Security Post', 'Renovated Block']
  },
  {
    from: 'adankolo-main-gate',
    to: 'lecture-halls-health',
    distance: 200,
    duration: 3,
    directions: [
      'From the gate, turn left towards the old lecture blocks',
      'Follow the walkway past the trees',
      'The lecture halls are in the single-story blocks on the left'
    ],
    landmarks: ['Trees', 'Old Science Block']
  },
  {
    from: 'adankolo-main-gate',
    to: 'specialist-hospital-gate',
    distance: 400,
    duration: 5,
    directions: [
      'From the gate, walk straight past the Provost Office',
      'Continue to the rear of the campus',
      'The pedestrian gate links directly to the Specialist Hospital premises'
    ],
    landmarks: ['Provost Office', 'Rear Fence']
  }
];

// ==========================================
// CAMPUS INFORMATION
// ==========================================

export const CAMPUSES = {
  felele: {
    id: 'felele',
    name: 'Felele Campus (Permanent Site)',
    description: 'Main campus with Senate, Arts, Science, Education, and Social Sciences',
    locations: FELELE_LOCATIONS,
    routes: FELELE_ROUTES
  },
  adankolo: {
    id: 'adankolo',
    name: 'Adankolo Campus (College of Health Sciences)',
    description: 'Mini campus for Medicine, Nursing, and Basic Medical Sciences',
    locations: ADANKOLO_LOCATIONS,
    routes: ADANKOLO_ROUTES
  }
};

export type CampusIdType = keyof typeof CAMPUSES;