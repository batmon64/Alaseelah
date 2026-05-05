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
    desc: 'Importing premium eggs from India, Pakistan, Turkey, and Saudi Arabia with strict quality standards.',
    iconBg: 'bg-orange-500',
    cardBg: 'bg-orange-50 border-orange-200',
  },
  {
    icon: <LeafIcon />,
    title: 'Fresh Local Eggs',
    desc: 'Supplying fresh UAE eggs directly from certified local farms to ensure freshness.',
    iconBg: 'bg-emerald-500',
    cardBg: 'bg-emerald-50 border-emerald-200',
  },
  {
    icon: <TruckIcon />,
    title: 'All UAE Delivery',
    desc: 'Reliable distribution network covering all seven Emirates with on-time delivery.',
    iconBg: 'bg-violet-600',
    cardBg: 'bg-violet-50 border-violet-200',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-violet-100 rounded-full -translate-x-1/2 translate-y-1/2 blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — branded truck image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-orange-200/60 ring-4 ring-orange-200/50">
              <img
                src="/Images/ChatGPT Image Apr 30, 2026, 11_06_20 AM.png"
                alt="Al Aseelah branded refrigerated delivery truck on Dubai highway at sunset with Burj Khalifa in background"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 via-orange-900/10 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-lg flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 flex-shrink-0 animate-pulse" aria-hidden="true" />
                  <div>
                    <p className="text-gray-900 font-bold text-sm">Active Delivery Fleet</p>
                    <p className="text-gray-500 text-xs mt-0.5">Refrigerated trucks serving all UAE Emirates</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat badge */}
            <div className="absolute -top-5 -right-5 bg-gradient-to-br from-orange-500 to-rose-500 text-white rounded-2xl px-5 py-3 shadow-xl shadow-orange-500/40">
              <p className="text-3xl font-black leading-none font-outfit">7+</p>
              <p className="text-xs text-orange-100 font-medium mt-1">Emirates Served</p>
            </div>
          </motion.div>

          {/* Right — text + highlight cards */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-orange-600 bg-orange-50 rounded-full uppercase mb-4 border border-orange-200">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight mb-6 font-outfit">
                UAE's Most Trusted{' '}
                <span className="text-gradient">Egg Trading</span>{' '}
                Company
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Al Aseelah Foodstuff Trading LLC is a professionally managed foodstuff
                trading company headquartered in{' '}
                <strong className="text-gray-900">Old Sanaya, Umm Al Quwain, UAE</strong>.
                We specialize in the wholesale and retail distribution of eggs — both
                imported and locally sourced — to businesses across the entire UAE.
              </p>
              <p className="text-gray-600 leading-relaxed mb-7">
                With a strong supply chain spanning{' '}
                <strong className="text-gray-900">India, Pakistan, Turkey, Saudi Arabia</strong>,
                and UAE's own certified farms, we deliver consistent quality, hygienic
                packaging, and competitive pricing to supermarkets, grocery stores,
                hypermarkets, restaurants, and more.
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Licensed UAE Trader', bg: 'bg-orange-100 text-orange-700 border-orange-200' },
                  { label: 'All Emirates Delivery', bg: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
                  { label: 'Bulk & Retail', bg: 'bg-violet-100 text-violet-700 border-violet-200' },
                ].map((tag) => (
                  <span key={tag.label} className={`px-4 py-2 ${tag.bg} border text-sm font-semibold rounded-xl`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Feature cards */}
            <motion.div
              className="flex flex-col gap-4"
              variants={cardContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.15 }}
            >
              {highlights.map((h) => (
                <motion.div
                  key={h.title}
                  variants={cardItem}
                  className={`group flex items-start gap-4 p-5 ${h.cardBg} border rounded-2xl hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className={`flex-shrink-0 w-11 h-11 ${h.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                    {h.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-0.5">{h.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{h.desc}</p>
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

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 5 15.5 5 9a7 7 0 1114 0c0 6.5-7 12-7 12z" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h3l3 3v4h-6m0-7v7M9 17h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}
