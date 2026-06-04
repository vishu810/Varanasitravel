'use client'
import { motion } from 'framer-motion'

export default function PlacesWeKnow() {
  const places = [
    {
      name: 'Dashashwamedh Ghat',
      description: 'The main ghat and home of the nightly Ganga Aarti ceremony.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20ghat-BdZxR7Sba1Zyz6V5ANpKKRool1iVBi.jpeg',
    },
    {
      name: 'Assi Ghat',
      description: 'Southernmost major ghat — calm, local, where morning rituals happen at sunrise.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/people%20gether%20at%20ghaat-QFAF5Jj5RYvJnYHRVdB94YwCGFQGR3.jpeg',
    },
    {
      name: 'Manikarnika Ghat',
      description: 'One of the oldest cremation ghats in the world. A deeply sacred and contemplative place.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/manikarnika%20ghat-h4xRtmKHF1oQSeul13pM9Iiiidgl5s.jpeg',
    },
    {
      name: 'Kashi Vishwanath Temple',
      description: 'One of the twelve Jyotirlinga temples — the most important Shiva temple in Varanasi.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20view%20of%20ganga%20and%20shore-sgB1yTcpivraMTWj2ejJzPR2hpJTix.jpeg',
    },
    {
      name: 'Sarnath',
      description: '7 km from Varanasi. Where the Buddha gave his first sermon after attaining enlightenment.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boatride%20morning%20sunrise-8ffTrtO7fNt5vh4m5PFaGAfaGdglwr.jpeg',
    },
    {
      name: 'Banaras Hindu University (BHU)',
      description: 'One of Asia\'s largest universities — the New Vishwanath Temple on campus is worth visiting.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20street-EQJvTa2HRBCfuSieN2OdSw5KVXEpe2.jpeg',
    },
    {
      name: 'Old City Lanes (Vishwanath Gali)',
      description: 'The narrow lanes near Kashi Vishwanath — silk shops, temples, tea stalls, and real Banarasi life.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20street%20view-nR7cVhnkFfxgdnR2vFIgF3wS2kIRAO.jpeg',
    },
    {
      name: 'Sankat Mochan Mandir',
      description: 'Hanuman temple famous for classical music evenings — peaceful and un-touristy.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/arti-sMfc0kEwjxO8clkN7K00EhkC2Q9ilq.jpeg',
    },
    {
      name: 'Silk Weaving Areas (Madanpura / Lallapura)',
      description: 'Where Banarasi silk is actually made. Worth visiting to understand the craft before buying.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20handwork%20textile%20art-s3sYZRL79fLeonYD2muimto5x9YmNt.jpeg',
    },
    {
      name: 'Chunar Fort (Day Trip)',
      description: '45 km from Varanasi — a 16th century Mughal fort on a cliff above the Ganga. Undervisited.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/banaras%20view%20of%20ganga%20and%20shore-sgB1yTcpivraMTWj2ejJzPR2hpJTix.jpeg',
    },
    {
      name: 'Vindhyachal (Day Trip)',
      description: '70 km away — a major Shakti Peeth temple town on the Ganga. Significant for Hindu pilgrims.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/early%20morning%20boats%20birds%20in%20ganga-XNFDCbJgoD1A3KsLIQCQB4AaKvjtvY.jpeg',
    },
    {
      name: 'Ramnagar Fort',
      description: 'Across the Ganga from Varanasi — home of the former Maharaja of Benares. Small but worthwhile.',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/boat%20ride-YRh9rocU7h9hv24j9sAE6JHZbAYDy0.jpeg',
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {places.map((place, i) => (
            <motion.div
              key={i}
              className="glass-card overflow-hidden hover:shadow-lg transition group"
              variants={itemVariants}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-display text-lg font-bold mb-2">{place.name}</h3>
                <p className="text-[#C4BDB0] text-sm leading-relaxed">{place.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
