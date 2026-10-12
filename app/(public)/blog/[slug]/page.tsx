import type { Metadata } from 'next'
import Link from 'next/link'

const faqs = [
  ['What is the optimal time to go to Varanasi?', 'November through February is usually the best period to visit. The weather is cooler than in summer, making it easier to explore the ghats and temples on foot.'],
  ['Is October a suitable month to visit Varanasi?', 'Yes. October is a great shoulder-season choice after the monsoon. It can still be warm, so plan heavier outdoor activities for the cooler parts of the day.'],
  ['Can Varanasi be visited during winter because it is too cold?', 'Varanasi is excellent in winter, but early mornings and evenings can be cold, especially in late December and January. Pack warm layers for a sunrise boat trip.'],
  ['Which month is the hottest in Varanasi?', 'April through June are the hottest months, with temperatures regularly exceeding 40°C. Plan sightseeing for early morning or evening.'],
  ['Is it a good idea to visit Varanasi during the monsoon?', 'You can visit between July and September, but rain may disrupt outdoor plans and boat rides. Take rain gear and check river conditions daily.'],
  ['When do people celebrate Dev Deepawali in Varanasi?', 'Dev Deepawali takes place on Kartik Purnima according to the Hindu lunar calendar. The date changes each year, usually falling in November.'],
  ['Is Varanasi crowded during Dev Deepawali?', 'Yes. The festival is exceptionally crowded around the ghats, so book accommodation and transport as early as possible.'],
  ['How many days should I stay in Varanasi?', 'First-time visitors usually need two to three days to explore the ghats, visit Kashi Vishwanath, take a boat trip, and experience the old city without rushing.'],
  ['How should I pack for a visit to Varanasi in winter?', 'Bring warm layers, comfortable walking shoes, and modest clothing for temples. Winter mornings on the river can also be foggy.'],
  ['Can I visit Varanasi in summer?', 'Certainly, but the heat can be tiring. Carry water, use sun protection, take breaks, and keep outdoor activities to early mornings and late evenings.'],
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  if (slug !== 'varanasi-travel-guide') return { title: 'Article not found', robots: { index: false, follow: true } }
  return {
    title: 'Varanasi Travel Guide: Spiritual Sights, Food & Culture',
    description: 'Plan your Varanasi trip with this complete travel guide. Discover the best ghats, Kashi Vishwanath Temple, local street food, cultural sights, and practical tips.',
    alternates: { canonical: '/blog/varanasi-travel-guide' },
    openGraph: { title: 'Varanasi Travel Guide: Spiritual Sights, Food & Culture', description: 'A practical guide to places to visit, food, culture, seasons, and itineraries in Varanasi.', type: 'article' },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (slug !== 'varanasi-travel-guide') return <main className="mx-auto max-w-3xl px-4 py-32 text-center"><h1 className="font-display text-4xl font-bold">Article not found</h1><Link href="/blog" className="mt-6 inline-block text-[var(--accent-saffron)]">Back to the blog</Link></main>

  const jsonLd = { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: 'Varanasi Travel Guide: Spiritual Sights, Food, and Culture', description: 'A complete Varanasi travel guide covering places to visit, itineraries, food, culture, and practical tips.', url: 'https://varunaassi.com/blog/varanasi-travel-guide', author: { '@type': 'Organization', name: 'Varunaassi' }, mainEntityOfPage: 'https://varunaassi.com/blog/varanasi-travel-guide' }
  const faqLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) }

  return (
    <main className="bg-[var(--bg-page)] text-[var(--text-primary)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <header className="bg-[#17130f] px-4 py-20 text-white sm:py-28"><div className="mx-auto max-w-4xl"><Link href="/blog" className="text-sm text-white/65 hover:text-white">← Back to the journal</Link><p className="mt-12 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent-saffron)]">Varanasi travel guide</p><h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">Spiritual sights, food, and culture</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">A thoughtful first-timer&apos;s guide to the ancient city of Varanasi, Banaras, and Kashi.</p></div></header>
      <article className="prose prose-lg mx-auto max-w-4xl px-4 py-14 prose-headings:font-display prose-headings:text-[var(--text-primary)] prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--accent-saffron)] sm:py-20">
        <p className="lead">Varanasi, Banaras, and Kashi are three names for one of the most fascinating and ancient cities in the world. Located on the banks of the holy River Ganga in Uttar Pradesh, Varanasi is famous for its temples, beautiful ghats, spiritual traditions, and unique local culture.</p>
        <p>For many visitors, a trip to Varanasi is not just a holiday—it is an opportunity to experience the spiritual side of India. Whether you call it Varanasi, Banaras, or Kashi, this city offers an atmosphere that is difficult to find anywhere else.</p>
        <h2>The spiritual heart of India: top places to visit</h2>
        <ul><li><strong>Kashi Vishwanath Temple:</strong> Dedicated to Lord Shiva, this is Varanasi&apos;s main attraction and a vital Hindu pilgrimage site. Check the official temple website for current entry and security instructions.</li><li><strong>Dashashwamedh Ghat and the Ganga Aarti:</strong> Arrive early for the evening devotional offering of synchronized prayers, chants, and flaming lamps, or hire a boat to watch from the water.</li><li><strong>Manikarnika Ghat:</strong> One of India&apos;s most sacred cremation grounds. Maintain a respectful distance, stay quiet, and never take photographs.</li><li><strong>Assi Ghat:</strong> A peaceful place for a sunrise walk or the start of a morning boat ride.</li><li><strong>Sarnath:</strong> The major Buddhist site just outside the city where the Buddha gave his first teaching.</li></ul>
        <h2>A 2-day Varanasi itinerary</h2>
        <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10"><table className="w-full min-w-[620px] text-left text-base"><thead className="bg-[#17130f] text-white"><tr><th className="p-4">Day</th><th className="p-4">Focus</th><th className="p-4">Recommended activities</th></tr></thead><tbody><tr className="border-b border-black/10 dark:border-white/10"><td className="p-4 font-semibold">Day 1</td><td className="p-4">Old city and ghats</td><td className="p-4">Kashi Vishwanath, old-city alleys, Assi and Dashashwamedh Ghats, then the Ganga Aarti.</td></tr><tr><td className="p-4 font-semibold">Day 2</td><td className="p-4">Culture and history</td><td className="p-4">Sunrise boat ride, BHU, Sarnath or Ramnagar Fort, and a local food walk.</td></tr></tbody></table></div>
        <h2>Cultural highlights</h2><p><strong>Banarasi silk weaving:</strong> Visit a reputable workshop to watch artisans create intricate sarees by hand. <strong>Banaras Hindu University:</strong> The leafy campus offers a break from the old-city crowds. <strong>Ramnagar Fort:</strong> Across the river, this historic fort offers a glimpse into the region&apos;s past.</p>
        <h2>What to eat: a Varanasi food guide</h2><ul><li><strong>Kachori sabzi:</strong> A classic breakfast of flaky pastry and spiced vegetable curry.</li><li><strong>Banarasi tamatar chaat:</strong> Tangy, spiced tomatoes with crispy toppings.</li><li><strong>Malaiyo:</strong> A light, foamy milk sweet available in winter.</li><li><strong>Thandai:</strong> Ask about ingredients and specify a non-intoxicating version if preferred.</li><li><strong>Banarasi paan:</strong> A traditional betel-leaf preparation eaten after a meal.</li></ul><blockquote>Food safety tip: choose busy stalls where food is prepared hot and fresh, use bottled water, and clearly communicate dietary restrictions.</blockquote>
        <h2>The best time to visit Varanasi</h2><ul><li><strong>Winter (October to March):</strong> Comfortable for walking, though river mornings can be cold and foggy.</li><li><strong>Summer (April to June):</strong> Often above 40°C; sightsee at sunrise and sunset.</li><li><strong>Monsoon (July to September):</strong> Keep plans flexible because rain and strong currents may disrupt boat rides.</li><li><strong>Dev Deepawali:</strong> The ghats glow with millions of lamps, but crowds are immense. Book months ahead.</li></ul>
        <h2>Practical travel tips</h2><p>Walking is best in the old city and along the ghats. For longer distances, use cycle rickshaws and agree on a fare first. Staying near the ghats provides great access, but narrow lanes may mean carrying luggage through crowded areas or up stairs.</p>
        <hr /><h2>Frequently asked questions</h2><div className="not-prose space-y-3">{faqs.map(([question, answer]) => <details key={question} className="group rounded-2xl border border-black/10 bg-[var(--bg-surface)] px-5 py-4 dark:border-white/10"><summary className="cursor-pointer list-none pr-8 font-semibold text-[var(--text-primary)] marker:hidden">{question}<span className="float-right text-[var(--accent-saffron)] transition group-open:rotate-45" aria-hidden="true">+</span></summary><p className="mt-3 leading-7 text-[var(--text-secondary)]">{answer}</p></details>)}</div>
        <div className="not-prose mt-12 rounded-3xl bg-[#17130f] p-8 text-white"><h2 className="font-display text-3xl font-bold">Want help planning your Varanasi trip?</h2><p className="mt-3 text-white/70">Share your dates and interests with our local team.</p><Link href="/varanasi-trip-planner" className="mt-6 inline-flex rounded-full bg-[var(--accent-saffron)] px-6 py-3 font-semibold text-[#17130f]">Start planning</Link></div>
      </article>
    </main>
  )
}
