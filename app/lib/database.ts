// lib/database.ts
import type { Location, Route, CampusId } from './types';

// ==========================================
// CAMPUS 1: FELELE (PERMANENT SITE)
// ONLY 4 DESTINATIONS
// ==========================================

export const FELELE_LOCATIONS: Location[] = [
  // Main Gate (Starting Point - Hidden from UI)
  {
    id: 'felele-main-gate',
    name: 'Main Gate (Felele)',
    aliases: ['entrance', 'perm site gate', 'express entrance'],
    category: 'gate',
    coordinates: { x: 10, y: 10 },
    description: 'Primary entrance on Lokoja-Okene Expressway'
  },
  // DESTINATION 1: Clinic
  {
    id: 'clinic-felele',
    name: 'University Health Clinic',
    aliases: ['clinic', 'health center', 'sick bay', 'medical center'],
    category: 'facility',
    coordinates: { x: 25, y: 35 },
    description: 'Campus medical facility providing healthcare services to students and staff',
    image: '/felele/clinic.jpeg'
  },
  // DESTINATION 2: Senate Building
  {
    id: 'senate-building',
    name: 'Senate Building',
    aliases: ['senate', 'vc office', 'admin', 'administration'],
    category: 'administrative',
    coordinates: { x: 50, y: 50 },
    description: 'Central administrative hub and Vice Chancellor\'s office',
    image: '/felele/senate.jpeg'
  },
  // DESTINATION 3: Faculty of Computing
  {
    id: 'faculty-computing',
    name: 'Faculty of Computing',
    aliases: ['computing', 'computer science', 'IT faculty', 'fac comp'],
    category: 'academic',
    coordinates: { x: 60, y: 55 },
    description: 'Faculty building for Computer Science and Information Technology programs',
    image: '/felele/fac_comp.jpeg'
  },
  // DESTINATION 4: Library
  {
    id: 'university-library',
    name: 'University Library',
    aliases: ['library', 'main library', 'central library'],
    category: 'facility',
    coordinates: { x: 65, y: 58 },
    description: 'Main central library with extensive academic resources',
    image: '/felele/library.jpeg'
  }
];

export const FELELE_ROUTES: Route[] = [
  // ROUTE 1: Main Gate → Clinic
  {
    from: 'felele-main-gate',
    to: 'clinic-felele',
    distance: 450,
    duration: 6,
    travelMode: 'foot',
    directions: [
      'Start at the Main Gate entrance on Lokoja-Okene Expressway',
      'Move straight ahead through the security checkpoint',
      'Take the first turn on your left (approximately 100m from the gate)',
      'Continue moving forward along this path',
      'The University Health Clinic will be visible ahead - refer to the image for building recognition'
    ],
    landmarks: ['Security Checkpoint', 'First Left Turn', 'Health Clinic Building'],
    routeDiagram: '/felele/routes/gate-to-clinic.svg',
    destinationImage: '/felele/clinic.jpeg',
    visualCues: [
      'Look for the white building with a red cross symbol',
      'The clinic has a covered entrance porch',
      'Medical signage is clearly visible on the building facade'
    ]
  },
  // ROUTE 2: Main Gate → Senate Building
  {
    from: 'felele-main-gate',
    to: 'senate-building',
    distance: 850,
    duration: 11,
    travelMode: 'foot',
    directions: [
      'Start at the Main Gate entrance',
      'Move straight ahead along the main boulevard',
      'Continue forward until you reach the first turn on your right',
      'Turn right at this junction',
      'The Senate Building is the large multi-story structure on your right',
      'Confirm with the reference image - look for the distinctive architectural design'
    ],
    landmarks: ['Main Boulevard', 'First Right Turn', 'Senate Building Complex'],
    routeDiagram: '/felele/routes/gate-to-senate.svg',
    destinationImage: '/felele/senate.jpeg',
    visualCues: [
      'The Senate Building is a prominent multi-story structure',
      'Features modern architectural design with large windows',
      'Administrative signage is displayed at the entrance',
      'Usually has security personnel at the main entrance'
    ]
  },
  // ROUTE 3: Main Gate → Faculty of Computing
  {
    from: 'felele-main-gate',
    to: 'faculty-computing',
    distance: 1100,
    duration: 14,
    travelMode: 'foot',
    directions: [
      'Begin at the Main Gate',
      'Move straight ahead along the main access road',
      'Continue until you reach a cross junction (T-junction)',
      'Turn right at the cross junction',
      'The Faculty of Computing is the building on your left',
      'Verify with the provided image - the building has clear Faculty signage'
    ],
    landmarks: ['Main Access Road', 'Cross Junction', 'Faculty of Computing'],
    routeDiagram: '/felele/routes/gate-to-computing.svg',
    destinationImage: '/felele/fac_comp.jpeg',
    visualCues: [
      'Look for a modern academic building with computer labs',
      'The Faculty of Computing sign is prominently displayed',
      'Building features multiple classroom windows',
      'ICT equipment and student activities are visible around the area'
    ]
  },
  // ROUTE 4: Main Gate → Library
  {
    from: 'felele-main-gate',
    to: 'university-library',
    distance: 1350,
    duration: 17,
    travelMode: 'foot',
    directions: [
      'Start from the Main Gate entrance',
      'Proceed straight ahead on the main road',
      'Continue until you reach the cross junction',
      'Turn right at the junction',
      'Pass by the Faculty of Computing on your left',
      'Keep moving forward along this path',
      'The University Library will be on your left - compare with the reference image'
    ],
    landmarks: ['Main Road', 'Cross Junction', 'Faculty of Computing', 'University Library'],
    routeDiagram: '/felele/routes/gate-to-library.svg',
    destinationImage: '/felele/library.jpeg',
    visualCues: [
      'The library is a large, distinctive building',
      'Features multiple reading rooms with large windows',
      'Library signage is clearly visible at the entrance',
      'Usually has students studying in visible areas',
      'Book drop boxes and notice boards are near the entrance'
    ]
  }
];

