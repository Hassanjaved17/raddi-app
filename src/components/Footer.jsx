import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi'
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa'

const productLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: "Today's rates", href: '#pricing' },
  { label: 'Schedule a pickup', href: '#book' },
]

const cityLinks = ['Karachi', 'Lahore', 'Islamabad (coming soon)']

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="font-display text-2xl text-paper">Raddi</span>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed">
              Doorstep scrap pickup at a fair, fixed price — built for how
              Pakistan actually sells its raddi.
            </p>
            <div className="mt-5 flex gap-4 text-lg">
              <a href="#" aria-label="Instagram" className="transition-colors hover:text-brass"><FaInstagram /></a>
              <a href="#" aria-label="Facebook" className="transition-colors hover:text-brass"><FaFacebook /></a>
              <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-brass"><FaLinkedin /></a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">Product</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-brass">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">Cities</h3>
            <ul className="mt-4 space-y-2.5 text-[15px]">
              {cityLinks.map((city) => (<li key={city}>{city}</li>))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-paper">Contact</h3>
            <ul className="mt-4 space-y-3 text-[15px]">
              <li className="flex items-center gap-2.5"><HiOutlinePhone className="text-brass" /> 0300 1234567</li>
              <li className="flex items-center gap-2.5"><HiOutlineMail className="text-brass" /> hello@raddi.pk</li>
              <li className="flex items-center gap-2.5"><HiOutlineLocationMarker className="text-brass" /> Karachi, Pakistan</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-sm sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Raddi. A SMIT Batch 18 capstone project.</p>
          <p>
            Designed &amp; developed by{' '}
            <a
              href="https://hassanjaved.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-paper underline decoration-brass decoration-2 underline-offset-4 hover:text-brass"
            >
              Hassan Javed
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}