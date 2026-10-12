import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Varanasi Travel Blog | Guides, Food & Culture',
  description: 'Explore practical Varanasi travel guides covering places to visit, itineraries, food, culture, and tips from local experts.',
  alternates: { canonical: '/blog' },
}

export default function Blog() {
  return (
    <main className="min-h-screen bg-[var(--bg-page)] text-[var(--text-primary)]">
      <section className="border-b border-white/10 bg-[#17130f] px-4 py-24 text-white sm:py-32">
        <div className="mx-auto max-w-6xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-saffron)]">The Varunaassi Journal</p>
          <h1 className="max-w-3xl font-display text-5xl font-bold leading-[1.05] sm:text-7xl">Stories and practical guides for Varanasi</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">Plan a more meaningful journey through the ghats, temples, food lanes, and living traditions of Banaras.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-24" aria-labelledby="featured-heading">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <article className="overflow-hidden rounded-3xl border border-black/10 bg-white shadow-[var(--shadow)] dark:border-white/10 dark:bg-white/[0.04]">
            <div className="bg-gradient-to-br from-[#d9a15d] via-[#b76835] to-[#322116] p-8 text-white sm:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/75">Featured guide</p>
              <h2 id="featured-heading" className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">Varanasi Travel Guide: Spiritual Sights, Food, and Culture</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/85">Everything you need to plan your first visit, from sunrise boat rides and sacred temples to Banarasi street food and seasonal travel advice.</p>
              <Link href="/blog/varanasi-travel-guide" className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-semibold text-[#24170e] transition hover:bg-[#fff1dd]">Read the guide</Link>
            </div>
            <div className="grid gap-4 px-8 py-6 text-sm text-[var(--text-secondary)] sm:grid-cols-3 sm:px-12">
              <span>Places to visit</span><span>2-day itinerary</span><span>Food and culture</span>
            </div>
          </article>

          <aside className="rounded-3xl border border-black/10 bg-[var(--bg-surface)] p-8 dark:border-white/10" aria-label="Plan your trip">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--accent-saffron)]">Need a local plan?</p>
            <h2 className="mt-4 font-display text-3xl font-bold">Turn your reading into a Varanasi experience.</h2>
            <p className="mt-4 leading-7 text-[var(--text-secondary)]">Tell us what you want to see, taste, and feel. Our local team can shape a thoughtful itinerary around your pace.</p>
            <Link href="/varanasi-trip-planner" className="mt-7 inline-flex font-semibold text-[var(--accent-saffron)] hover:underline">Plan your trip <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>
    </main>
  )
}