// ==========================================
// CAMPUS 2: ADANKOLO (COLLEGE OF HEALTH SCIENCES)
// ONLY 4 DESTINATIONS
// ==========================================

export const ADANKOLO_LOCATIONS: Location[] = [
  // Main Gate (Starting Point - Hidden from UI)
  {
    id: 'adankolo-main-gate',
    name: 'Main Gate (Adankolo)',
    aliases: ['entrance', 'mini campus gate', 'health sciences gate', 'gate 1', 'gate 2'],
    category: 'gate',
    coordinates: { x: 50, y: 10 },
    description: 'Main entrance from Adankolo road, behind Specialist Hospital. Gate I for vehicles, Gate II for pedestrians'
  },
  // DESTINATION 1: Library
  {
    id: 'library-adankolo',
    name: 'Adankolo Campus Library',
    aliases: ['library', 'mini campus library', 'health library'],
    category: 'facility',
    coordinates: { x: 45, y: 55 },
    description: 'Campus library with medical and health sciences resources',
    image: '/adankolo/library.jpeg'
  },
  // DESTINATION 2: ICT Building
  {
    id: 'ict-building-adankolo',
    name: 'ICT Building',
    aliases: ['ict', 'computer center', 'it building'],
    category: 'facility',
    coordinates: { x: 52, y: 60 },
    description: 'Information and Communication Technology center',
    image: '/adankolo/ict.jpeg'
  },
  // DESTINATION 3: Auditorium
  {
    id: 'auditorium-adankolo',
    name: 'Campus Auditorium',
    aliases: ['auditorium', 'hall', 'event center'],
    category: 'facility',
    coordinates: { x: 40, y: 70 },
    description: 'Main auditorium for events, lectures, and ceremonies',
    image: '/adankolo/auditorium.jpeg'
  },
  // DESTINATION 4: Clinic
  {
    id: 'clinic-adankolo',
    name: 'Campus Clinic',
    aliases: ['clinic', 'health center', 'medical center'],
    category: 'facility',
    coordinates: { x: 65, y: 45 },
    description: 'Medical facility for students and staff healthcare',
    image: '/adankolo/clinic.jpeg'
  }
];

