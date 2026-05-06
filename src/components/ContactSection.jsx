import { useState } from 'react'
import { motion } from 'framer-motion'

const GOOGLE_SHEET_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'

const contactInfo = [
  {
    icon: <PhoneIcon />,
    label: 'Phone / WhatsApp',
    lines: ['+971 56 945 4672', '+971 52 358 1805'],
    href: 'tel:+971569454672',
  },
  {
    icon: <MailIcon />,
    label: 'Email',
    lines: ['info@alaseelah.com'],
    href: 'mailto:info@alaseelah.com',
  },
  {
    icon: <LocationIcon />,
    label: 'Address',
    lines: ['Al Muqta, Umm Al Quwain', 'United Arab Emirates'],
    href: 'https://www.google.com/maps?q=Al+ASEELAH+FOODSTUFF+TRADING+LLC&ftid=0x3ef5f9246c6e674b:0x2049f98f7aa246ee',
  },
  {
    icon: <GlobeIcon />,
    label: 'Website',
    lines: ['www.alaseelah.com'],
    href: 'https://www.alaseelah.com',
  },
]

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', phone: '', business: '', requirement: '', message: '' })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(GOOGLE_SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      })
      setStatus('success')
      setForm({ name: '', phone: '', business: '', requirement: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section-padding bg-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-sky-600 bg-sky-50 rounded-full uppercase mb-4 border border-sky-100">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Start Your Partnership{' '}
            <span className="text-gradient">Today</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to secure a reliable egg supply for your business? Reach out to us
            and get a competitive quote within hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info + map */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((c) => (
                <div
                  key={c.label}
                  className="bg-white border border-sky-200 rounded-2xl p-5 hover:border-sky-400 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-sky-500 rounded-xl flex items-center justify-center text-white mb-3">
                    {c.icon}
                  </div>
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wide mb-1">{c.label}</p>
                  {c.lines.map((line) =>
                    c.href ? (
                      <a
                        key={line}
                        href={c.href}
                        target={c.href.startsWith('http') && !c.href.startsWith('mailto') && !c.href.startsWith('tel') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') && !c.href.startsWith('mailto') && !c.href.startsWith('tel') ? 'noopener noreferrer' : undefined}
                        className="block text-slate-900 font-semibold text-sm hover:text-sky-600 transition-colors duration-150 cursor-pointer"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="text-slate-900 font-semibold text-sm">{line}</p>
                    )
                  )}
                </div>
              ))}
            </div>

            {/* WhatsApp quick-contact */}
            <a
              href="https://wa.me/971569454672?text=Hello%2C%20I%27m%20interested%20in%20your%20egg%20supply%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-green-500/30 transition-all duration-200 cursor-pointer"
            >
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <WhatsAppIcon className="w-7 h-7" />
              </div>
              <div>
                <p className="font-bold text-lg">Chat on WhatsApp</p>
                <p className="text-green-100 text-sm">+971 56 945 4672 — Fastest response</p>
              </div>
              <ArrowIcon className="w-5 h-5 ml-auto flex-shrink-0" />
            </a>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-sky-100 shadow-md h-56">
              <iframe
                src="https://www.google.com/maps?q=Al+ASEELAH+FOODSTUFF+TRADING+LLC&ftid=0x3ef5f9246c6e674b:0x2049f98f7aa246ee&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Al Aseelah Foodstuff Trading LLC location map — Al Muqta, Umm Al Quwain"
              />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.15 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-sky-200 rounded-3xl p-8 shadow-xl shadow-sky-200/60">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Request a Quote</h3>
              <p className="text-slate-500 text-sm mb-8">Fill in the form and we'll get back to you within hours.</p>

              {status === 'success' ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                  <p className="text-slate-600 text-sm mb-6">Thank you for reaching out. We'll contact you shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200"
                  >
                    Send Another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-sky-50/80 border border-sky-100 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-150"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+971 XX XXX XXXX"
                        className="w-full px-4 py-3 bg-sky-50/80 border border-sky-100 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-150"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="business" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Business Name
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Your company or shop name"
                      className="w-full px-4 py-3 bg-sky-50/80 border border-sky-100 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-150"
                    />
                  </div>

                  <div>
                    <label htmlFor="requirement" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Requirement Type
                    </label>
                    <select
                      id="requirement"
                      name="requirement"
                      value={form.requirement}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-sky-50/80 border border-sky-100 rounded-xl text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-150 cursor-pointer appearance-none"
                    >
                      <option value="">Select requirement</option>
                      <option value="imported-eggs">Imported Eggs (India/Pakistan/Turkey/Saudi Arabia)</option>
                      <option value="uae-fresh-eggs">Fresh UAE Eggs</option>
                      <option value="bulk-wholesale">Bulk / Wholesale Order</option>
                      <option value="regular-supply">Regular Supply Contract</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your quantity needs, delivery location, etc."
                      className="w-full px-4 py-3 bg-sky-50/80 border border-sky-100 rounded-xl text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-transparent transition-all duration-150 resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-500 text-sm bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                      Something went wrong. Please try WhatsApp or email us directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200 cursor-pointer text-lg"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Enquiry'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function GlobeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
