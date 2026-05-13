'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Experiences() {
  const experiences = [
    {
      emoji: '🕯️',
      title: 'Ganga Aarti Ceremony',
      description: 'Witness the evening prayer ritual at Dashashwamedh Ghat with 100+ oil lamps dancing to ancient mantras.',
      duration: '1.5 hours',
      price: '₹599',
      highlights: ['Prime ghat seat', 'Expert guide', 'Evening tea included'],
    },
    {
      emoji: '🚣',
      title: 'Dawn Boat Ride',
      description: 'Glide through misty waters at sunrise, experiencing the city awakening with pilgrims and devotees.',
      duration: '2 hours',
      price: '₹799',
      highlights: ['Sunrise views', 'Photography spots', 'Breakfast included'],
    },
    {
      emoji: '🍜',
      title: 'Street Food & Ghat Walk',
      description: 'Taste authentic Varanasi street food while exploring hidden ghats and centuries-old temples.',
      duration: '3 hours',
      price: '₹899',
      highlights: ['6+ food stops', 'Local guide', 'Temple visits'],
    },
    {
      emoji: '🧘',
      title: 'Yoga at the Ghat',
      description: 'Practice yoga and meditation with a certified instructor overlooking the sacred Ganges.',
      duration: '1.5 hours',
      price: '₹699',
      highlights: ['Beginner-friendly', 'Inclusive session', 'Tea & snacks'],
    },
    {
      emoji: '🏺',
      title: 'Silk Weaving Workshop',
      description: 'Visit a family-run silk loom and learn the traditional art of Benaras weaving directly from masters.',
      duration: '2 hours',
      price: '₹1,299',
      highlights: ['Hands-on weaving', 'Master workshop', 'Take home creation'],
    },
    {
      emoji: '📸',
      title: 'Photography Tour',
      description: 'Capture Varanasi\'s soul with a professional photographer guide. Learn composition, light, and storytelling.',
      duration: '3 hours',
      price: '₹1,499',
      highlights: ['Pro guidance', 'Best locations', 'Photo editing tips'],
    },
    {
      emoji: '🕌',
      title: 'Temple & Ashram Trail',
      description: 'Visit ancient temples, meet sadhus (spiritual seekers), and understand Varanasi\'s spiritual significance.',
      duration: '4 hours',
      price: '₹1,199',
      highlights: ['5+ temples', 'Spiritual talks', 'Meditation session'],
    },
    {
      emoji: '🎨',
      title: 'Pottery & Clay Workshop',
      description: 'Create traditional clay artifacts with local artisans who\'ve been perfecting the craft for generations.',
      duration: '2.5 hours',
      price: '₹1,099',
      highlights: ['Clay artisan', 'Firing experience', 'Artwork to take'],
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
                  <p className="text-lg font-bold text-[#FBBF24]">{exp.price}</p>
                </div>

                <ul className="text-xs text-[var(--text-secondary)] space-y-1 mb-4">
                  {exp.highlights.map((h, j) => (
                    <li key={j}>✓ {h}</li>
                  ))}
                </ul>

                <button className="w-full bg-gradient-to-r from-[#D97706] to-[#FBBF24] text-[#0D0B08] font-bold py-2 rounded-lg hover:scale-[1.02] transition text-sm">
                  Learn More
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why These Experiences */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Why Our Experiences Stand Out</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Local Masters', desc: 'Led by people who\'ve lived here for decades, not guides from guidebooks.' },
              { icon: '🎯', title: 'Small Groups', desc: 'Max 6 travelers per experience. Intimate, authentic, personal.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges. Every rupee goes to local guides and artisans.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="glass-card p-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-[var(--text-secondary)]">{item.desc}</p>
              </motion.div>
            ))}
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