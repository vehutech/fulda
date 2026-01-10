// ==================== lib/database.ts ====================
import { Location, Route } from './types';

export const LOCATIONS: Location[] = [
  {
    id: 'main-gate',
    name: 'Main Gate',
    aliases: ['entrance', 'front gate', 'main entrance'],
    category: 'gate',
    coordinates: { x: 10, y: 50 },
    description: 'Primary entrance to the university'
  },
  {
    id: 'admin-block',
    name: 'Administrative Block',
    aliases: ['admin', 'administration', 'bursary', 'registry'],
    category: 'administrative',
    coordinates: { x: 30, y: 50 },
    description: 'Houses all administrative offices including bursary and registry'
  },
  {
    id: 'library',
    name: 'University Library',
    aliases: ['lib', 'central library', 'main library'],
    category: 'facility',
    coordinates: { x: 50, y: 40 },
    description: 'Central library with study spaces and computer labs'
  },
  {
    id: 'engineering-faculty',
    name: 'Faculty of Engineering',
    aliases: ['engineering', 'eng faculty', 'seet', 'faculty of eng'],
    category: 'academic',
    coordinates: { x: 70, y: 30 },
    description: 'Engineering lecture halls and laboratories'
  },
  {
    id: 'science-complex',
    name: 'Science Complex',
    aliases: ['science', 'sci complex', 'biology', 'chemistry', 'physics'],
    category: 'academic',
    coordinates: { x: 50, y: 70 },
    description: 'Science laboratories and lecture theaters'
  },
  {
    id: 'arts-faculty',
    name: 'Faculty of Arts',
    aliases: ['arts', 'humanities', 'languages'],
    category: 'academic',
    coordinates: { x: 45, y: 25 },
    description: 'Arts and humanities departments'
  },
  {
    id: 'social-sciences',
    name: 'Faculty of Social Sciences',
    aliases: ['social science', 'economics', 'political science', 'sociology'],
    category: 'academic',
    coordinates: { x: 55, y: 55 },
    description: 'Social sciences lecture halls and offices'
  },
  {
    id: 'cafeteria',
    name: 'Student Cafeteria',
    aliases: ['cafe', 'canteen', 'food court', 'restaurant'],
    category: 'facility',
    coordinates: { x: 40, y: 60 },
    description: 'Main student dining facility'
  },
  {
    id: 'lecture-theater-1',
    name: 'Lecture Theater 1 (LT1)',
    aliases: ['lt1', 'theater 1', 'lecture hall 1'],
    category: 'academic',
    coordinates: { x: 35, y: 35 },
    description: 'Large lecture hall for general courses (500 capacity)'
  },
  {
    id: 'lecture-theater-2',
    name: 'Lecture Theater 2 (LT2)',
    aliases: ['lt2', 'theater 2', 'lecture hall 2'],
    category: 'academic',
    coordinates: { x: 38, y: 32 },
    description: 'Medium lecture hall (300 capacity)'
  },
  {
    id: 'ict-center',
    name: 'ICT Center',
    aliases: ['computer center', 'ict', 'computer lab'],
    category: 'facility',
    coordinates: { x: 60, y: 50 },
    description: 'Computer labs and IT services'
  },
  {
    id: 'student-affairs',
    name: 'Student Affairs Office',
    aliases: ['student affairs', 'sua', 'dean of students'],
    category: 'administrative',
    coordinates: { x: 25, y: 40 },
    description: 'Student support services and counseling'
  },
  {
    id: 'sports-complex',
    name: 'Sports Complex',
    aliases: ['sports', 'stadium', 'gym', 'field', 'fitness center'],
    category: 'facility',
    coordinates: { x: 80, y: 60 },
    description: 'Sports facilities, gymnasium, and playing fields'
  },
  {
    id: 'health-center',
    name: 'University Health Center',
    aliases: ['clinic', 'hospital', 'health', 'medical', 'infirmary'],
    category: 'facility',
    coordinates: { x: 20, y: 65 },
    description: 'Medical services for students and staff'
  },
  {
    id: 'hostel-block-a',
    name: 'Hostel Block A',
    aliases: ['hostel a', 'block a', 'residence a'],
    category: 'residence',
    coordinates: { x: 15, y: 80 },
    description: 'Male student residential accommodation'
  },
  {
    id: 'hostel-block-b',
    name: 'Hostel Block B',
    aliases: ['hostel b', 'block b', 'residence b'],
    category: 'residence',
    coordinates: { x: 25, y: 85 },
    description: 'Female student residential accommodation'
  },
  {
    id: 'senate-building',
    name: 'Senate Building',
    aliases: ['senate', 'vc office', 'vice chancellor'],
    category: 'administrative',
    coordinates: { x: 35, y: 45 },
    description: 'Senate chambers and Vice Chancellor\'s office'
  },
  {
    id: 'bookshop',
    name: 'University Bookshop',
    aliases: ['bookshop', 'bookstore', 'stationery'],
    category: 'facility',
    coordinates: { x: 42, y: 48 },
    description: 'Books, stationery, and academic materials'
  },
  {
    id: 'atm-center',
    name: 'ATM Center',
    aliases: ['atm', 'bank', 'banking hall'],
    category: 'facility',
    coordinates: { x: 32, y: 52 },
    description: 'Banking services and ATM machines'
  },
  {
    id: 'chapel',
    name: 'University Chapel',
    aliases: ['chapel', 'church'],
    category: 'facility',
    coordinates: { x: 18, y: 55 },
    description: 'Christian worship center'
  },
  {
    id: 'mosque',
    name: 'University Mosque',
    aliases: ['mosque', 'prayer room'],
    category: 'facility',
    coordinates: { x: 22, y: 55 },
    description: 'Islamic worship center'
  },
  {
    id: 'parking-lot-main',
    name: 'Main Parking Lot',
    aliases: ['parking', 'car park', 'main park'],
    category: 'facility',
    coordinates: { x: 12, y: 45 },
    description: 'Primary vehicle parking area'
  },
  {
    id: 'auditorium',
    name: 'University Auditorium',
    aliases: ['auditorium', 'convocation hall', 'hall'],
    category: 'facility',
    coordinates: { x: 48, y: 52 },
    description: 'Main auditorium for ceremonies and events (2000 capacity)'
  },
  {
    id: 'cbt-center',
    name: 'CBT Examination Center',
    aliases: ['cbt', 'exam center', 'computer based test'],
    category: 'facility',
    coordinates: { x: 62, y: 45 },
    description: 'Computer-based testing facility'
  }
];


