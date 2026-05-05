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
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-8"
      style={{ background: 'linear-gradient(135deg, #EA580C 0%, #E11D48 40%, #7C3AED 100%)' }}
    >
      {/* Geometric background shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-400/20 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" aria-hidden="true" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />

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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" aria-hidden="true" />
          <span className="text-white text-sm font-semibold tracking-wide">UAE's Trusted Egg Supplier</span>
        </motion.div>

        {/* Company Name */}
        <motion.div variants={heroItem} className="mb-6">
          <div className="inline-block px-7 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-2xl">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none mb-1 font-outfit text-white drop-shadow-lg">
              Al Aseelah
            </h2>
            <p className="text-base sm:text-lg md:text-xl font-semibold tracking-[0.25em] text-white/70 uppercase mt-2">
              Foodstuff Trading LLC
            </p>
          </div>
          <div className="mt-4 mx-auto flex items-center justify-center gap-3">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-300" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-white/40" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={heroItem}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 font-outfit"
        >
          Premium Egg Supply<br />
          <span className="text-yellow-300">&amp; Distribution</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white/80">
            Across All UAE Emirates
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          variants={heroItem}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
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
            className="group flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-400 text-white font-bold rounded-2xl shadow-2xl shadow-green-900/40 hover:shadow-green-900/60 hover:scale-105 transition-all duration-200 cursor-pointer text-lg"
          >
            <WhatsAppIcon className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
            Contact on WhatsApp
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="flex items-center gap-3 px-8 py-4 bg-white text-orange-600 font-bold rounded-2xl shadow-2xl shadow-black/20 hover:bg-orange-50 hover:scale-105 transition-all duration-200 cursor-pointer text-lg"
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
            { value: '7+', label: 'Emirates Served', color: 'bg-orange-500' },
            { value: '4', label: 'Import Countries', color: 'bg-rose-500' },
            { value: '100%', label: 'Quality Assured', color: 'bg-violet-500' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
              <p className="text-2xl font-black text-white font-outfit">{stat.value}</p>
              <p className="text-xs text-white/60 mt-1">{stat.label}</p>
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
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-6 text-white/50"
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
    { size: 80, top: '15%', left: '8%', delay: 0, rotate: -15, color1: '#FCD34D', color2: '#F97316' },
    { size: 60, top: '25%', right: '10%', delay: 1.5, rotate: 20, color1: '#FDA4AF', color2: '#E11D48' },
    { size: 100, bottom: '20%', left: '6%', delay: 3, rotate: 10, color1: '#C4B5FD', color2: '#7C3AED' },
    { size: 50, top: '60%', right: '8%', delay: 2, rotate: -25, color1: '#6EE7B7', color2: '#10B981' },
    { size: 70, top: '40%', left: '15%', delay: 0.8, rotate: 5, color1: '#FED7AA', color2: '#F97316' },
    { size: 45, bottom: '30%', right: '15%', delay: 2.5, rotate: -10, color1: '#FCA5A5', color2: '#EF4444' },
  ]

  return (
    <>
      {eggs.map((egg, i) => (
        <motion.div
          key={i}
          className="absolute pointer-events-none"
          style={{ top: egg.top, left: egg.left, right: egg.right, bottom: egg.bottom }}
          animate={{
            y: [0, -18, 0],
            rotate: [egg.rotate, egg.rotate + 8, egg.rotate],
            opacity: [0.5, 0.85, 0.5],
          }}
          transition={{ duration: 5 + i * 0.5, delay: egg.delay, repeat: Infinity, ease: 'easeInOut' }}
          aria-hidden="true"
        >
          <svg width={egg.size} height={egg.size * 1.25} viewBox="0 0 80 100" fill="none">
            <defs>
              <radialGradient id={`eg${i}`} cx="40%" cy="35%" r="55%">
                <stop offset="0%" stopColor={egg.color1} stopOpacity="0.9" />
                <stop offset="70%" stopColor={egg.color2} stopOpacity="0.5" />
                <stop offset="100%" stopColor={egg.color2} stopOpacity="0.2" />
              </radialGradient>
            </defs>
            <ellipse cx="40" cy="55" rx="35" ry="43" fill={`url(#eg${i})`} stroke={egg.color1} strokeWidth="1" strokeOpacity="0.5" />
            <ellipse cx="30" cy="35" rx="10" ry="8" fill="rgba(255,255,255,0.3)" />
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
