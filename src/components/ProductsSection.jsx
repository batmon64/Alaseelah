import { motion } from 'framer-motion'

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 60, scale: 0.88 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const products = [
  {
    title: 'Imported Eggs',
    subtitle: 'India • Pakistan • Turkey • Saudi Arabia',
    desc: 'Premium quality eggs sourced directly from certified farms in India, Pakistan, Turkey, and Saudi Arabia. Available in all sizes and grades.',
    image: '/Images/Products/This_is_one_of_my_202605051429.jpeg',
    glow: 'shadow-blue-500/20',
    border: 'border-blue-100',
    badge: 'International',
    badgeColor: 'bg-blue-50 text-blue-600',
    icon: <ImportIcon />,
    features: ['Grade A & AA', 'All sizes available', 'Certified farms', 'Bulk pricing'],
  },
  {
    title: 'Fresh UAE Eggs',
    subtitle: 'Locally Sourced',
    desc: "Farm-fresh eggs from UAE's certified local farms, delivered daily to ensure maximum freshness and nutritional value.",
    image: '/Images/Products/Create_an_8k_rendered_version_202605051446.jpeg',
    glow: 'shadow-sky-500/20',
    border: 'border-sky-100',
    badge: 'Local Fresh',
    badgeColor: 'bg-sky-50 text-sky-600',
    icon: <FarmIcon />,
    features: ['Daily fresh supply', 'UAE certified farms', 'Minimum handling', 'Farm-to-door'],
  },
  {
    title: 'Hygienic Packaging',
    subtitle: 'Safe & Secure',
    desc: 'All eggs are carefully packed in hygienic, food-safe packaging that preserves freshness and prevents breakage during transit.',
    image: '/Images/Products/Create_an_8k_rendered_version_202605051435.jpeg',
    glow: 'shadow-indigo-500/20',
    border: 'border-indigo-100',
    badge: 'Food Safe',
    badgeColor: 'bg-indigo-50 text-indigo-600',
    icon: <PackageIcon />,
    features: ['Food-grade materials', 'Breakage protected', 'Labeled & dated', 'HACCP compliant'],
  },
  {
    title: 'Bulk Orders',
    subtitle: 'Wholesale Supply',
    desc: 'Flexible bulk order solutions for supermarkets, hypermarkets, restaurants, and large-scale food businesses across UAE.',
    image: '/Images/Products/Create_an_8k_rendered_version_202605051440.jpeg',
    glow: 'shadow-slate-500/20',
    border: 'border-slate-100',
    badge: 'Wholesale',
    badgeColor: 'bg-slate-50 text-slate-700',
    icon: <BulkIcon />,
    features: ['Custom quantities', 'Volume discounts', 'Regular schedules', 'Credit terms'],
  },
]

const specialtyProducts = [
  {
    title: 'Brown Eggs',
    subtitle: 'Al Ladhidh · UAE Produced · 30 Large',
    image: '/Images/Products/Create_an_8k_rendered_version_202605051448.jpeg',
  },
  {
    title: 'Duck Eggs',
    subtitle: 'Al Ladhidh · UAE Produced · 6 Pack',
    image: '/Images/Products/Create_an_8k_rendered_version_202605051451.jpeg',
  },
  {
    title: 'Quail Eggs',
    subtitle: 'Al Ladhidh · UAE Produced',
    image: '/Images/Products/Create_an_8k_rendered_version_202605051454.jpeg',
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-sky-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 rounded-full uppercase mb-4 border border-sky-100">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Everything You Need in{' '}
            <span className="text-gradient">One Supplier</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From international imports to fresh local eggs — we provide comprehensive
            egg supply solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Showcase image — products in stores */}
        <motion.div
          className="mb-12 relative rounded-3xl overflow-hidden shadow-xl shadow-slate-300/60 cursor-default"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/Images/Whisk_e0d4f5aaf30bde39df040b34a841ba54dr.jpeg"
            alt="Rows of white and brown egg cartons neatly arranged on supermarket shelves across UAE"
            className="w-full h-56 md:h-72 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/40 to-transparent" />
          <div className="absolute left-7 md:left-10 top-1/2 -translate-y-1/2">
            <p className="text-sky-300 text-xs font-semibold tracking-widest uppercase mb-2">Available In</p>
            <p className="text-white text-2xl md:text-4xl font-bold leading-snug">
              Leading Supermarkets<br />Across UAE
            </p>
            <p className="text-white/65 text-sm mt-2 hidden md:block">White &amp; brown eggs · All grades · All sizes</p>
          </div>
        </motion.div>

        {/* Main product cards */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {products.map((p) => (
            <motion.div
              key={p.title}
              variants={cardItem}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className={`group bg-white border ${p.border} rounded-3xl overflow-hidden shadow-lg ${p.glow} hover:shadow-xl transition-shadow duration-300 cursor-default`}
            >
              {/* Card image header */}
              <div className="relative h-44 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <div className="w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white">
                    {p.icon}
                  </div>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2.5 py-1 text-xs font-semibold rounded-full ${p.badgeColor}`}>
                    {p.badge}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow">{p.title}</h3>
                  <p className="text-white/70 text-xs mt-0.5">{p.subtitle}</p>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5">
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <ul className="space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                      <CheckIcon className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Specialty eggs */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-center text-xs font-semibold tracking-widest text-slate-400 uppercase mb-6">
            Also Available
          </p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5"
            variants={cardContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
          >
            {specialtyProducts.map((sp) => (
              <motion.div
                key={sp.title}
                variants={cardItem}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="relative rounded-2xl overflow-hidden shadow-md cursor-default group h-44"
              >
                <img
                  src={sp.image}
                  alt={sp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/75 via-slate-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <h3 className="text-white font-bold text-base drop-shadow">{sp.title}</h3>
                  <p className="text-white/65 text-xs mt-0.5">{sp.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function CheckIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function ImportIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function FarmIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}

function PackageIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function BulkIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      <line x1="12" y1="12" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  )
}