export const ROUTES: Route[] = [
  {
    from: 'main-gate',
    to: 'admin-block',
    distance: 200,
    duration: 3,
    directions: [
      'Walk straight from the main gate',
      'Continue for 200 meters along the paved walkway',
      'Administrative block will be on your right - a three-story white building'
    ],
    landmarks: ['Security post', 'Fountain', 'Flag pole']
  },
  {
    from: 'main-gate',
    to: 'library',
    distance: 450,
    duration: 6,
    directions: [
      'From main gate, walk straight ahead on the main road',
      'Pass the administrative block on your right',
      'Turn left at the central fountain',
      'Library is 100m ahead on your left - large brown building with glass front'
    ],
    landmarks: ['Administrative block', 'Central fountain', 'Flag pole', 'Garden area']
  },
  {
    from: 'admin-block',
    to: 'library',
    distance: 250,
    duration: 4,
    directions: [
      'Exit administrative block main entrance',
      'Turn left and walk towards the central fountain',
      'Turn left at the fountain',
      'Library is ahead on your left'
    ],
    landmarks: ['Central fountain', 'Flag pole']
  },
  {
    from: 'library',
    to: 'engineering-faculty',
    distance: 300,
    duration: 5,
    directions: [
      'Exit library and turn right',
      'Walk along the paved path towards the east',
      'Pass the ICT center on your right',
      'Engineering faculty is the large blue building at the end'
    ],
    landmarks: ['ICT Center', 'Garden area', 'Engineering signpost']
  },
  {
    from: 'main-gate',
    to: 'cafeteria',
    distance: 400,
    duration: 5,
    directions: [
      'From main gate, walk straight',
      'Pass administrative block on your right',
      'Turn right after the central fountain',
      'Walk 150m - cafeteria is on your left with outdoor seating'
    ],
    landmarks: ['Administrative block', 'Central fountain', 'Outdoor benches']
  },
  {
    from: 'library',
    to: 'cafeteria',
    distance: 180,
    duration: 3,
    directions: [
      'Exit library main entrance',
      'Turn right and walk down the gentle slope',
      'Cafeteria is directly ahead - you\'ll smell the food!'
    ],
    landmarks: ['Slope', 'Parking area']
  },
  {
    from: 'cafeteria',
    to: 'science-complex',
    distance: 200,
    duration: 3,
    directions: [
      'Exit cafeteria through the back door',
      'Walk towards the right past the outdoor seating',
      'Science complex is the large white building ahead with lab equipment visible'
    ],
    landmarks: ['Outdoor seating area', 'Science garden']
  },
  {
    from: 'main-gate',
    to: 'ict-center',
    distance: 500,
    duration: 7,
    directions: [
      'From main gate, walk straight on main road',
      'Pass the library on your left',
      'Continue for 100m more',
      'ICT center is on your right - modern building with satellite dishes'
    ],
    landmarks: ['Library', 'Garden', 'ICT signage']
  },
  {
    from: 'admin-block',
    to: 'student-affairs',
    distance: 120,
    duration: 2,
    directions: [
      'Exit administrative block',
      'Turn left and walk along the covered walkway',
      'Student affairs is in the adjacent single-story building'
    ],
    landmarks: ['Covered walkway', 'Notice boards']
  },
  {
    from: 'library',
    to: 'sports-complex',
    distance: 550,
    duration: 8,
    directions: [
      'Exit library and turn right',
      'Walk past engineering faculty on your right',
      'Continue straight on the sports road',
      'Sports complex is at the end - you\'ll see the football field'
    ],
    landmarks: ['Engineering faculty', 'Track field', 'Basketball court']
  },
  {
    from: 'main-gate',
    to: 'health-center',
    distance: 350,
    duration: 5,
    directions: [
      'From main gate, turn left immediately',
      'Walk along the perimeter road',
      'Health center is on your left after 300m - building with red cross sign'
    ],
    landmarks: ['Perimeter fence', 'Trees', 'Red cross sign']
  },
  {
    from: 'health-center',
    to: 'hostel-block-a',
    distance: 200,
    duration: 3,
    directions: [
      'Exit health center',
      'Continue straight on the hostel road',
      'Hostel Block A is ahead - first residential building'
    ],
    landmarks: ['Residential area sign', 'Speed bump']
  },
  {
    from: 'main-gate',
    to: 'lecture-theater-1',
    distance: 320,
    duration: 4,
    directions: [
      'From main gate, walk straight',
      'Turn left at the fountain',
      'Walk 100m past the bookshop',
      'LT1 is the large amphitheater-style building on your right'
    ],
    landmarks: ['Fountain', 'Bookshop', 'LT signage']
  },
  {
    from: 'lecture-theater-1',
    to: 'lecture-theater-2',
    distance: 80,
    duration: 1,
    directions: [
      'Exit LT1',
      'Walk along the connecting pathway',
      'LT2 is the adjacent building - similar architecture'
    ],
    landmarks: ['Connecting pathway']
  },
  {
    from: 'main-gate',
    to: 'senate-building',
    distance: 380,
    duration: 5,
    directions: [
      'From main gate, walk straight',
      'Pass admin block',
      'Turn left after the fountain',
      'Senate building is ahead - impressive colonial-style building'
    ],
    landmarks: ['Admin block', 'Fountain', 'University seal']
  },
  {
    from: 'library',
    to: 'auditorium',
    distance: 150,
    duration: 2,
    directions: [
      'Exit library',
      'Turn left towards the central quad',
      'Auditorium is the large domed building ahead'
    ],
    landmarks: ['Central quad', 'Dome structure']
  },
  {
    from: 'cafeteria',
    to: 'bookshop',
    distance: 100,
    duration: 2,
    directions: [
      'Exit cafeteria',
      'Walk back towards the main road',
      'Bookshop is on your left - blue signage'
    ],
    landmarks: ['Main road', 'Blue bookshop sign']
  },
  {
    from: 'admin-block',
    to: 'atm-center',
    distance: 90,
    duration: 2,
    directions: [
      'Exit admin block',
      'Turn right',
      'ATM center is in the small building adjacent - look for bank logos'
    ],
    landmarks: ['Bank logos', 'Security booth']
  },
  {
    from: 'main-gate',
    to: 'chapel',
    distance: 280,
    duration: 4,
    directions: [
      'From main gate, turn left',
      'Walk along perimeter road',
      'Chapel is on your left - building with cross on top'
    ],
    landmarks: ['Perimeter road', 'Cross symbol', 'Bell tower']
  },
  {
    from: 'chapel',
    to: 'mosque',
    distance: 60,
    duration: 1,
    directions: [
      'Exit chapel',
      'Walk along the faith center pathway',
      'Mosque is adjacent - building with green dome'
    ],
    landmarks: ['Faith center pathway', 'Green dome']
  },
  {
    from: 'main-gate',
    to: 'parking-lot-main',
    distance: 150,
    duration: 2,
    directions: [
      'From main gate, turn left immediately',
      'Parking lot is right there on your left'
    ],
    landmarks: ['Security gate', 'Parking barrier']
  },
  {
    from: 'ict-center',
    to: 'cbt-center',
    distance: 120,
    duration: 2,
    directions: [
      'Exit ICT center',
      'Walk towards the south',
      'CBT center is in the modern building adjacent'
    ],
    landmarks: ['Modern building', 'CBT signage']
  },
  {
    from: 'engineering-faculty',
    to: 'science-complex',
    distance: 400,
    duration: 6,
    directions: [
      'Exit engineering faculty',
      'Head towards the west',
      'Cross the central lawn',
      'Science complex is ahead'
    ],
    landmarks: ['Central lawn', 'Fountain']
  },
  {
    from: 'hostel-block-a',
    to: 'hostel-block-b',
    distance: 180,
    duration: 3,
    directions: [
      'Exit Hostel Block A',
      'Walk along the hostel road',
      'Hostel Block B is the next building'
    ],
    landmarks: ['Hostel road', 'Recreation area']
  },
  {
    from: 'library',
    to: 'social-sciences',
    distance: 220,
    duration: 3,
    directions: [
      'Exit library',
      'Turn right and walk towards the east',
      'Social sciences faculty is the beige building on your right'
    ],
    landmarks: ['Garden area', 'Faculty signpost']
  },
  {
    from: 'main-gate',
    to: 'arts-faculty',
    distance: 420,
    duration: 6,
    directions: [
      'From main gate, walk straight',
      'Turn left at the fountain',
      'Walk past LT1 and LT2',
      'Arts faculty is ahead on your left'
    ],
    landmarks: ['Fountain', 'LT1', 'LT2', 'Arts signage']
  }
];