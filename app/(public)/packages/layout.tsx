import type { Metadata } from 'next'
import { pageMetadata } from '@/lib/seo'

export const metadata: Metadata = pageMetadata('Varanasi Trip Packages', 'Use these flexible Varanasi trip formats as a starting point, then shape the itinerary around your dates and interests.', '/packages')

export default function PackagesLayout({ children }: { children: React.ReactNode }) { return children }
