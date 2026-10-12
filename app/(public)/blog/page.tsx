import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Varanasi Travel Guide: Spiritual Sights, Food & Culture | Varunaassi',
  description: 'Explore Varanasi travel guides, itineraries, local food, culture, and practical tips for planning a meaningful trip to Banaras.',
  alternates: { canonical: '/blog' },
}

const posts = [
  {
    category: 'Spiritual & Culture',
    title: 'The Spiritual Heart of India: Top Places to Visit in Varanasi',
    excerpt: 'Discover the ancient temples, beautiful ghats, and unique culture of Varanasi. Explore Kashi Vishwanath, Dashashwamedh, and the Ganga Aarti.',
    href: '/blog/varanasi-travel-guide',
  },
  {
    category: 'Itineraries',
    title: '2 Days in Varanasi: A First-Time Visitor’s Itinerary',
    excerpt: 'Short on time? Here is a perfect 48-hour itinerary to catch the spiritual essence of Banaras, from sunrise boat rides to the old city alleys.',
    href: '/blog/2-days-in-varanasi-itinerary',
  },
  {
    category: 'Food & Drink',
    title: 'What Should You Eat in Varanasi? A Street Food Guide',
    excerpt: 'Dive into the rich food culture of Banaras. From classic Kachori Sabzi and Tamatar Chaat to seasonal Malaiyo and famous Banarasi Paan.',
    href: '/blog/what-to-eat-in-varanasi',
  },
  {
    category: 'Travel Tips',
    title: 'The Best Time to Visit Varanasi',
    excerpt: 'Find out the optimal time to plan your trip. Learn what to expect during winter, summer heat, monsoon, and Dev Deepawali.',
    href: '/blog/best-time-to-visit-varanasi',
  },
]

const faqs = [
  ['What is the optimal time to go to Varanasi?', 'November through February is usually a good period to visit if you want to sightsee comfortably, since the weather is cooler.'],
  ['Is it a good idea to visit Varanasi during the monsoon?', 'The monsoon season (July through September) is beautiful, but rain might put your outdoor arrangements at risk. Take rain gear and check local river conditions.'],
  ['How many days should I stay in Varanasi?', 'First-time visitors usually arrange either two or three days to explore the ghats, visit the temples, and get a feel for the old city without rushing.'],
  ['Can I visit Varanasi in summer?', 'Yes, but sightseeing can become tiring due to extreme heat (often above 40°C). Plan your outdoor activities for early morning or late evening.'],
]

export default function Blog() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  return (
    <main className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <section className="border-b border-white/10 bg-[#17130f] px-4 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-saffron)]">The Varunaassi Journal</p>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.05] sm:text-7xl">Varanasi Travel Guide: Spiritual Sights, Food &amp; Culture</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Local insight for planning a more meaningful journey through the ghats, temples, food lanes, and living traditions of Banaras.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="guides-heading">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-saffron)]">Explore the journal</p><h2 id="guides-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">Guides for your Varanasi trip</h2></div>
          <Link href="/varanasi-trip-planner" className="font-semibold text-[var(--accent-saffron)] hover:underline">Need a local plan <span aria-hidden="true">→</span></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <article key={post.href} className="flex h-full flex-col rounded-3xl border border-black/10 bg-[var(--bg-surface)] p-7 shadow-[var(--shadow)] transition duration-200 hover:-translate-y-1 hover:shadow-xl dark:border-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-saffron)]">{post.category}</p>
              <h3 className="mt-5 font-display text-2xl font-bold leading-tight">{post.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-[var(--text-secondary)]">{post.excerpt}</p>
              <Link href={post.href} className="mt-7 inline-flex w-fit rounded-full bg-[#17130f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[var(--accent-saffron)] hover:text-[#17130f] dark:bg-white dark:text-[#17130f]" aria-label={`Read ${post.title}`}>Read more <span className="ml-2" aria-hidden="true">→</span></Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-black/10 bg-[var(--bg-surface)] px-4 py-16 dark:border-white/10 sm:py-24" aria-labelledby="faq-heading">
        <div className="mx-auto max-w-4xl"><p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-saffron)]">Planning questions</p><h2 id="faq-heading" className="mt-3 font-display text-4xl font-bold sm:text-5xl">Frequently asked questions</h2><div className="mt-10 space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-black/10 bg-[var(--bg-page)] px-5 py-4 dark:border-white/10"><summary className="cursor-pointer list-none pr-8 font-semibold marker:hidden">{question}<span className="float-right text-xl font-normal text-[var(--accent-saffron)] transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-3 max-w-3xl leading-7 text-[var(--text-secondary)]">{answer}</p></details>)}</div></div>
      </section>
    </main>
  )
}
