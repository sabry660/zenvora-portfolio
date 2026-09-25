import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Noto_Sans_SC } from 'next/font/google'
import './globals.css'
import { ServiceWorkerRegistration } from '@/components/service-worker-registration'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-noto-sans-sc',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://zenvora.agency'),
  title: {
    default: 'Zenvora Technologies — Building Smarter Digital Solutions in Alexandria, Egypt',
    template: '%s | Zenvora Technologies',
  },
  description: 'Zenvora Technologies is a leading software development company in Alexandria, Egypt. We specialize in custom software development, AI solutions, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure. Transform your business with our expert team.',
  keywords: [
    'software development company Egypt',
    'web development Alexandria',
    'mobile app development Egypt',
    'AI solutions company',
    'custom software development',
    'SaaS development',
    'UI/UX design Egypt',
    'digital marketing agency Egypt',
    'SEO services Alexandria',
    'cloud infrastructure',
    'DevOps services',
    'React development',
    'Next.js development',
    'Angular development',
    'Node.js development',
    'Python development',
    'enterprise software',
    'hospitality software',
    'real estate software',
    'e-commerce development',
    'healthcare software',
    'EdTech solutions',
    'fintech development',
    'Alexandria software company',
    'Egypt tech company',
    'IT services Egypt',
    'software outsourcing Egypt',
    'Zenvora Technologies',
  ],
  authors: [{ name: 'Zenvora Technologies' }],
  creator: 'Zenvora Technologies',
  publisher: 'Zenvora Technologies',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ZENVORA',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zenvora.agency',
    title: 'Zenvora Technologies — Building Smarter Digital Solutions in Alexandria, Egypt',
    description: 'Zenvora Technologies is a leading software development company in Alexandria, Egypt. We specialize in custom software development, AI solutions, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure.',
    siteName: 'Zenvora Technologies',
    images: [
      {
        url: '/zenvora.png',
        width: 1200,
        height: 630,
        alt: 'Zenvora Technologies - Software Development Company in Alexandria, Egypt',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenvora Technologies — Building Smarter Digital Solutions in Alexandria, Egypt',
    description: 'Zenvora Technologies is a leading software development company in Alexandria, Egypt. We specialize in custom software development, AI solutions, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure.',
    creator: '@zenvora',
    images: ['/zenvora.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://zenvora.agency',
  },
  verification: {
    google: 'u5kDvgV0BBDCEMvF93ldWQh2rqhvGSH0JmG5Yz0rIg4',
  },
  other: {
    'google-site-verification': 'u5kDvgV0BBDCEMvF93ldWQh2rqhvGSH0JmG5Yz0rIg4',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#c8e6d9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zenvora Technologies',
    legalName: 'Zenvora Technologies',
    description: 'Leading software development company in Alexandria, Egypt specializing in custom software development, AI solutions, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure.',
    url: 'https://zenvora.agency',
    logo: 'https://zenvora.agency/zenvora.png',
    image: 'https://zenvora.agency/zenvora.png',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alexandria',
      addressRegion: 'Alexandria',
      addressCountry: 'Egypt',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20 155 019 3699',
      contactType: 'customer service',
      availableLanguage: ['English', 'Arabic'],
      areaServed: 'Egypt',
    },
    sameAs: [
      'https://www.facebook.com/share/1BmvKAEWEW/',
      'https://www.instagram.com/zenvoratechnology',
      'https://tiktok.com/@zenvora600',
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Egypt',
      },
      {
        '@type': 'City',
        name: 'Alexandria',
      },
    ],
    knowsAbout: [
      'Software Development',
      'Web Development',
      'Mobile App Development',
      'AI Solutions',
      'UI/UX Design',
      'Digital Marketing',
      'SEO',
      'Cloud Infrastructure',
      'DevOps',
      'Custom Software',
      'SaaS Development',
    ],
  }

  return (
    <html lang="en" className="bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansSC.variable} font-sans antialiased`}>
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  )
}
