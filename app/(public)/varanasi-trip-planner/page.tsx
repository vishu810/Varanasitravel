import type { Metadata } from 'next'
import SeoLandingPage from '@/components/seo/SeoLandingPage'

const description = 'Plan a Varanasi trip around your dates, pace, interests, and priorities with practical guidance from people who know Kashi locally.'

export const metadata: Metadata = {
  title: 'Varanasi Trip Planner',
  description,
  alternates: { canonical: '/varanasi-trip-planner' },
  openGraph: { title: 'Varanasi Trip Planner', description, url: '/varanasi-trip-planner', type: 'website' },
}

export default function Page() {
  return <SeoLandingPage name="Varanasi Trip Planner" description={description} path="/varanasi-trip-planner" eyebrow="Personalised travel planning" sections={[{ heading: 'A plan built around your trip', body: 'Share your dates, travel style, and must-see places. We help shape a realistic Varanasi itinerary instead of sending you a one-size-fits-all schedule.' }, { heading: 'Local context, practical details', body: 'Get clear guidance for ghats, temples, Ganga Aarti, food, transport, and the best way to use your time in Varanasi.' }, { heading: 'Flexible by design', body: 'Start with a short visit or a longer stay and adjust the plan for couples, families, solo travellers, and spiritual journeys.' }, { heading: 'Start with a conversation', body: 'Tell us what kind of Varanasi experience you want and we will suggest the next practical steps.' }]} related={[{ label: 'Varanasi itineraries', href: '/itinerary' }, { label: 'Experiences', href: '/experiences' }, { label: 'Contact us', href: '/contact' }]} />
}
