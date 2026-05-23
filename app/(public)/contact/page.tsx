'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const contactChannels = [
    { icon: '📱', label: 'WhatsApp', value: '+91 90535 38437', link: 'https://wa.me/919053538437' },
    { icon: '✉️', label: 'Email', value: 'vishu810singh@gmail.com', link: 'mailto:vishu810singh@gmail.com' },
    { icon: '📍', label: 'Office', value: 'Varanasi, Uttar Pradesh, India', link: '#' },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80" alt="Varanasi" className="h-full w-full object-cover brightness-[0.3]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-page)]/90 to-[var(--bg-page)]" />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            className="font-display text-6xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gold-shimmer">Contact Us</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Use the form below or reach us directly on WhatsApp or email.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {contactChannels.map((channel, i) => (
              <motion.a
                key={i}
                href={channel.link}
                className="glass-card p-6 text-center hover:bg-[rgba(248,230,209,0.45)] transition group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition">{channel.icon}</div>
                <h3 className="font-display text-lg font-bold mb-2">{channel.label}</h3>
                <p className="text-[#D97706] font-semibold">{channel.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="glass-card p-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Name</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg bg-[rgba(248,230,209,0.45)] border border-[rgba(201,163,125,0.4)] text-[var(--text-primary)] focus:border-[#D97706] outline-none transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Email</label>
                  <input type="email" className="w-full px-4 py-2 rounded-lg bg-[rgba(248,230,209,0.45)] border border-[rgba(201,163,125,0.4)] text-[var(--text-primary)] focus:border-[#D97706] outline-none transition" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Subject</label>
                  <input type="text" className="w-full px-4 py-2 rounded-lg bg-[rgba(248,230,209,0.45)] border border-[rgba(201,163,125,0.4)] text-[var(--text-primary)] focus:border-[#D97706] outline-none transition" placeholder="How can we help?" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-2 rounded-lg bg-[rgba(248,230,209,0.45)] border border-[rgba(201,163,125,0.4)] text-[var(--text-primary)] focus:border-[#D97706] outline-none transition" placeholder="Your message here..." />
                </div>
                <button type="submit" className="w-full bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-3 rounded-lg hover:scale-[1.02] transition">
                  Send →
                </button>
                {submitted && <p className="text-[#D97706] text-center font-semibold">✅ Message received! We'll respond personally.</p>}
              </form>
            </motion.div>

            {/* Info Box */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3 text-[var(--text-secondary)]">
                  <li className="flex gap-3">
                    <span className="text-xl">💬</span>
                    <span>You want to know what experiences are actually available here</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">🗺️</span>
                    <span>You want to plan a trip and need someone to talk it through with</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-xl">👥</span>
                    <span>You are travelling in a group or with family and want help structuring it</span>
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 bg-gradient-to-br from-[var(--primary)/10] to-[var(--accent)/10] border-[rgba(217,119,6,0.3)]">
                <p className="text-[var(--text-secondary)]">
                  WhatsApp is usually the fastest way to reach us. We respond personally — not through an automated system.
                </p>
              </div>

              <div className="glass-card p-8">
                <h3 className="font-display text-2xl font-bold mb-4">Office Hours</h3>
                <p className="text-[var(--text-secondary)] mb-2">We're available 7 days a week!</p>
                <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                  <li>🌅 Morning: 6:00 AM - 10:00 AM</li>
                  <li>☀️ Afternoon: 12:00 PM - 4:00 PM</li>
                  <li>🌙 Evening: 6:00 PM - 10:00 PM</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Find Us</h2>
          <motion.div
            className="glass-card p-1 rounded-2xl overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=80"
              alt="Varanasi Map"
              className="w-full h-96 object-cover rounded-xl"
            />
          </motion.div>
          <p className="text-center text-[var(--text-secondary)] mt-6 text-sm">
            📍 Based in Varanasi, Uttar Pradesh, India
          </p>
        </div>
      </section>
    </div>
  )
}