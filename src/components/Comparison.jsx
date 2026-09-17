const rows = [
  {
    label: 'Price',
    old: 'Whatever the kabaria offers that day — no way to check',
    raddi: "Fixed rate shown upfront, same as today's market",
  },
  {
    label: 'Weighing',
    old: 'Their scale, their reading — you just trust it',
    raddi: 'Digital scale, weight shown to you before payout',
  },
  {
    label: 'Timing',
    old: 'Wait around until someone passes by shouting',
    raddi: 'Pick a 2-hour slot, they show up in that window',
  },
  {
    label: 'Payment',
    old: 'Cash only, whatever they decide to round to',
    raddi: 'Cash or JazzCash/EasyPaisa, exact amount',
  },
]

export default function Comparison() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="max-w-xl">
        <h2 className="font-display text-4xl text-ink">
          The raddi wala hasn't changed in 40 years.
        </h2>
        <p className="mt-4 text-lg text-ink-soft">
          Your phone has. Here's what actually changes when you book through Raddi.
        </p>
      </div>

      <div className="mt-12 overflow-hidden rounded-2xl border border-ink/10">
        <div className="grid grid-cols-3 bg-ink text-paper">
          <div className="px-5 py-4 text-sm font-medium text-paper/60">&nbsp;</div>
          <div className="px-5 py-4 font-display text-lg">Old way</div>
          <div className="px-5 py-4 font-display text-lg text-brass">Raddi</div>
        </div>
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-3 ${i % 2 === 0 ? 'bg-paper' : 'bg-paper-dim'}`}
          >
            <div className="px-5 py-5 text-sm font-semibold text-ink-soft">
              {row.label}
            </div>
            <div className="px-5 py-5 text-[15px] leading-snug text-ink-soft">
              {row.old}
            </div>
            <div className="px-5 py-5 text-[15px] font-medium leading-snug text-ink">
              {row.raddi}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
