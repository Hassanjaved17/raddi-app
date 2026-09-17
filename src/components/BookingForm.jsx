import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import toast from 'react-hot-toast'
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineCalendar,
  HiOutlineStar,
  HiOutlineTruck,
  HiOutlineClock,
} from 'react-icons/hi'
import { categories, timeSlots } from '../data/categories'
import { matchCollector } from '../data/collectors'

export default function BookingForm() {
  const [selected, setSelected] = useState('paper')
  const [weight, setWeight] = useState(5)
  const [slot, setSlot] = useState(timeSlots[0])
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [matching, setMatching] = useState(false)
  const [collector, setCollector] = useState(null)

  const category = categories.find((c) => c.id === selected)
  const estimate = useMemo(() => {
    if (!category) return 0
    return category.unit === 'item' ? category.rate : category.rate * weight
  }, [category, weight])

  function handleSubmit(e) {
    e.preventDefault()
    if (!address || !phone) {
      toast.error('Add your address and phone number to continue')
      return
    }
    // Stands in for: POST /bookings -> backend notifies collectors whose
    // service area covers this address -> first to accept gets assigned.
    setMatching(true)
    setTimeout(() => {
      setCollector(matchCollector(address))
      setMatching(false)
      toast.success('Collector assigned — you will get a WhatsApp confirmation')
    }, 1600)
  }

  function reset() {
    setCollector(null)
    setAddress('')
    setPhone('')
  }

  return (
    <section id="book" className="bg-paper-dim py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl text-ink">Schedule your pickup</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Takes about two minutes. No account needed.
        </p>

        {matching ? (
          <div className="mt-10 rounded-2xl border border-ink/10 bg-paper p-10 text-center">
            <div className="relative mx-auto h-16 w-16">
              <span className="absolute inset-0 animate-ping rounded-full bg-leaf/25" />
              <span className="absolute inset-3 rounded-full bg-leaf/20" />
              <HiOutlineTruck className="absolute inset-0 m-auto text-2xl text-leaf-deep" />
            </div>
            <p className="mt-6 font-display text-xl text-ink">
              Finding your nearest collector…
            </p>
            <p className="mt-2 text-[15px] text-ink-soft">
              Notifying verified collectors working near {address.split(',')[0] || 'your area'}
            </p>
          </div>
        ) : collector ? (
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="mt-10 rounded-2xl border border-leaf/30 bg-paper p-8"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-leaf/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-leaf-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
              Collector assigned
            </span>

            <h3 className="mt-4 font-display text-2xl text-leaf-deep">
              {collector.name} is picking up your raddi
            </h3>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-xl bg-paper-dim px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <HiOutlineStar className="text-brass-deep" /> Rating
                </span>
                <p className="mt-1 font-display text-lg text-ink">
                  {collector.rating}
                  <span className="ml-1 text-xs font-normal text-ink-soft">
                    · {collector.pickups} pickups
                  </span>
                </p>
              </div>
              <div className="rounded-xl bg-paper-dim px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <HiOutlineClock className="text-brass-deep" /> Arriving in
                </span>
                <p className="mt-1 font-display text-lg text-ink">
                  ~{collector.etaMins} mins
                </p>
              </div>
              <div className="rounded-xl bg-paper-dim px-4 py-3">
                <span className="flex items-center gap-1.5 text-xs text-ink-soft">
                  <HiOutlineTruck className="text-brass-deep" /> Vehicle
                </span>
                <p className="mt-1 text-[15px] font-medium text-ink">
                  {collector.vehicle}
                </p>
              </div>
            </div>

            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Covering <span className="font-medium text-ink">{collector.area}</span>. Arriving
              during <span className="font-medium text-ink">{slot}</span> for your{' '}
              <span className="font-medium text-ink">{category?.label.toLowerCase()}</span>.
              Estimated payout:{' '}
              <span className="font-display text-lg text-leaf-deep">Rs {estimate}</span>, paid
              after a digital weigh-in in front of you.
            </p>

            <button
              onClick={reset}
              className="mt-6 text-sm font-semibold text-ink-soft underline underline-offset-4 hover:text-ink"
            >
              Schedule another pickup
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mt-10 rounded-2xl border border-ink/10 bg-paper p-6 sm:p-8"
          >
            <label className="text-sm font-semibold text-ink">
              What are you scrapping?
            </label>
            <div className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
              {categories.map((cat) => (
                <button
                  type="button"
                  key={cat.id}
                  onClick={() => setSelected(cat.id)}
                  className={`rounded-lg border px-3 py-2.5 text-left text-sm transition-colors ${
                    selected === cat.id
                      ? 'border-leaf bg-leaf/10 text-leaf-deep'
                      : 'border-ink/10 text-ink-soft hover:border-ink/25'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {category?.unit === 'kg' && (
              <div className="mt-6">
                <label className="text-sm font-semibold text-ink">
                  Estimated weight: {weight} kg
                </label>
                <input
                  type="range"
                  min="1"
                  max="50"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="mt-3 w-full accent-leaf"
                />
              </div>
            )}

            <div className="mt-6 flex items-center justify-between rounded-xl bg-ink px-5 py-4 text-paper">
              <span className="text-sm text-paper/70">Estimated payout</span>
              <span className="font-display text-2xl text-brass">Rs {estimate}</span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="text-sm font-semibold text-ink">Pickup slot</span>
                <div className="relative mt-2">
                  <HiOutlineCalendar className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <select
                    value={slot}
                    onChange={(e) => setSlot(e.target.value)}
                    className="w-full appearance-none rounded-lg border border-ink/15 bg-paper py-2.5 pl-10 pr-3 text-[15px] text-ink outline-none focus:border-leaf"
                  >
                    {timeSlots.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </label>

              <label className="block">
                <span className="text-sm font-semibold text-ink">Phone number</span>
                <div className="relative mt-2">
                  <HiOutlinePhone className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0300 1234567"
                    className="w-full rounded-lg border border-ink/15 bg-paper py-2.5 pl-10 pr-3 text-[15px] text-ink outline-none placeholder:text-ink-soft/50 focus:border-leaf"
                  />
                </div>
              </label>
            </div>

            <label className="mt-4 block">
              <span className="text-sm font-semibold text-ink">Pickup address</span>
              <div className="relative mt-2">
                <HiOutlineLocationMarker className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="House, street, area"
                  className="w-full rounded-lg border border-ink/15 bg-paper py-2.5 pl-10 pr-3 text-[15px] text-ink outline-none placeholder:text-ink-soft/50 focus:border-leaf"
                />
              </div>
            </label>

            <button
              type="submit"
              className="mt-7 w-full rounded-full bg-leaf py-3.5 text-[15px] font-semibold text-paper transition-colors hover:bg-leaf-deep sm:w-auto sm:px-8"
            >
              Confirm pickup
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
