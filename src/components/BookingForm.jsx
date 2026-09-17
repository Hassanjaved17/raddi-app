import { useState, useMemo } from 'react'
import toast from 'react-hot-toast'
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineCalendar } from 'react-icons/hi'
import { categories, timeSlots } from '../data/categories'

export default function BookingForm() {
  const [selected, setSelected] = useState('paper')
  const [weight, setWeight] = useState(5)
  const [slot, setSlot] = useState(timeSlots[0])
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [submitted, setSubmitted] = useState(false)

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
    setSubmitted(true)
    toast.success('Pickup scheduled — collector will confirm on WhatsApp')
  }

  return (
    <section id="book" className="bg-paper-dim py-20">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-display text-4xl text-ink">Schedule your pickup</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Takes about two minutes. No account needed.
        </p>

        {submitted ? (
          <div className="mt-10 rounded-2xl border border-leaf/30 bg-paper p-8">
            <h3 className="font-display text-2xl text-leaf-deep">
              You're booked, {address ? 'thanks!' : ''}
            </h3>
            <p className="mt-3 text-ink-soft">
              A Raddi collector will arrive during{' '}
              <span className="font-medium text-ink">{slot}</span> to pick up your{' '}
              <span className="font-medium text-ink">{category?.label.toLowerCase()}</span>.
              Estimated payout:{' '}
              <span className="font-display text-lg text-leaf-deep">Rs {estimate}</span>.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-6 text-sm font-semibold text-ink-soft underline underline-offset-4 hover:text-ink"
            >
              Schedule another pickup
            </button>
          </div>
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
