import { motion } from 'framer-motion'

const reasonsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const reasonItem = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

const reasons = [
  {
    title: 'Reliable Supply Chain',
    desc: 'Consistent, uninterrupted supply backed by multiple sourcing countries and local farms.',
    icon: <ChainIcon />,
    color: 'bg-blue-600',
  },
  {
    title: 'Fresh & Quality Assured',
    desc: 'Every batch undergoes rigorous quality checks to ensure freshness, safety, and grade compliance.',
    icon: <ShieldIcon />,
    color: 'bg-sky-600',
  },
  {
    title: 'Competitive Pricing',
    desc: 'Best market prices with volume discounts and flexible payment terms for business clients.',
    icon: <PriceIcon />,
    color: 'bg-indigo-600',
  },
  {
    title: 'Bulk Capability',
    desc: 'Capable of fulfilling large-scale orders for hypermarkets and distribution centers.',
    icon: <BulkIcon />,
    color: 'bg-cyan-700',
  },
  {
    title: 'Fast UAE Delivery',
    desc: 'Efficient logistics network ensuring timely delivery across all seven UAE Emirates.',
    icon: <SpeedIcon />,
    color: 'bg-blue-700',
  },
  {
    title: 'Hygienic Packaging',
    desc: 'All products packed in food-safe, labelled packaging meeting UAE food safety standards.',
    icon: <PackIcon />,
    color: 'bg-sky-700',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding bg-[#F1E0CB]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — visual card */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-48 h-48 bg-sky-400/10 rounded-full blur-3xl" aria-hidden="true" />
              <div className="absolute -left-10 -bottom-10 w-48 h-48 bg-blue-600/10 rounded-full blur-3xl" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-sky-400 rounded-xl flex items-center justify-center">
                    <StarIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-white">Al Aseelah Trading</p>
                    <p className="text-slate-400 text-xs">UAE Licensed Supplier</p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4 leading-tight">
                  Why Businesses Choose{' '}
                  <span className="text-sky-400">Al Aseelah</span>
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  We've built our reputation on reliability, quality, and exceptional
                  service — making us the preferred egg supplier for businesses across UAE.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { n: '3+', l: 'Import Countries' },
                    { n: '7', l: 'Emirates Covered' },
                    { n: '100%', l: 'On-time Delivery' },
                    { n: 'A Grade', l: 'Quality Guaranteed' },
                  ].map((s) => (
                    <div key={s.l} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                      <p className="text-xl font-bold text-white">{s.n}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-4 -right-4 glass shadow-xl rounded-2xl px-5 py-3 border border-white/30"
            >
              <p className="text-slate-900 font-bold text-sm">Supplying All UAE Emirates</p>
              <p className="text-sky-600 text-xs">Abu Dhabi • Dubai • Sharjah • +4 more</p>
            </motion.div>
          </motion.div>

          {/* Right — reasons grid */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10"
            >
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 rounded-full uppercase mb-4 border border-sky-100">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The{' '}
                <span className="text-gradient">Al Aseelah</span>{' '}
                Advantage
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Six core pillars that make us UAE's most dependable egg supply partner.
              </p>
            </motion.div>

            <motion.div
              className="grid sm:grid-cols-2 gap-4"
              variants={reasonsContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.1 }}
            >
              {reasons.map((r) => (
                <motion.div
                  key={r.title}
                  variants={reasonItem}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                  className="group flex items-start gap-4 p-4 bg-white border border-sky-200 rounded-2xl hover:border-sky-400 hover:shadow-lg hover:shadow-sky-200/50 transition-all duration-200 cursor-default"
                >
                  <div className={`flex-shrink-0 w-10 h-10 ${r.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}>
                    {r.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-1">{r.title}</h4>
                    <p className="text-slate-600 text-xs leading-relaxed">{r.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ChainIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
    </svg>
  )
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  )
}

function PriceIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function BulkIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  )
}

function SpeedIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  )
}

function PackIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <polyline points="21 8 21 21 3 21 3 8" />
      <rect x="1" y="3" width="22" height="5" />
      <line x1="10" y1="12" x2="14" y2="12" />
    </svg>
  )
}
