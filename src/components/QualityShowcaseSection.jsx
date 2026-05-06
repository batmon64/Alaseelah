import { motion } from 'framer-motion'

const cardContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.22, delayChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] } },
}

const cards = [
  {
    title: 'Global Sourcing',
    desc: 'Certified farms in India, Pakistan, Turkey, and Saudi Arabia deliver premium-grade eggs directly into our UAE supply chain.',
    animation: <GlobalSourcingAnim />,
    accent: 'border-blue-500/30 hover:border-blue-400/60',
    glow: 'bg-blue-500/5',
  },
  {
    title: 'Cold-Chain Preserved',
    desc: 'Every batch undergoes rigorous quality inspection and stays within a temperature-controlled environment from source to UAE.',
    animation: <QualityAnim />,
    accent: 'border-sky-500/30 hover:border-sky-400/60',
    glow: 'bg-sky-500/5',
  },
  {
    title: 'Safe & Swift Delivery',
    desc: 'Refrigerated vehicles carry your order across all seven UAE Emirates — always on time, always intact.',
    animation: <DeliveryAnim />,
    accent: 'border-cyan-500/30 hover:border-cyan-400/60',
    glow: 'bg-cyan-500/5',
  },
]

export default function QualityShowcaseSection() {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* BG atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-400/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-400 bg-sky-400/10 rounded-full uppercase mb-4 border border-sky-400/20">
            Quality Promise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Farm to Table,{' '}
            <span className="text-gradient">Without Compromise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Every egg travels a carefully controlled journey — sourced globally,
            preserved perfectly, and delivered safely to your door.
          </p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-3 gap-8"
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardItem}
              className={`relative bg-slate-900/70 border ${card.accent} rounded-3xl p-8 backdrop-blur-sm transition-all duration-300 group overflow-hidden`}
            >
              <div className={`absolute inset-0 ${card.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} aria-hidden="true" />
              <div className="relative z-10">
                <div className="w-52 h-52 mx-auto mb-8">
                  {card.animation}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

/* ── Animation 1: Global Sourcing ────────────────────────────── */
function GlobalSourcingAnim() {
  const sources = [
    { cx: 88, cy: 50, delay: 0, label: 'India' },
    { cx: 78, cy: 32, delay: 0.6, label: 'Pakistan' },
    { cx: 38, cy: 28, delay: 1.2, label: 'Turkey' },
    { cx: 72, cy: 48, delay: 1.8, label: 'Saudi Arabia' },
  ]
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="globeGrad" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(56,189,248,0.15)" />
          <stop offset="100%" stopColor="rgba(14,165,233,0.05)" />
        </radialGradient>
      </defs>

      {/* Globe body */}
      <circle cx="60" cy="60" r="48" fill="url(#globeGrad)" stroke="rgba(56,189,248,0.25)" strokeWidth="1" />

      {/* Latitude / longitude lines */}
      <ellipse cx="60" cy="60" rx="32" ry="48" fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />
      <ellipse cx="60" cy="60" rx="48" ry="18" fill="none" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />
      <line x1="60" y1="12" x2="60" y2="108" stroke="rgba(56,189,248,0.12)" strokeWidth="0.8" />

      {/* UAE destination dot — pulsing */}
      <motion.circle cx="66" cy="58" r="5" fill="#38BDF8"
        animate={{ r: [5, 7, 5], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle cx="66" cy="58" r="9" fill="none" stroke="#38BDF8" strokeWidth="1"
        animate={{ r: [9, 18], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />

      {/* Source country dots + flowing lines */}
      {sources.map((src) => (
        <g key={src.label}>
          <motion.path
            d={`M ${src.cx} ${src.cy} Q ${(src.cx + 66) / 2} ${Math.min(src.cy, 58) - 10} 66 58`}
            fill="none"
            stroke="#38BDF8"
            strokeWidth="1.2"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: 2.2, delay: src.delay, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
          />
          <motion.circle
            cx={src.cx} cy={src.cy} r="4"
            fill="#0EA5E9"
            stroke="rgba(56,189,248,0.5)"
            strokeWidth="1"
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 1.8, delay: src.delay, repeat: Infinity }}
          />
        </g>
      ))}
    </svg>
  )
}

/* ── Animation 2: Cold-Chain / Quality ───────────────────────── */
function QualityAnim() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full" aria-hidden="true">
      <defs>
        <radialGradient id="eggGrad" cx="38%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(186,230,253,0.9)" />
          <stop offset="60%" stopColor="rgba(56,189,248,0.35)" />
          <stop offset="100%" stopColor="rgba(3,105,161,0.15)" />
        </radialGradient>
      </defs>

      {/* Freshness rings expanding outward */}
      {[0, 0.7, 1.4].map((delay, i) => (
        <motion.ellipse
          key={i}
          cx="60" cy="66"
          rx="26" ry="33"
          fill="none"
          stroke="rgba(56,189,248,0.45)"
          strokeWidth="1"
          animate={{ rx: [26, 50], ry: [33, 62], opacity: [0.5, 0] }}
          transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* Egg body */}
      <ellipse cx="60" cy="66" rx="26" ry="33"
        fill="url(#eggGrad)"
        stroke="rgba(186,230,253,0.5)"
        strokeWidth="1.5"
      />
      {/* Egg highlight */}
      <ellipse cx="52" cy="50" rx="8" ry="6" fill="rgba(255,255,255,0.22)" />

      {/* Shield outline — draws in, then checkmark, then resets */}
      <motion.path
        d="M42,42 L78,42 L78,72 Q60,88 42,72 Z"
        fill="rgba(56,189,248,0.08)"
        stroke="#38BDF8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.35, 0.55, 0.85, 1] }}
      />

      {/* Checkmark — appears after shield */}
      <motion.path
        d="M50,64 L58,73 L74,50"
        fill="none"
        stroke="#34D399"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, delay: 1.2, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.3, 0.7, 1] }}
      />

      {/* Snowflake / cold indicator — top right */}
      <motion.g
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '90px', originY: '28px' }}
      >
        <line x1="90" y1="20" x2="90" y2="36" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="82" y1="28" x2="98" y2="28" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="84" y1="22" x2="96" y2="34" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
        <line x1="84" y1="34" x2="96" y2="22" stroke="#7DD3FC" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      </motion.g>
    </svg>
  )
}

/* ── Animation 3: Safe Delivery ──────────────────────────────── */
function DeliveryAnim() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full overflow-hidden" aria-hidden="true">
      {/* Road */}
      <rect x="5" y="82" width="110" height="10" rx="3" fill="rgba(30,58,138,0.6)" />
      {/* Road dashes */}
      {[14, 32, 50, 68, 86].map((x) => (
        <rect key={x} x={x} y="86" width="12" height="2" rx="1" fill="rgba(56,189,248,0.35)" />
      ))}
      {/* Road edge lines */}
      <line x1="5" y1="82" x2="115" y2="82" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8" />
      <line x1="5" y1="92" x2="115" y2="92" stroke="rgba(56,189,248,0.25)" strokeWidth="0.8" />

      {/* Destination star / UAE marker */}
      <motion.circle cx="104" cy="76" r="5" fill="rgba(56,189,248,0.2)" stroke="#38BDF8" strokeWidth="1.5"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.circle cx="104" cy="76" r="10" fill="none" stroke="#38BDF8" strokeWidth="0.8"
        animate={{ r: [10, 18], opacity: [0.4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />

      {/* Speed lines (behind truck) */}
      {[64, 70, 76].map((y, i) => (
        <motion.line
          key={i}
          x1="5" y1={y} x2="22" y2={y}
          stroke="#38BDF8" strokeWidth="1" strokeLinecap="round"
          animate={{ x: [0, -18], opacity: [0.45, 0] }}
          transition={{ duration: 1.6, delay: i * 0.12, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      {/* Truck — glides from left to right */}
      <motion.g
        animate={{ x: [-58, 62] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatDelay: 0.4 }}
      >
        {/* Cargo body */}
        <rect x="2" y="60" width="34" height="22" rx="3" fill="#1E3A8A" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        {/* Cabin */}
        <rect x="31" y="55" width="17" height="27" rx="3" fill="#2563EB" stroke="rgba(56,189,248,0.5)" strokeWidth="1" />
        {/* Windshield */}
        <rect x="34" y="58" width="11" height="9" rx="2" fill="#7DD3FC" opacity="0.85" />
        {/* Exhaust pipe */}
        <rect x="46" y="53" width="3" height="5" rx="1" fill="#1E40AF" />
        {/* Package icon on cargo */}
        <rect x="9" y="65" width="14" height="12" rx="1" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <line x1="16" y1="65" x2="16" y2="77" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        <line x1="9" y1="71" x2="23" y2="71" stroke="rgba(255,255,255,0.2)" strokeWidth="0.8" />
        {/* Wheels */}
        <circle cx="13" cy="82" r="5.5" fill="#0F172A" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="37" cy="82" r="5.5" fill="#0F172A" stroke="#60A5FA" strokeWidth="1.5" />
        <circle cx="13" cy="82" r="2" fill="#1E40AF" />
        <circle cx="37" cy="82" r="2" fill="#1E40AF" />
        {/* Exhaust smoke */}
        <motion.circle cx="49" cy="51" r="2"
          fill="rgba(148,163,184,0.3)"
          animate={{ cy: [51, 44], r: [2, 4], opacity: [0.4, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle cx="50" cy="50" r="1.5"
          fill="rgba(148,163,184,0.2)"
          animate={{ cy: [50, 42], r: [1.5, 3.5], opacity: [0.3, 0] }}
          transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
        />
      </motion.g>
    </svg>
  )
}
