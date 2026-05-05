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
    bg: 'bg-white/15',
    border: 'border-white/25 hover:border-white/50',
  },
  {
    title: 'Cold-Chain Preserved',
    desc: 'Every batch undergoes rigorous quality inspection and stays within a temperature-controlled environment from source to UAE.',
    animation: <QualityAnim />,
    bg: 'bg-white/15',
    border: 'border-white/25 hover:border-white/50',
  },
  {
    title: 'Safe & Swift Delivery',
    desc: 'Refrigerated vehicles carry your order across all seven UAE Emirates — always on time, always intact.',
    animation: <DeliveryAnim />,
    bg: 'bg-white/15',
    border: 'border-white/25 hover:border-white/50',
  },
]

export default function QualityShowcaseSection() {
  return (
    <section className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #E11D48 0%, #F97316 60%, #EAB308 100%)' }}
    >
      {/* BG atmosphere */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fff 0%, transparent 60%)' }}
        aria-hidden="true"
      />
      <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/3 translate-y-1/3 blur-3xl" aria-hidden="true" />
      {/* Dot grid */}
      <div className="absolute inset-0 opacity-10"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '36px 36px' }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-white bg-white/20 rounded-full uppercase mb-4 border border-white/30">
            Quality Promise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 font-outfit">
            Farm to Table,{' '}
            <span className="text-yellow-200">Without Compromise</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
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
              className={`relative ${card.bg} backdrop-blur-sm border ${card.border} rounded-3xl p-8 transition-all duration-300 group overflow-hidden`}
            >
              <div className="relative z-10">
                <div className="w-52 h-52 mx-auto mb-8">
                  {card.animation}
                </div>
                <h3 className="text-xl font-black text-white mb-3 font-outfit">{card.title}</h3>
                <p className="text-white/80 text-sm leading-relaxed">{card.desc}</p>
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
        <radialGradient id="globeGrad2" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="48" fill="url(#globeGrad2)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
      <ellipse cx="60" cy="60" rx="32" ry="48" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <ellipse cx="60" cy="60" rx="48" ry="18" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="12" y1="60" x2="108" y2="60" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />
      <line x1="60" y1="12" x2="60" y2="108" stroke="rgba(255,255,255,0.15)" strokeWidth="0.8" />

      <motion.circle cx="66" cy="58" r="5" fill="#FCD34D"
        animate={{ r: [5, 7, 5], opacity: [1, 0.6, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle cx="66" cy="58" r="9" fill="none" stroke="#FCD34D" strokeWidth="1"
        animate={{ r: [9, 18], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeOut' }}
      />

      {sources.map((src) => (
        <g key={src.label}>
          <motion.path
            d={`M ${src.cx} ${src.cy} Q ${(src.cx + 66) / 2} ${Math.min(src.cy, 58) - 10} 66 58`}
            fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1.2" strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 0.8, 0.8, 0] }}
            transition={{ duration: 2.2, delay: src.delay, repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }}
          />
          <motion.circle cx={src.cx} cy={src.cy} r="4" fill="#FCA5A5" stroke="rgba(255,255,255,0.5)" strokeWidth="1"
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
        <radialGradient id="eggGrad2" cx="38%" cy="30%" r="60%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
          <stop offset="60%" stopColor="rgba(255,200,100,0.5)" />
          <stop offset="100%" stopColor="rgba(255,150,50,0.2)" />
        </radialGradient>
      </defs>

      {[0, 0.7, 1.4].map((delay, i) => (
        <motion.ellipse key={i} cx="60" cy="66" rx="26" ry="33" fill="none"
          stroke="rgba(255,255,255,0.4)" strokeWidth="1"
          animate={{ rx: [26, 50], ry: [33, 62], opacity: [0.5, 0] }}
          transition={{ duration: 2.8, delay, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      <ellipse cx="60" cy="66" rx="26" ry="33" fill="url(#eggGrad2)" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
      <ellipse cx="52" cy="50" rx="8" ry="6" fill="rgba(255,255,255,0.3)" />

      <motion.path
        d="M42,42 L78,42 L78,72 Q60,88 42,72 Z"
        fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.8)" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 1, 0], opacity: [0, 1, 1, 1, 0] }}
        transition={{ duration: 4, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.35, 0.55, 0.85, 1] }}
      />
      <motion.path d="M50,64 L58,73 L74,50" fill="none"
        stroke="#FCD34D" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 4, delay: 1.2, repeat: Infinity, repeatDelay: 0.5, times: [0, 0.3, 0.7, 1] }}
      />

      <motion.g animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        style={{ originX: '90px', originY: '28px' }}
      >
        <line x1="90" y1="20" x2="90" y2="36" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="82" y1="28" x2="98" y2="28" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="84" y1="22" x2="96" y2="34" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="84" y1="34" x2="96" y2="22" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </motion.g>
    </svg>
  )
}

/* ── Animation 3: Safe Delivery ──────────────────────────────── */
function DeliveryAnim() {
  return (
    <svg viewBox="0 0 120 120" className="w-full h-full overflow-hidden" aria-hidden="true">
      <rect x="5" y="82" width="110" height="10" rx="3" fill="rgba(255,255,255,0.2)" />
      {[14, 32, 50, 68, 86].map((x) => (
        <rect key={x} x={x} y="86" width="12" height="2" rx="1" fill="rgba(255,255,255,0.4)" />
      ))}
      <line x1="5" y1="82" x2="115" y2="82" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
      <line x1="5" y1="92" x2="115" y2="92" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />

      <motion.circle cx="104" cy="76" r="5" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5"
        animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />
      <motion.circle cx="104" cy="76" r="10" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.8"
        animate={{ r: [10, 18], opacity: [0.4, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      />

      {[64, 70, 76].map((y, i) => (
        <motion.line key={i} x1="5" y1={y} x2="22" y2={y}
          stroke="rgba(255,255,255,0.6)" strokeWidth="1" strokeLinecap="round"
          animate={{ x: [0, -18], opacity: [0.45, 0] }}
          transition={{ duration: 1.6, delay: i * 0.12, repeat: Infinity, ease: 'easeOut' }}
        />
      ))}

      <motion.g
        animate={{ x: [-58, 62] }}
        transition={{ duration: 3.2, repeat: Infinity, ease: [0.4, 0, 0.6, 1], repeatDelay: 0.4 }}
      >
        <rect x="2" y="60" width="34" height="22" rx="3" fill="rgba(120,60,200,0.7)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <rect x="31" y="55" width="17" height="27" rx="3" fill="rgba(180,60,100,0.8)" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
        <rect x="34" y="58" width="11" height="9" rx="2" fill="rgba(255,255,255,0.85)" />
        <rect x="46" y="53" width="3" height="5" rx="1" fill="rgba(200,50,50,0.7)" />
        <rect x="9" y="65" width="14" height="12" rx="1" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.8" />
        <line x1="16" y1="65" x2="16" y2="77" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <line x1="9" y1="71" x2="23" y2="71" stroke="rgba(255,255,255,0.25)" strokeWidth="0.8" />
        <circle cx="13" cy="82" r="5.5" fill="rgba(30,30,30,0.9)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="37" cy="82" r="5.5" fill="rgba(30,30,30,0.9)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <circle cx="13" cy="82" r="2" fill="rgba(200,100,50,0.8)" />
        <circle cx="37" cy="82" r="2" fill="rgba(200,100,50,0.8)" />
        <motion.circle cx="49" cy="51" r="2" fill="rgba(255,255,255,0.3)"
          animate={{ cy: [51, 44], r: [2, 4], opacity: [0.4, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        <motion.circle cx="50" cy="50" r="1.5" fill="rgba(255,255,255,0.2)"
          animate={{ cy: [50, 42], r: [1.5, 3.5], opacity: [0.3, 0] }}
          transition={{ duration: 1, delay: 0.3, repeat: Infinity }}
        />
      </motion.g>
    </svg>
  )
}
