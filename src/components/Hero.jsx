import { motion } from 'framer-motion'  
import { categories } from '../data/categories'
import HeroVisual from './Herovisual'

const tickerItems = categories.slice(0, 5)

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-14 md:pb-28 md:pt-20">
      <div className="grid items-center gap-14 md:grid-cols-2">
        <div>
          <p className="mb-5 font-display text-sm italic text-leaf-deep">
            Doorstep scrap pickup, Karachi & Lahore
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

      {/* <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="rounded-2xl border border-ink/10 bg-ink text-paper shadow-[0_20px_60px_-25px_rgba(22,35,28,0.5)]"
        >  */}
        <HeroVisual />
  {/* </motion.div>  */}
   
          {/* <div className="flex items-center justify-between border-b border-paper/15 px-6 py-4">
            <span className="font-display text-lg">Today's rates</span>
            <span className="flex items-center gap-1.5 text-xs text-brass">
              <span className="h-1.5 w-1.5 rounded-full bg-brass" />
              Live
            </span>
          </div>
          <ul className="divide-y divide-paper/10">
            {tickerItems.map((item, i) => (
              <li
                key={item.id}
                className="flex items-center justify-between px-6 py-3.5 text-[15px]"
              >
                <span className="text-paper/90">{item.label}</span>
                <span className="font-display font-semibold text-brass">
                  Rs {item.rate}
                  <span className="ml-1 text-xs font-normal text-paper/50">
                    /{item.unit}
                  </span>
                </span>
              </li>
            ))}
          </ul>
          <div className="px-6 py-4 text-xs text-paper/50">
            Updated daily based on Karachi scrap market rates
          </div> */}
       
      </div>
    </section>
  )
}
