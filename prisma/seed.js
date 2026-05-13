const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  // Admin user
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin',
      password: await bcrypt.hash('admin123', 10),
      role: 'SUPER_ADMIN',
    },
  })

  // Packages
  const packages = [
    {
      slug: 'kashi-darshan-2-nights',
      title: 'Kashi Darshan — 2 Nights',
      subtitle: 'The perfect weekend pilgrimage',
      description: 'Experience the spiritual heart of Varanasi in a compact 2-night journey.',
      highlights: JSON.stringify(['Ganga Aarti', 'Kashi Vishwanath', 'Dawn boat ride', 'Local food walk']),
      durationDays: 2,
      durationNights: 2,
      basePrice: 6999,
      originalPrice: 8999,
      category: 'SPIRITUAL',
      badge: 'Bestseller',
      coverImage: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=800',
      isFeatured: true,
    },
    {
      slug: 'benaras-soul-of-india-4-nights',
      title: 'Benaras — Soul of India — 4 Nights',
      subtitle: 'Where every lane tells a story',
      description: 'Deep dive into the culture, art and spirituality of Varanasi.',
      highlights: JSON.stringify(['Silk weaving workshop', 'Classical music evening', 'Ghat photography', 'Sarnath day trip']),
      durationDays: 4,
      durationNights: 4,
      basePrice: 14999,
      category: 'CULTURAL',
      badge: "Editor's Choice",
      coverImage: 'https://images.unsplash.com/photo-1558862107-7dc6b65f7bd4?w=800',
      isFeatured: true,
    },
  ]

  for (const pkg of packages) {
    await prisma.package.upsert({
      where: { slug: pkg.slug },
      update: {},
      create: pkg,
    })
  }

  // Experiences
  const experiences = [
    {
      slug: 'dawn-boat-ride',
      title: 'Dawn Boat Ride on Ganga',
      shortDesc: 'Witness the sunrise over the ghats from a traditional wooden boat.',
      description: 'Float on the sacred river as the city awakens.',
      duration: '1.5 hours',
      timeOfDay: 'DAWN',
      price: 899,
      category: 'BOAT_RIDE',
      coverImage: 'https://images.unsplash.com/photo-1561361058-c24cecae35ca?w=600',
      highlights: JSON.stringify(['Sunrise views', 'Bird watching', 'Ghats from water']),
      isFeatured: true,
    },
    {
      slug: 'ganga-aarti-front-row',
      title: 'Ganga Aarti — Front Row Experience',
      shortDesc: 'Seats with the best view of the evening ceremony.',
      description: 'Witness the spectacular fire ritual with a reserved spot.',
      duration: '1 hour',
      timeOfDay: 'EVENING',
      price: 599,
      category: 'AARTI_CEREMONY',
      coverImage: 'https://images.unsplash.com/photo-1601102238397-9a4b3fcb8a7c?w=600',
      highlights: JSON.stringify(['Priest view', 'Professional guide']),
      isFeatured: true,
    },
  ]

  for (const exp of experiences) {
    await prisma.experience.upsert({
      where: { slug: exp.slug },
      update: {},
      create: exp,
    })
  }

  // Testimonials
  await prisma.testimonial.createMany({
    data: [
      {
        name: 'Ananya & Vikram S.',
        city: 'Mumbai',
        tripType: 'Couple · 3 Nights · Spiritual',
        quote: 'The planning was flawless. Our guide was extraordinary. My father wept at Dashashwamedh Ghat — happy tears.',
        rating: 5,
      },
      {
        name: 'Priya K.',
        city: 'Bangalore',
        tripType: 'Solo · 4 Nights · Cultural',
        quote: 'As a solo female traveller, safety was my priority. The team was responsive and thoughtful. Most incredible 4 days.',
        rating: 5,
      },
    ],
  })

  console.log('Database seeded successfully')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
