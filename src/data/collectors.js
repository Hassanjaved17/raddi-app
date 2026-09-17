const collectors = [
  { name: 'Aslam Bhai', rating: 4.8, pickups: 312, etaMins: 22, vehicle: 'Loader rickshaw', area: 'Gulshan-e-Iqbal' },
  { name: 'Rafiq Recyclers', rating: 4.6, pickups: 190, etaMins: 18, vehicle: 'Pickup van', area: 'North Nazimabad' },
  { name: 'Imran Scrap Co.', rating: 4.9, pickups: 455, etaMins: 27, vehicle: 'Pickup van', area: 'DHA / Clifton' },
  { name: 'Waseem Traders', rating: 4.5, pickups: 128, etaMins: 15, vehicle: 'Loader rickshaw', area: 'Malir' },
]

// Deterministic-ish pick so the same address always gets the same collector
// in a single demo session, without needing a real backend yet.
export function matchCollector(address = '') {
  const seed = address.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0)
  return collectors[seed % collectors.length]
}

export default collectors