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
    { name: 'Vishu Singh', role: 'Founder', bio: "Vishu is from Varanasi and has been planning trips here for several years. He knows the ghats, the lanes, the seasonal patterns, and the people — guides, boatmen, weavers — who make a Varanasi trip work.", icon: '🧘' },
    { name: 'Naveen', role: 'Trip Planning', bio: "Naveen works on the planning side — putting together itineraries and coordinating with local guides and operators.", icon: '🗺️' },
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
              <span className="gold-shimmer">About Varunaassi</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
              We plan trips to Varanasi. That is what we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-1 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <h2 className="font-display text-4xl font-bold mb-6">What We Do</h2>
              <p className="text-[var(--text-secondary)] text-lg mb-4 leading-relaxed">
                Varunaassi is a travel planning service based in Varanasi. We help people visiting Varanasi put together a trip that actually makes sense — where to go, what to do, in what order, at what time of day. Varanasi is not a city you can plan well from a laptop at home. Things like the Ganga Aarti timing, which ghats are worth visiting at different hours, where the real silk workshops are — these details matter, and they are what we know.
              </p>
              <p className="text-[var(--text-secondary)] text-lg mb-4 leading-relaxed">
                When you contact us, we have a direct conversation. We understand what you are looking for and suggest a plan based on that. Nothing is fixed in advance. Every trip is worked out with the person who is taking it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats section removed per content rules */}

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Who We Are</h2>
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
            <h2 className="font-display text-4xl font-bold mb-4">Planning a trip to Varanasi?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8 max-w-2xl mx-auto">
              Tell us what you have in mind.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Get In Touch →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}