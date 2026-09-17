import { categories } from '../data/categories'

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-4xl text-ink">Today's rates</h2>
        <p className="mt-4 text-lg text-ink-soft">
          Same rate for everyone, every pickup. No haggling at the door.
        </p>
      </div>

      <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-paper">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-ink/10 text-sm text-ink-soft">
              <th className="px-6 py-4 font-medium">Category</th>
              <th className="px-6 py-4 font-medium">Unit</th>
              <th className="px-6 py-4 text-right font-medium">Rate</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, i) => (
              <tr
                key={cat.id}
                className={i !== categories.length - 1 ? 'border-b border-ink/10' : ''}
              >
                <td className="px-6 py-4 text-[15px] font-medium text-ink">
                  {cat.label}
                </td>
                <td className="px-6 py-4 text-[15px] text-ink-soft">per {cat.unit}</td>
                <td className="px-6 py-4 text-right font-display text-lg text-leaf-deep">
                  Rs {cat.rate}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-sm text-ink-soft">
        Rates shown for Karachi. Rates vary slightly by city and update daily.
      </p>
    </section>
  )
}
