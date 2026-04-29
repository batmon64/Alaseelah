import { motion } from 'framer-motion'

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 50, scale: 0.88 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const highlights = [
  {
    icon: <GlobeIcon />,
    title: 'Global Sourcing',
    desc: 'Importing premium eggs from India, Pakistan, and Turkey with strict quality standards.',
  },
  {
    icon: <LeafIcon />,
    title: 'Fresh Local Eggs',
    desc: 'Supplying fresh UAE eggs directly from certified local farms to ensure freshness.',
  },
  {
    icon: <TruckIcon />,
    title: 'All UAE Delivery',
    desc: 'Reliable distribution network covering all seven Emirates with on-time delivery.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 rounded-full uppercase mb-4 border border-sky-100">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
              UAE's Most Trusted{' '}
              <span className="text-gradient">Egg Trading</span>{' '}
              Company
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Al Aseelah Foodstuff Trading LLC is a professionally managed foodstuff
              trading company headquartered in <strong className="text-slate-800">Old Sanaya, Umm Al Quwain, UAE</strong>.
              We specialize in the wholesale and retail distribution of eggs — both
              imported and locally sourced — to businesses across the entire UAE.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              With a strong supply chain spanning <strong className="text-slate-800">India, Pakistan, Turkey</strong>,
              and UAE's own certified farms, we deliver consistent quality, hygienic
              packaging, and competitive pricing to supermarkets, grocery stores,
              hypermarkets, restaurants, and more.
            </p>

            <div className="flex flex-wrap gap-3">
              {['Licensed UAE Trader', 'All Emirates Delivery', 'Bulk & Retail'].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-slate-50 border border-slate-200 text-slate-700 text-sm font-medium rounded-xl"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right — highlight cards */}
          <motion.div
            className="flex flex-col gap-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.15 }}
          >
            {highlights.map((h) => (
              <motion.div
                key={h.title}
                variants={cardItem}
                className="group flex items-start gap-5 p-6 bg-gradient-to-br from-slate-50 to-sky-50 border border-slate-100 rounded-2xl hover:border-sky-200 hover:shadow-lg hover:shadow-sky-100/50 transition-all duration-300 cursor-default"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-200">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{h.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{h.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function GlobeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 5 15.5 5 9a7 7 0 1114 0c0 6.5-7 12-7 12z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h3l3 3v4h-6m0-7v7M9 17h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}
