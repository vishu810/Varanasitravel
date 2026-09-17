import type { Metadata } from 'next'
import { noindexMetadata } from '@/lib/seo'

export const metadata: Metadata = noindexMetadata('Thank you', 'Your Varanasi travel enquiry has been received.')

export default function ThankYouLayout({ children }: { children: React.ReactNode }) { return children }
