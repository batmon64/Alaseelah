import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const steps = [
  {
    number: '01',
    title: 'Sourcing',
    desc: 'Direct procurement from certified farms in India, Pakistan, Turkey, and the UAE ensuring premium quality at origin.',
    icon: <SourcingIcon />,
    color: 'from-blue-600 to-blue-500',
    ring: 'ring-blue-200',
  },
  {
    number: '02',
    title: 'Packaging',
    desc: 'Carefully packed in hygienic, food-safe trays and cartons that protect eggs during handling and transport.',
    icon: <PackagingIcon />,
    color: 'from-sky-600 to-sky-500',
    ring: 'ring-sky-200',
  },
  {
    number: '03',
    title: 'Quality Check',
    desc: 'Rigorous inspection at every stage — candling, weight grading, and safety verification before dispatch.',
    icon: <QualityIcon />,
    color: 'from-indigo-600 to-blue-600',
    ring: 'ring-indigo-200',
  },
  {
    number: '04',
    title: 'Delivery',
    desc: 'Swift, refrigerated delivery to your doorstep across all UAE Emirates — always on time, always fresh.',
    icon: <DeliveryIcon />,
    color: 'from-cyan-600 to-sky-600',
    ring: 'ring-cyan-200',
  },
]

export default function ProcessSection() {
  const [ref, inView] = useInView(0.1)

  return (
    <section
      id="process"
      className="section-padding relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
      ref={ref}
    >
      {/* BG decoration */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #38BDF8 0%, transparent 60%)' }} aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-400 bg-sky-400/10 rounded-full uppercase mb-4 border border-sky-400/20">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            From Farm to{' '}
            <span className="text-gradient">Your Doorstep</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A seamless, transparent supply chain ensures every egg reaches you fresh,
            safe, and ready to use.
          </p>
        </motion.div>

        {/* Pipeline */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600/0 via-sky-400/50 to-blue-600/0 mx-32" aria-hidden="true" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ duration: 0.25 }}
                  className={`relative w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white shadow-2xl ring-4 ${step.ring} ring-offset-2 ring-offset-slate-900 mb-6 cursor-default`}
                >
                  {step.icon}
                  {/* Step number */}
                  <span className="absolute -top-2 -right-2 w-6 h-6 bg-white text-slate-900 text-xs font-bold rounded-full flex items-center justify-center shadow-lg">
                    {i + 1}
                  </span>
                </motion.div>

                {/* Arrow indicator for mobile */}
                {i < steps.length - 1 && (
                  <div className="lg:hidden w-px h-8 bg-sky-400/30 mb-2" aria-hidden="true" />
                )}

                <h3 className="text-white font-bold text-xl mb-3">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{step.desc}</p>

                {/* Progress dot */}
                <motion.div
                  className="mt-6 w-2 h-2 rounded-full bg-sky-400"
                  animate={inView ? { scale: [1, 1.5, 1] } : {}}
                  transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://wa.me/971569454672?text=Hello%2C%20I%27m%20interested%20in%20your%20egg%20supply%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-105 transition-all duration-200 cursor-pointer"
          >
            Start Your Order Today
            <ArrowIcon className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function SourcingIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function PackagingIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  )
}

function QualityIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  )
}

function DeliveryIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m0 0h3l3 3v4h-6m0-7v7M9 17h6m-6 0a2 2 0 11-4 0 2 2 0 014 0zm10 0a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

function ArrowIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}
