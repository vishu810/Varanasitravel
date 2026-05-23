'use client'
import { motion } from 'framer-motion'

export default function PlacesWeKnow() {
  const places = [
    {
      name: 'Dashashwamedh Ghat',
      description: 'The main ghat and home of the nightly Ganga Aarti ceremony.',
    },
    {
      name: 'Assi Ghat',
      description: 'Southernmost major ghat — calm, local, where morning rituals happen at sunrise.',
    },
    {
      name: 'Manikarnika Ghat',
      description: 'One of the oldest cremation ghats in the world. A deeply sacred and contemplative place.',
    },
    {
      name: 'Kashi Vishwanath Temple',
      description: 'One of the twelve Jyotirlinga temples — the most important Shiva temple in Varanasi.',
    },
    {
      name: 'Sarnath',
      description: '7 km from Varanasi. Where the Buddha gave his first sermon after attaining enlightenment.',
    },
    {
      name: 'Banaras Hindu University (BHU)',
      description: 'One of Asia\'s largest universities — the New Vishwanath Temple on campus is worth visiting.',
    },
    {
      name: 'Old City Lanes (Vishwanath Gali)',
      description: 'The narrow lanes near Kashi Vishwanath — silk shops, temples, tea stalls, and real Banarasi life.',
    },
    {
      name: 'Sankat Mochan Mandir',
      description: 'Hanuman temple famous for classical music evenings — peaceful and un-touristy.',
    },
    {
      name: 'Silk Weaving Areas (Madanpura / Lallapura)',
      description: 'Where Banarasi silk is actually made. Worth visiting to understand the craft before buying.',
    },
    {
      name: 'Chunar Fort (Day Trip)',
      description: '45 km from Varanasi — a 16th century Mughal fort on a cliff above the Ganga. Undervisited.',
    },
    {
      name: 'Vindhyachal (Day Trip)',
      description: '70 km away — a major Shakti Peeth temple town on the Ganga. Significant for Hindu pilgrims.',
    },
    {
      name: 'Ramnagar Fort',
      description: 'Across the Ganga from Varanasi — home of the former Maharaja of Benares. Small but worthwhile.',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-[#D97706] font-bold mb-4">WHERE WE TAKE YOU</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="gold-shimmer">The Varanasi We Know</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            These are the places and areas we personally know and arrange visits to.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {places.map((place, i) => (
            <motion.div
              key={i}
              className="glass-card p-6 hover:bg-[rgba(248,230,209,0.45)] transition"
              variants={itemVariants}
            >
              <h3 className="font-display text-xl font-bold mb-2">{place.name}</h3>
              <p className="text-[#C4BDB0] text-sm leading-relaxed">{place.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
