import type { Metadata } from 'next'
import {
  breadcrumbJsonLd,
  JsonLd,
  pageMetadata,
  serviceJsonLd,
} from '@/lib/seo'

type Props = { params: Promise<{ slug: string }> }

function displayName(slug: string) {
  return decodeURIComponent(slug).replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const name = displayName(slug)
  return pageMetadata(
    `${name} Varanasi Travel Package`,
    `Explore the ${name.toLowerCase()} travel package and plan a flexible Varanasi trip with local guidance.`,
    `/packages/${slug}`,
  )
}

export default async function PackageDetail({ params }: Props) {
  const { slug } = await params
  const name = displayName(slug)
  const path = `/packages/${slug}`
  const description = `Explore the ${name.toLowerCase()} travel package and plan a flexible Varanasi trip with local guidance.`

  return (
    <main className="container mx-auto px-4 py-32">
      <JsonLd data={serviceJsonLd({ name, description, path })} />
      <JsonLd data={breadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Packages', path: '/packages' },
        { name, path },
      ])} />
      <h1 className="font-display text-5xl font-bold">{name}</h1>
      <p className="mt-4 max-w-2xl text-[var(--text-secondary)]">{description}</p>
      <a className="mt-8 inline-block font-semibold text-[#D97706]" href="/contact">
        Ask about this package
      </a>
    </main>
  )
}
