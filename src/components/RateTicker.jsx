import { categories } from '../data/categories'

// duplicate the list so the marquee loops seamlessly
const loop = [...categories, ...categories,...categories, ...categories]

export default function RateTicker() {
    return (
        <section className="overflow-hidden border-y border-ink/10 bg-ink py-3.5">
            <div className="flex items-center gap-2 pl-6">
                <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold text-brass">
                    <span className="h-1.5 w-1.5 rounded-full bg-brass" />
                    Today's rates
                </span>
            </div>

            <div className="relative mt-3">
                <div className="animate-[ticker_28s_linear_infinite] flex w-max gap-10">
                    {loop.map((item, i) => (
                        <span
                            key={`${item.id}-${i}`}
                            className="flex shrink-0 items-center gap-2 whitespace-nowrap text-sm text-paper/80"
                        >
                            <span className="text-paper/50">{item.label}</span>
                            <span className="font-display font-semibold text-brass">
                                Rs {item.rate}
                                <span className="ml-0.5 text-xs font-normal text-paper/40">/{item.unit}</span>
                            </span>
                            <span className="ml-8 text-paper/20">•</span>
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}