import { motion } from 'framer-motion'

const float = (delay) => ({
  animate: { y: [0, -10, 0] },
  transition: { duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay },
})

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative overflow-hidden rounded-2xl border border-ink/10 bg-paper-dim shadow-[0_20px_60px_-25px_rgba(22,35,28,0.35)]"
    >
      <svg viewBox="0 0 480 460" className="h-auto w-full" role="img" aria-label="Illustration of a doorstep scrap pickup">
        {/* backdrop */}
        <rect width="480" height="460" fill="#E4DFCC" />
        <path d="M0 340 L480 340 L480 460 L0 460 Z" fill="#1F2B24" />

        {/* house */}
        <g>
          <rect x="46" y="150" width="140" height="150" rx="4" fill="#16231C" />
          <path d="M36 158 L116 94 L196 158 Z" fill="#2C4E36" />
          <rect x="95" y="210" width="42" height="90" rx="3" fill="#EFEBDD" />
          <circle cx="126" cy="255" r="3" fill="#D8A73D" />
          <rect x="62" y="185" width="26" height="26" rx="2" fill="#D8A73D" opacity="0.85" />
        </g>

        {/* dashed path from house to cart */}
        <motion.path
          d="M190 300 C 240 320, 280 320, 330 300"
          stroke="#D8A73D"
          strokeWidth="2.5"
          strokeDasharray="7 8"
          fill="none"
          opacity="0.6"
          animate={{ strokeDashoffset: [0, -30] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        />

        {/* cart */}
        <g transform="translate(300,240)">
          <rect x="0" y="0" width="110" height="70" rx="6" fill="#D8A73D" />
          <rect x="10" y="10" width="30" height="50" rx="2" fill="#EFEBDD" />
          <rect x="46" y="18" width="26" height="42" rx="10" fill="#EFEBDD" />
          <rect x="80" y="14" width="22" height="46" rx="3" fill="#2C4E36" />
          <circle cx="18" cy="85" r="16" fill="#16231C" />
          <circle cx="18" cy="85" r="5" fill="#EFEBDD" />
          <circle cx="88" cy="85" r="16" fill="#16231C" />
          <circle cx="88" cy="85" r="5" fill="#EFEBDD" />
          <rect x="-22" y="28" width="26" height="6" rx="3" fill="#16231C" />
        </g>

        {/* floating category badges */}
        <motion.g {...float(0)}>
          <circle cx="120" cy="70" r="26" fill="#16231C" />
          <rect x="108" y="60" width="24" height="18" rx="2" fill="#EFEBDD" />
          <rect x="112" y="64" width="16" height="2.5" fill="#16231C" />
          <rect x="112" y="69" width="16" height="2.5" fill="#16231C" />
        </motion.g>

        <motion.g {...float(0.6)}>
          <circle cx="330" cy="60" r="26" fill="#2C4E36" />
          <path d="M320 66 Q330 46 340 66 L338 74 L322 74 Z" fill="#EFEBDD" />
        </motion.g>

        <motion.g {...float(1.2)}>
          <circle cx="410" cy="150" r="28" fill="#D8A73D" />
          <text x="410" y="157" textAnchor="middle" fontSize="20" fontWeight="700" fill="#16231C" fontFamily="Georgia, serif">
            Rs
          </text>
        </motion.g>

        <motion.g {...float(0.3)}>
          <circle cx="230" cy="150" r="20" fill="#EFEBDD" stroke="#16231C" strokeWidth="1.5" />
          <path d="M222 150 l5 6 l11 -13" stroke="#2C4E36" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </motion.g>
      </svg>

      <div className="border-t border-ink/10 bg-paper px-6 py-4">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink">Every pickup, weighed on camera.</span>{' '}
          What you see is what you're paid.
        </p>
      </div>
    </motion.div>
  )
}