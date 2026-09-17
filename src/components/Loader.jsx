import { motion } from 'framer-motion'

export default function Loader() {
    return (
        <motion.div
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
        >
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="flex flex-col items-center"
            >
                <div className="relative h-16 w-16">
                    <svg viewBox="0 0 64 64" className="h-16 w-16">
                        <circle cx="32" cy="32" r="28" fill="none" stroke="#2C3A31" strokeWidth="2" />
                        <motion.path
                            d="M32 32 L32 10"
                            stroke="#D8A73D"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            style={{ transformOrigin: '32px 32px' }}
                            animate={{ rotate: [-40, 40, -40] }}
                            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                        />
                        <circle cx="32" cy="32" r="3" fill="#D8A73D" />
                    </svg>
                </div>

                <span className="mt-5 font-display text-3xl text-paper">Raddi</span>

                <div className="mt-4 h-[3px] w-32 overflow-hidden rounded-full bg-paper/15">
                    <motion.div
                        className="h-full bg-brass"
                        initial={{ width: '0%' }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1.1, ease: 'easeInOut' }}
                    />
                </div>
                <span className="mt-3 text-xs tracking-wide text-paper/50">weighing things fairly</span>
            </motion.div>
        </motion.div>
    )
}