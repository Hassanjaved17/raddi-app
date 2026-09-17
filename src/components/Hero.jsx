import HeroVisual from './Herovisual'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-5 font-display text-sm italic text-leaf-deep">
            Doorstep scrap pickup, Karachi &amp; Lahore
          </p>
          <h1 className="font-display text-[2.75rem] leading-[1.08] text-ink sm:text-6xl">
            Your ghar ka raddi,
            <br />
            weighed fair.
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            No more guessing what the kabaria will pay. See today's rate before
            you book, schedule a pickup in two minutes, and get paid on the spot.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#book"
              className="rounded-full bg-ink px-7 py-3.5 text-[15px] font-semibold text-paper transition-transform hover:scale-[1.02]"
            >
              Schedule a pickup
            </a>
            <a
              href="#pricing"
              className="text-[15px] font-semibold text-ink-soft underline decoration-brass decoration-2 underline-offset-4 hover:text-ink"
            >
              See today's rates
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}
