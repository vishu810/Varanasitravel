'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Experiences() {
  const experiences = [
    {
      emoji: '🛕',
      title: 'Ganga Aarti at Dashashwamedh Ghat',
      duration: '~1.5 hours · Evening',
      description:
        'The nightly Ganga Aarti at Dashashwamedh Ghat is the most attended ritual in Varanasi. Priests perform a fire ceremony with large brass lamps to the sound of bells and chanting. You can watch from the ghat steps, from a nearby boat, or from a raised viewing area — each gives a different perspective.',
      highlights: ['Held every evening at sunset', 'Boat-side or ghat-side viewing options', 'Guide explains the significance and ritual steps'],
    },
    {
      emoji: '🚣',
      title: 'Dawn Boat Ride on the Ganga',
      duration: '~2 hours · Pre-dawn start',
      description:
        'Starting before sunrise, a wooden rowboat takes you slowly along the ghats while the city wakes up. You pass bathers, priests conducting morning rituals, and the great burning ghats — all from the calm of the river. This is considered by many visitors to be the definitive Varanasi experience.',
      highlights: ['Starts around 5 to 5:30 AM', 'Covers the main stretch of ghats — roughly 5 km', 'Local boatman rows — no motor, no rush'],
    },
    {
      emoji: '🍜',
      title: 'Old City Food & Ghat Walk',
      duration: '~3 hours · Morning or Evening',
      description:
        'Varanasi has its own food identity — kachori sabzi for breakfast, tamatar chaat, lassi, and the famous Banarasi paan. This walk goes through the narrow lanes near Vishwanath Gali, stopping at stalls that have been there for generations. It also covers a few of the less-visited ghats that most tourists skip.',
      highlights: ['Covers 5 to 6 food stops — all vegetarian', 'Passes through the old city lanes near the temple area', 'Small group walk with a local guide'],
    },
    {
      emoji: '🧘',
      title: 'Yoga or Meditation at the Ghats',
      duration: '~1.5 hours · Early Morning',
      description:
        'Varanasi has a long tradition of yoga and meditation — several ashrams and individual teachers operate near the ghats. We can arrange a session with a local practitioner on or near the ghats, away from tourist crowds. Suitable for beginners as well as people with existing practice.',
      highlights: ['Early morning session near the river', 'Can be adapted for beginners or experienced practitioners', 'Teacher is a local resident, not a hired performer'],
    },
    {
      emoji: '🏺',
      title: 'Silk Weaving Visit — Madanpura or Peeli Kothi',
      duration: '~2 hours · Morning',
      description:
        'Varanasi produces some of India\'s finest silk — woven by hand on pit looms in family homes and small workshops. These are real working spaces, not showrooms. We arrange visits to weavers in Madanpura or Peeli Kothi where you can watch the process and talk to the weavers directly. There is no pressure to buy anything.',
      highlights: ['Visits to working pit loom workshops', 'Weavers explain the pattern-making and dyeing process', 'Opportunity to see authentic Banarasi fabric being made'],
    },
    {
      emoji: '📸',
      title: 'Ghat Photography Walk',
      duration: '~3 hours · Dawn or Dusk',
      description:
        "Varanasi is one of the most photographed places in India — but most visitor photos look the same. This walk is specifically for people who want to photograph the city thoughtfully. A guide who knows the ghats takes you to less crowded spots, at the right time of day, for better light and more interesting compositions. Good for phone photographers and camera users alike.",
      highlights: ['Dawn walk covers the main ghats in soft morning light', 'Dusk walk covers the Aarti buildup and lamp-lit ghat atmosphere', 'Guide focuses on access and timing, not camera technique'],
    },
    {
      emoji: '🛕',
      title: 'Temple and Ashram Walk',
      duration: '~3 to 4 hours · Morning',
      description:
        "Varanasi has thousands of temples — but most visitors only see Kashi Vishwanath. This walk covers a selection of smaller, older temples in the old city that are significant but rarely visited by tourists. Includes a stop at one of the ghats where resident sadhus gather in the mornings.",
      highlights: ['Kashi Vishwanath Temple area (exterior and nearby lanes)', '3 to 4 smaller temples with historical context', 'Visit to a ghat frequented by local sadhus and ascetics'],
    },
    {
      emoji: '🎨',
      title: 'Pottery and Clay Craft Workshop',
      duration: '~2 to 2.5 hours · Morning',
      description:
        'Clay pottery is one of Varanasi\'s traditional crafts — small matka cups used for chai are made here. We arrange a session with a local potter, usually in their home workshop. You get to try the wheel and understand the craft. This is a quiet, unhurried experience away from the main tourist areas.',
      highlights: ['Session with a working local potter', 'You try the wheel yourself — no experience needed', 'Small simple clay piece to take home (no guarantee of a specific item)'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

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
            <span className="gold-shimmer">Authentic Experiences</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Beyond guidebooks. Crafted by locals who know Varanasi in their bones.
          </motion.p>
        </div>
      </section>

      {/* Filter & Count */}
      <section className="py-10 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <motion.p
            className="text-center text-[var(--text-secondary)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            ✨ {experiences.length} Curated Experiences | All led by local experts
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 hover:bg-[rgba(248,230,209,0.45)] transition group cursor-pointer"
                variants={itemVariants}
              >
                <div className="text-5xl mb-3 group-hover:scale-110 transition">{exp.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-2">{exp.title}</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-4 line-clamp-2">{exp.description}</p>

                <div className="space-y-2 mb-4 py-4 border-y border-[rgba(201,163,125,0.4)]">
                  <p className="text-sm text-[#D97706]">⏱️ {exp.duration}</p>
                </div>

                <ul className="text-xs text-[var(--text-secondary)] space-y-1 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>✓ {h}</li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="w-full block bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-2 rounded-lg hover:scale-[1.02] transition text-sm text-center"
                >
                  Ask About This →
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Notes */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <div className="glass-card p-10 text-center">
            <h2 className="font-display text-4xl font-bold mb-6">Why these experiences work</h2>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                { icon: '🤝', label: 'Local relationships', desc: 'We work with guides, boatmen, and workshop hosts from Varanasi’s neighborhoods.' },
                { icon: '🎯', label: 'Small groups', desc: 'Most experiences are designed for small groups to stay authentic and manageable.' },
                { icon: '📝', label: 'Flexible planning', desc: 'Every detail is adjusted around your schedule and interests.' },
              ].map((item, i) => (
                <div key={i} className="rounded-3xl border border-[rgba(201,163,125,0.4)] p-6">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-display text-2xl font-bold mb-2">{item.label}</h3>
                  <p className="text-[var(--text-secondary)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="glass-card p-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold mb-4">Ready to Go Deeper?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">Combine experiences into a customized journey crafted just for you.</p>
            <Link
              href="/#lead-form"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Plan Your Journey →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}