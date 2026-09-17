import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata('Plan Your Varanasi Itinerary', 'See how Varunaassi builds a flexible Varanasi itinerary around your pace, interests, and travel dates.', '/itinerary')

export default function ItineraryLayout({ children }: { children: React.ReactNode }) { return children }
