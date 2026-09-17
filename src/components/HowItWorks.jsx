const steps = [
  {
    n: '01',
    title: 'Select what you\'re scrapping',
    body: "Paper, metal, old appliances, e-waste — pick from the list and see the rate instantly.",
  },
  {
    n: '02',
    title: 'Pick a slot, we notify collectors nearby',
    body: 'Choose a 2-hour window. Your request goes out to verified collectors working in your area, and the first to accept is assigned to you.',
  },
  {
    n: '03',
    title: 'Get weighed and paid',
    body: 'Your assigned collector weighs it on a digital scale in front of you and pays on the spot.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-ink py-20 text-paper">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-display text-4xl">How a pickup works</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n} className="border-t border-paper/20 pt-6">
              <span className="font-display text-sm text-brass">{step.n}</span>
              <h3 className="mt-3 font-display text-xl">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-paper/70">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
