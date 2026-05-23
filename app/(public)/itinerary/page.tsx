'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Itinerary() {
  const steps = [
    { num: '01', title: 'Tell Us About Your Trip', desc: "Fill our short form. Tell us when you are travelling, who is coming, and what kind of trip you want — spiritual, cultural, food-focused, or just to see Varanasi properly for the first time.", icon: '📝' },
    { num: '02', title: 'We Put Together a Plan', desc: "Based on what you tell us, we suggest an itinerary — which experiences, in what order, at what time of day, and why. We know what works and what does not.", icon: '✨' },
    { num: '03', title: 'You Review and We Adjust', desc: 'We share the plan with you. You can change anything — add things, remove things, shift the pace. There is no fixed version until you are happy with it.', icon: '👀' },
    { num: '04', title: 'We Arrange the Trip', desc: 'Once the plan is settled, we coordinate with the local operators, guides, and boatmen we work with. You just need to show up.', icon: '🚀' },
  ]

  const sampleItinerary = [
    { day: 'Day 1', time: '6:00 AM', activity: 'Sunrise Ghat Walk', emoji: '🌅', desc: 'Explore the ghats with a local guide, learn daily rituals' },
    { day: 'Day 1', time: '8:00 AM', activity: 'Breakfast at Local Cafe', emoji: '☕', desc: 'Traditional breakfast with river views' },
    { day: 'Day 2', time: '9:00 AM', activity: 'Silk Weaving Workshop', emoji: '🏺', desc: 'Learn from master weavers at their studios' },
    { day: 'Day 2', time: '3:00 PM', activity: 'Food Heritage Walk', emoji: '🍜', desc: '6 street food stops, learn stories behind each dish' },
    { day: 'Day 3', time: '5:30 PM', activity: 'Ganga Aarti Ceremony', emoji: '🕯️', desc: 'Evening prayer ritual - the highlight of many travelers' },
    { day: 'Day 3', time: '7:00 PM', activity: 'Sunset Boat Ride', emoji: '🚣', desc: 'Glide through the Ganges as the city lights up' },
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
            <span className="gold-shimmer">Build Your Journey</span>
          </motion.h1>
          <motion.p
            className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Your story, your pace, your Varanasi. We make it happen.
          </motion.p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-page)] to-[var(--bg-surface)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="glass-card p-8 text-center h-full">
                  <div className="font-display text-5xl font-bold text-[#D97706] mb-2">{step.num}</div>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)]">{step.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-1/2 transform -translate-y-1/2 hidden md:block text-[#D97706] text-2xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Itinerary */}
      <section className="py-20 bg-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-4">A Typical 3-Day Varanasi Trip</h2>
          <p className="text-center text-[var(--text-secondary)] max-w-2xl mx-auto mb-8">This is an example of how we might structure 3 days. Actual timing and activities depend on your preferences and the season.</p>
          <motion.div
            className="glass-card p-8 md:p-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {sampleItinerary.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex gap-6 pb-6 border-b border-[rgba(201,163,125,0.4)] last:border-b-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="font-display text-lg font-bold text-[#D97706]">{item.day}</div>
                      <div className="text-sm text-[var(--text-secondary)]">{item.time}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{item.emoji}</span>
                        <h4 className="font-display text-lg font-bold">{item.activity}</h4>
                      </div>
                      <p className="text-[var(--text-secondary)] text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20 bg-gradient-to-b from-[var(--bg-elevated)] to-[var(--bg-page)]">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center mb-12">Fully Customizable</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '⏱️', label: 'Duration', desc: '2 days to 7 days or more' },
              { icon: '👥', label: 'Group Size', desc: 'Solo traveller to group' },
              { icon: '🎯', label: 'Interests', desc: 'Spiritual, cultural, food, photography, or a mix' },
              { icon: '🌅', label: 'Pace', desc: 'Relaxed or packed, your choice' },
              { icon: '🍽️', label: 'Food', desc: 'Vegetarian, vegan, or any preference accommodated' },
              { icon: '♿', label: 'Accessibility', desc: 'We accommodate different mobility needs' },
            ].map((opt, i) => (
              <motion.div
                key={i}
                className="glass-card p-6 text-center hover:bg-[rgba(248,230,209,0.45)] transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl mb-2">{opt.icon}</div>
                <h3 className="font-display text-lg font-bold mb-1">{opt.label}</h3>
                <p className="text-xs text-[var(--text-secondary)]">{opt.desc}</p>
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
            <h2 className="font-display text-4xl font-bold mb-4">Ready to Create Your Story?</h2>
            <p className="text-[var(--text-secondary)] text-lg mb-8">Fill our short form. We will put together a trip outline and get in touch.</p>
            <Link
              href="/#lead-form"
              className="inline-block bg-gradient-to-r from-[#D97706] to-[#FBBF24] px-8 py-3 rounded-lg font-bold text-[#0D0B08] hover:scale-105 transition"
            >
              Start Planning →
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}