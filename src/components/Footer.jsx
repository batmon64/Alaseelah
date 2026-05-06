import { motion } from 'framer-motion'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Process', href: '#process' },
  { label: 'Clients', href: '#clients' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-10 pb-12 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="mb-5 inline-block bg-white rounded-xl px-2 py-1 shadow-md shadow-black/20">
              <img
                src="/Images/logo2.png"
                alt="Al Aseelah Foodstuff Trading LLC"
                className="h-14 w-auto"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              UAE's trusted egg supplier — importing from India, Pakistan, Turkey &amp; Saudi Arabia,
              and distributing fresh UAE eggs across all emirates.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://wa.me/971569454672?text=Hello%2C%20I%27m%20interested%20in%20your%20egg%20supply%20services."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 bg-slate-800 hover:bg-green-600 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <WhatsAppIcon className="w-4 h-4 text-slate-400 hover:text-white" />
              </a>
              <a
                href="mailto:info@alaseelah.com"
                aria-label="Email"
                className="w-9 h-9 bg-slate-800 hover:bg-sky-600 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <MailIcon className="w-4 h-4 text-slate-400" />
              </a>
              <a
                href="tel:+971569454672"
                aria-label="Phone"
                className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200 cursor-pointer"
              >
                <PhoneIcon className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-slate-500 hover:text-sky-400 text-sm transition-colors duration-150 cursor-pointer flex items-center gap-2 focus:outline-none focus:text-sky-400"
                  >
                    <span className="w-1 h-1 rounded-full bg-sky-500" aria-hidden="true" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <LocationIcon className="w-4 h-4 text-sky-500 flex-shrink-0 mt-0.5" />
                <a
                  href="https://www.google.com/maps?q=Al+ASEELAH+FOODSTUFF+TRADING+LLC&ftid=0x3ef5f9246c6e674b:0x2049f98f7aa246ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-sky-400 transition-colors duration-150 cursor-pointer"
                >
                  Al Muqta, Umm Al Quwain, UAE
                </a>
              </li>
              <li>
                <a href="tel:+971569454672" className="flex items-center gap-3 text-slate-500 hover:text-sky-400 transition-colors duration-150 cursor-pointer">
                  <PhoneIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  +971 56 945 4672
                </a>
              </li>
              <li>
                <a href="tel:+971523581805" className="flex items-center gap-3 text-slate-500 hover:text-sky-400 transition-colors duration-150 cursor-pointer">
                  <PhoneIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  +971 52 358 1805
                </a>
              </li>
              <li>
                <a href="mailto:info@alaseelah.com" className="flex items-center gap-3 text-slate-500 hover:text-sky-400 transition-colors duration-150 cursor-pointer">
                  <MailIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  info@alaseelah.com
                </a>
              </li>
              <li>
                <a href="https://www.alaseelah.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-500 hover:text-sky-400 transition-colors duration-150 cursor-pointer">
                  <GlobeIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                  www.alaseelah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Al Aseelah Foodstuff Trading LLC. All rights reserved.</p>
          <p>Al Muqta, Umm Al Quwain, UAE &mdash; Delivery across all Emirates</p>
        </div>
      </div>
    </footer>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function LocationIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function GlobeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}
