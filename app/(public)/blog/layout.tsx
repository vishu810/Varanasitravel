import type { Metadata } from 'next'
import { noindexMetadata } from '@/lib/seo'

export const metadata: Metadata = noindexMetadata('Blog unavailable', 'The Varunaassi blog is currently unavailable. Explore Varanasi experiences and trip planning instead.')

export default function BlogLayout({ children }: { children: React.ReactNode }) { return children }
