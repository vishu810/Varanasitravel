'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function About() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const teamMembers = [
    { name: 'Vishu', role: 'Founder & Varanasi Expert', bio: '15+ years exploring Varanasi\'s hidden gems', icon: '🧘' },
    { name: 'Naveen', role: 'Travel Curator', bio: 'Creates soul-stirring itineraries for wanderers', icon: '🗺️' },
    { name: 'Anonymous', role: 'Local Guide Champion', bio: 'Connects travelers with authentic experiences', icon: '🙏' },
  ]

  return (
    <div className="min-h-screen bg-[var(--bg-page)]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        <div className="absolute inset-0 -z-10">
          <img src="https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=1600&q=80" alt="Varanasi" className="h-full w-full object-cover brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-page)]/80 to-[var(--bg-page)]" />
        </div>
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
              <span className="gold-shimmer">Why Kashi Journeys?</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We're not just travel planners. We're bridge-builders between seekers and the soul of Varanasi.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-4 leading-relaxed">
                We believe every traveler deserves to experience Varanasi beyond the guidebook. Not as tourists, but as pilgrims discovering their own truth.
              </p>
              <p className="text-[var(--text-secondary)] text-lg mb-6 leading-relaxed">
                For over a decade, we've curated the city's most authentic experiences—from early morning Ghat walks with local monks to family-run silk ateliers where masters still weave stories into fabric.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎯</span>
                  <span className="text-[var(--text-primary)]">Personalized itineraries, not templates</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🤝</span>
                  <span className="text-[var(--text-primary)]">Direct connections with local experts</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✨</span>
                  <span className="text-[var(--text-primary)]">Experiences you can't find online</span>
                </div>
              </div>
            </motion.div>
            <motion.img
              src="https://images.unsplash.com/photo-1577720552663-340dd2e0bef1?w=500&q=80"
              alt="Varanasi Ghat"
              className="rounded-2xl w-full shadow-2xl"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { num: '500+', label: 'Journeys Planned', emoji: '🧭' },
              { num: '98%', label: 'Traveler Satisfaction', emoji: '⭐' },
              { num: '50+', label: 'Local Partners', emoji: '🤝' },
              { num: '10yrs', label: 'In Varanasi', emoji: '🕯️' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center hover:bg-[rgba(248,230,209,0.45)] transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{stat.emoji}</div>
                <div className="font-display text-3xl font-bold text-[#D97706] mb-2">{stat.num}</div>
                <p className="text-[var(--text-secondary)]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <motion.div className="grid md:grid-cols-3 gap-8" variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {teamMembers.map((member, i) => (
              <motion.div key={i} className="glass-card p-8 text-center hover:bg-[rgba(248,230,209,0.45)] transition" variants={item}>
                <div className="text-5xl mb-4">{member.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-1">{member.name}</h3>
                <p className="text-[#D97706] font-semibold mb-3">{member.role}</p>
                <p className="text-[var(--text-secondary)] text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">Ready to Experience Real Varanasi?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Let our team of local experts craft your personalized journey to this timeless city.
            </p>
            <Link
              href="/#lead-form"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Start Planning Now →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}