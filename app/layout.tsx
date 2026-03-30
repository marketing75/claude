import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '600', '700', '900'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://nettrackers.co.uk'),
  title: {
    default: 'NetTrackers — UK Digital Agency | Web Design, SEO & Software Development',
    template: '%s | NetTrackers',
  },
  description:
    'NetTrackers is a London-based digital agency helping UK businesses get found, look good, and grow. Web design, SEO, reputation management, and custom software development.',
  keywords: [
    'digital agency UK',
    'web design London',
    'SEO agency UK',
    'reputation management',
    'custom software development',
    'CRM development',
    'ERP development',
  ],
  authors: [{ name: 'NetTrackers', url: 'https://nettrackers.co.uk' }],
  creator: 'NetTrackers',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://nettrackers.co.uk',
    siteName: 'NetTrackers',
    title: 'NetTrackers — UK Digital Agency',
    description:
      'We help UK businesses get found, look good, and grow. Web design, SEO, reputation management, and custom software.',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NetTrackers — UK Digital Agency',
    description:
      'We help UK businesses get found, look good, and grow. Web design, SEO, reputation management, and custom software.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'NetTrackers',
  url: 'https://nettrackers.co.uk',
  logo: 'https://nettrackers.co.uk/logo.svg',
  description:
    'London-based digital agency offering web design, SEO, online reputation management, and custom software development for UK businesses.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '71-75 Shelton Street, Covent Garden',
    addressLocality: 'London',
    postalCode: 'WC2H 9JQ',
    addressCountry: 'GB',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+44-20-7946-0958',
    contactType: 'sales',
    areaServed: 'GB',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/nettrackers',
    'https://twitter.com/nettrackers',
    'https://www.instagram.com/nettrackers',
  ],
  foundingDate: '2014',
  founder: {
    '@type': 'Person',
    name: 'Dhruv Majumdar',
  },
}

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'NetTrackers',
  url: 'https://nettrackers.co.uk',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://nettrackers.co.uk/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-GB" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body className="font-body text-text bg-white antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-blue focus:text-white focus:rounded-lg"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
