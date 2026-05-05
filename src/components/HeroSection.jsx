import { motion } from 'framer-motion'

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
}
const heroItem = {
  hidden: { opacity: 0, y: 60, scale: 0.92 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
}

export default function HeroSection() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-sky-900 pt-20 pb-8">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(56,189,248,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Floating Egg Shapes */}
      <FloatingEggs />

      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 text-center"
        variants={heroContainer}
        initial="hidden"
        animate="show"
      >
        {/* Badge */}
        <motion.div
          variants={heroItem}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-sky-400/30 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
          <span className="text-sky-300 text-sm font-medium tracking-wide">UAE's Trusted Egg Supplier</span>
        </motion.div>

        {/* Company Name — prominently highlighted */}
        <motion.div variants={heroItem} className="mb-6">
          <div className="inline-block px-7 py-4 rounded-2xl ring-1 ring-amber-400/40 bg-amber-500/8 shadow-lg shadow-amber-500/10">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-none mb-1"
              style={{
                background: 'linear-gradient(135deg, #F59E0B, #FCD34D, #FBBF24)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Al Aseelah
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-white/65 uppercase mt-2">
              Foodstuff Trading LLC
            </p>
          </div>
          <div className="mt-4 mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-amber-400/50" />
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={heroItem}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
        >
          Premium Egg Supply<br />
          <span className="text-gradient">&amp; Distribution</span>
          <br />
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-sky-200">
            Across All UAE Emirates
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={heroItem}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Wholesale &amp; retail egg distribution from India, Pakistan, Turkey, Saudi Arabia, and
          fresh UAE farms — delivered to supermarkets, grocery stores, and businesses
          with uncompromising quality.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={heroItem}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/971569454672?text=Hello%2C%20I%27m%20interested%20in%20your%20egg%20supply%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold rounded-2xl shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-105 transition-all duration-200 cursor-pointer text-lg"
          >
            <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            Contact on WhatsApp
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="flex items-center gap-3 px-8 py-4 bg-blue-800 border border-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-900/50 hover:bg-blue-700 hover:scale-105 transition-all duration-200 cursor-pointer text-lg"
          >
            <QuoteIcon className="w-6 h-6" />
            Get a Quote
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          variants={heroItem}
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto"
        >
          {[
            { value: '7+', label: 'Emirates Served' },
            { value: '4', label: 'Import Countries' },
            { value: '100%', label: 'Quality Assured' },
          ].map((stat) => (
            <div key={stat.label} className="glass-dark rounded-2xl p-4 border border-white/10">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={() => handleNav('#about')}
        aria-label="Scroll down"
      >
        <span className="text-slate-400 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 text-slate-400"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}

function FloatingEggs() {
  const eggs = [
    { size: 80, top: '15%', left: '8%', delay: 0, rotate: -15 },
    { size: 60, top: '25%', right: '10%', delay: 1.5, rotate: 20 },
    { size: 100, bottom: '20%', left: '6%', delay: 3, rotate: 10 },
    { size: 50, top: '60%', right: '8%', delay: 2, rotate: -25 },
    { size: 70, top: '40%', left: '15%', delay: 0.8, rotate: 5 },
    { size: 45, bottom: '30%', right: '15%', delay: 2.5, rotate: -10 },
  ]

  return (
    <>
      {eggs.map((egg, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{
            top: egg.top,
            left: egg.left,
            right: egg.right,
            bottom: egg.bottom,
          }}
          animate={{
            y: [0, -18, 0],
            rotate: [egg.rotate, egg.rotate + 8, egg.rotate],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5 + i * 0.5,
            delay: egg.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          aria-hidden="true"
        >
          <svg
            width={egg.size}
            height={egg.size * 1.25}
            viewBox="0 0 80 100"
            fill="none"
          >
            <defs>
              <radialGradient id={`eg${i}`} cx="40%" cy="35%" r="55%">
                <stop offset="0%" stopColor="rgba(186,230,253,0.9)" />
                <stop offset="60%" stopColor="rgba(56,189,248,0.4)" />
                <stop offset="100%" stopColor="rgba(3,105,161,0.2)" />
              </radialGradient>
            </defs>
            <ellipse
              cx="40" cy="55" rx="35" ry="43"
              fill={`url(#eg${i})`}
              stroke="rgba(186,230,253,0.5)"
              strokeWidth="1"
            />
            <ellipse cx="30" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.25)" />
          </svg>
        </motion.div>
      ))}
    </>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

function QuoteIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  )
}
