import { motion } from 'framer-motion'

const clientContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
}
const clientCard = {
  hidden: { opacity: 0, y: 60, scale: 0.88 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
}

const clients = [
  {
    title: 'Hypermarkets',
    desc: 'High-volume hypermarkets and wholesale clubs requiring large quantity sourcing.',
    icon: <HypermarketIcon />,
    color: 'from-indigo-600 to-indigo-500',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    count: 'Hyper Centers',
  },
  {
    title: 'Supermarkets',
    desc: 'Large supermarket chains requiring consistent bulk supply with regular delivery schedules.',
    icon: <SupermarketIcon />,
    color: 'from-blue-600 to-blue-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    count: 'Major Chains',
  },
  {
    title: 'Restaurants',
    desc: 'Hotels, restaurants, and cafeterias needing reliable daily delivery of fresh eggs.',
    icon: <RestaurantIcon />,
    color: 'from-cyan-600 to-sky-600',
    bg: 'bg-cyan-50',
    border: 'border-cyan-100',
    count: 'F&B Businesses',
  },
  {
    title: 'Grocery Stores',
    desc: 'Neighborhood grocery and convenience stores needing fresh, affordable egg supply.',
    icon: <GroceryIcon />,
    color: 'from-sky-600 to-sky-500',
    bg: 'bg-sky-50',
    border: 'border-sky-100',
    count: 'Retail Outlets',
  },
]

export default function ClientsSection() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 rounded-full uppercase mb-4 border border-sky-100">
            Who We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by{' '}
            <span className="text-gradient">Businesses</span>{' '}
            Across UAE
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From small grocery stores to large hypermarket chains, we serve
            every type of food business with dedicated supply solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={clientContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {clients.map((c) => (
            <motion.div
              key={c.title}
              variants={clientCard}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className={`group ${c.bg} border ${c.border} rounded-3xl p-6 hover:shadow-xl transition-shadow duration-300 cursor-default`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${c.color} rounded-2xl flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-110 transition-transform duration-200`}>
                {c.icon}
              </div>
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">{c.count}</span>
              <h3 className="text-slate-900 font-bold text-xl mt-1 mb-3">{c.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{c.desc}</p>

              <div className="mt-5 flex items-center gap-1.5">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className={`h-1 rounded-full bg-gradient-to-r ${c.color} ${j === 0 ? 'w-8' : j < 3 ? 'w-5' : 'w-3'}`} aria-hidden="true" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust belt */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-br from-slate-900 to-blue-950 rounded-3xl grid sm:grid-cols-3 gap-6 text-center"
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {[
            { value: 'All 7', label: 'UAE Emirates Covered' },
            { value: '24/7', label: 'Order Support' },
            { value: '100%', label: 'Delivery Reliability' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-slate-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SupermarketIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function GroceryIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  )
}

function HypermarketIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  )
}

function RestaurantIcon() {
  return (
    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 2l1.5 15h15L21 2M3 2l2 8h14l2-8M7 15v5m10-5v5" />
    </svg>
  )
}