export const ADANKOLO_ROUTES: Route[] = [
  // ROUTE 1: Main Gate → Library (FOOT)
  {
    from: 'adankolo-main-gate',
    to: 'library-adankolo',
    distance: 600,
    duration: 8,
    travelMode: 'foot',
    directions: [
      'From the main entrance, enter the campus through Gate II (pedestrian walkway)',
      'Move straight ahead after passing through the gate',
      'Continue forward to the T-junction roundabout ahead',
      'At the roundabout, pass through and enter the coal-tar road',
      'Turn left at the adjacent path ahead',
      'The library building is directly ahead of you',
      'Refer to the image for building recognition and confirmation'
    ],
    landmarks: ['Gate II', 'T-Junction Roundabout', 'Coal-tar Road', 'Library Building'],
    routeDiagram: '/adankolo/routes/gate-to-library-foot.svg',
    destinationImage: '/adankolo/library.jpeg',
    visualCues: [
      'The library is a well-maintained building',
      'Clear library signage at the entrance',
      'Reading rooms are visible through windows',
      'Book shelves can be seen from outside'
    ]
  },
  // ROUTE 2: Main Gate → ICT Building (FOOT)
  {
    from: 'adankolo-main-gate',
    to: 'ict-building-adankolo',
    distance: 450,
    duration: 6,
    travelMode: 'foot',
    directions: [
      'From the main gate, enter through Gate II (pedestrian walkway)',
      'Walk straight ahead after entering',
      'Turn left at the T-junction roundabout',
      'Continue walking straight, passing the water factory on your left',
      'Pass by the lecture theater, also on your left',
      'Turn right when you reach the next junction',
      'Move forward a short distance',
      'The ICT Building is on your left',
      'Check the image for recognition - confirm by reading the building label'
    ],
    landmarks: ['Gate II', 'T-Junction', 'Water Factory', 'Lecture Theater', 'ICT Building'],
    routeDiagram: '/adankolo/routes/gate-to-ict-foot.svg',
    destinationImage: '/adankolo/ict.jpeg',
    visualCues: [
      'The ICT Building has clear signage with the building name',
      'Modern building with computer lab facilities visible',
      'Security access controls at the entrance',
      'Students with laptops often seen in the vicinity'
    ]
  },
  // ROUTE 3: Main Gate → Auditorium
  {
    from: 'adankolo-main-gate',
    to: 'auditorium-adankolo',
    distance: 1100,
    duration: 13,
    travelMode: 'foot',
    directions: [
      'From the main gate, enter the campus',
      'Move towards the T-junction ahead',
      'Turn right at the T-junction',
      'Follow the road straight ahead',
      'Make a U-turn at the designated point',
      'Continue straight, passing the library on your left',
      'Pass the ICT Building, also on your left',
      'Keep moving straight ahead',
      'Take the first turn on your left',
      'The auditorium is the large building in front of you',
      'Verify with the provided image'
    ],
    landmarks: ['T-Junction', 'U-Turn Point', 'Library', 'ICT Building', 'Auditorium'],
    routeDiagram: '/adankolo/routes/gate-to-auditorium.svg',
    destinationImage: '/adankolo/auditorium.jpeg',
    visualCues: [
      'The auditorium is a large, prominent building',
      'Features a distinctive architectural design',
      'Event banners or posters often displayed outside',
      'Multiple entrance doors visible',
      'Seating capacity signage may be visible'
    ]
  },
  // ROUTE 4: Main Gate → Clinic
  {
    from: 'adankolo-main-gate',
    to: 'clinic-adankolo',
    distance: 550,
    duration: 7,
    travelMode: 'foot',
    directions: [
      'Follow the same initial route as going to the ICT Building',
      'From the main gate, enter through Gate II',
      'Walk straight and turn left at the T-junction roundabout',
      'Continue ahead for approximately 200 meters',
      'Turn right at the next junction',
      'Keep walking forward for another 300 meters',
      'The clinic building is ahead - confirm with the reference image'
    ],
    landmarks: ['Gate II', 'T-Junction', 'First Right Turn', 'Clinic Building'],
    routeDiagram: '/adankolo/routes/gate-to-clinic.svg',
    destinationImage: '/adankolo/clinic.jpeg',
    visualCues: [
      'Look for medical cross symbol or health center signage',
      'White or light-colored building typical of medical facilities',
      'Ambulance parking area may be visible',
      'Waiting area visible through entrance',
      'Medical personnel often present at entrance'
    ]
  }
];

// ==========================================
// CAMPUS INFORMATION
// ==========================================

export const CAMPUSES = {
  felele: {
    id: 'felele' as CampusId,
    name: 'Felele Campus (Permanent Site)',
    description: 'Main campus with Senate, Arts, Science, Education, and Social Sciences',
    locations: FELELE_LOCATIONS,
    routes: FELELE_ROUTES
  },
  adankolo: {
    id: 'adankolo' as CampusId,
    name: 'Adankolo Campus (College of Health Sciences)',
    description: 'Mini campus for Medicine, Nursing, and Basic Medical Sciences',
    locations: ADANKOLO_LOCATIONS,
    routes: ADANKOLO_ROUTES
  }
};

export type CampusIdType = keyof typeof CAMPUSES;