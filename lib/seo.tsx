import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Plan Your Varanasi Trip`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Plan a meaningful Varanasi trip with local guidance for ghats, Ganga Aarti, temples, culture, and personalised experiences.',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} — Plan Your Varanasi Trip`,
    description:
      'Personalised Varanasi trip planning, local experiences, and practical guidance for your journey.',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Plan Your Varanasi Trip`,
    description: 'Personalised Varanasi trip planning and local experiences.',
  },
  robots: { index: true, follow: true },
}

export function absoluteUrl(path = '/') {
  return new URL(path, SITE_URL).toString()
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
  }
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: absoluteUrl(path), type: 'website' },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export function noindexMetadata(title: string, description: string): Metadata {
  return { title, description, robots: { index: false, follow: false } }
}
