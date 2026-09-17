export const categories = [
  { id: 'paper', label: 'Newspaper & Paper', unit: 'kg', rate: 28, icon: 'paper' },
  { id: 'cardboard', label: 'Cardboard', unit: 'kg', rate: 18, icon: 'box' },
  { id: 'plastic', label: 'Plastic Bottles', unit: 'kg', rate: 22, icon: 'bottle' },
  { id: 'iron', label: 'Iron & Steel', unit: 'kg', rate: 62, icon: 'metal' },
  { id: 'copper', label: 'Copper Wire', unit: 'kg', rate: 890, icon: 'wire' },
  { id: 'aluminium', label: 'Aluminium', unit: 'kg', rate: 240, icon: 'can' },
  { id: 'appliance', label: 'Old Appliances', unit: 'item', rate: 450, icon: 'appliance' },
  { id: 'ewaste', label: 'E-Waste', unit: 'kg', rate: 95, icon: 'chip' },
]

export const timeSlots = [
  '9:00 AM – 11:00 AM',
  '11:00 AM – 1:00 PM',
  '2:00 PM – 4:00 PM',
  '4:00 PM – 6:00 PM',
]


// Mock collector pool.
// In the real product this list comes from the backend: collectors register
// with a service area, and a booking is offered to the ones whose area covers
// the customer's address (radius / geofence match), first to accept wins.
export const collectors = [
  {
    id: 'c1',
    name: 'Imran Siddiqui',
    area: 'Gulshan-e-Iqbal',
    rating: 4.9,
    pickups: 412,
    etaMins: 25,
    vehicle: 'Loader rickshaw',
  },
  {
    id: 'c2',
    name: 'Rashid Ali',
    area: 'North Nazimabad',
    rating: 4.8,
    pickups: 288,
    etaMins: 35,
    vehicle: 'Suzuki pickup',
  },
  {
    id: 'c3',
    name: 'Naveed Hussain',
    area: 'DHA & Clifton',
    rating: 4.7,
    pickups: 356,
    etaMins: 30,
    vehicle: 'Loader rickshaw',
  },
  {
    id: 'c4',
    name: 'Shakeel Ahmed',
    area: 'Federal B Area',
    rating: 4.9,
    pickups: 501,
    etaMins: 20,
    vehicle: 'Suzuki pickup',
  },
  {
    id: 'c5',
    name: 'Yasir Khan',
    area: 'Malir & Shah Faisal',
    rating: 4.6,
    pickups: 194,
    etaMins: 40,
    vehicle: 'Loader rickshaw',
  },
]

// Stand-in for the real geo match. Deterministic so the same address always
// returns the same collector during a demo — no random surprises on stage.
export function matchCollector(address = '') {
  const key = address.trim().toLowerCase()
  if (!key) return collectors[0]
  let sum = 0
  for (let i = 0; i < key.length; i += 1) sum += key.charCodeAt(i)
  return collectors[sum % collectors.length]
}
