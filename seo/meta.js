// seo/meta.js

import { siteConfig } from '@/config/siteConfig'

export function generateMetadata({ title, description, image, path = '' }) {
  const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} — ${siteConfig.tagline}`
  const desc = description || siteConfig.description
  const img = image || '/images/og-default.jpg'
  const url = `${siteConfig.url}${path}`

  return {
    title: fullTitle,
    description: desc,
    keywords: 'free cremation, underprivileged, NGO India, moksha seva, last rites, dignified farewell',
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: img, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
      images: [img],
    },
    alternates: { canonical: url },
  }
}

export const defaultMetadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
}
