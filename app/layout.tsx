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
  title: 'Zenvora Technologies — Building Smarter Solutions',
  description: 'Zenvora Technologies delivers end-to-end digital solutions including custom software development, AI-powered systems, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure services.',
  keywords: ['web development', 'software engineering', 'AI solutions', 'mobile apps', 'UI/UX design', 'digital marketing', 'SEO', 'cloud infrastructure', 'automation', 'custom software', 'SaaS platforms', 'Alexandria', 'Egypt'],
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
    url: 'https://zenvora.com',
    title: 'Zenvora Technologies — Building Smarter Solutions',
    description: 'Zenvora Technologies delivers end-to-end digital solutions including custom software development, AI-powered systems, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure services.',
    siteName: 'Zenvora Technologies',
    images: [
      {
        url: '/zenvora.png',
        width: 1200,
        height: 630,
        alt: 'Zenvora Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zenvora Technologies — Building Smarter Solutions',
    description: 'Zenvora Technologies delivers end-to-end digital solutions including custom software development, AI-powered systems, web and mobile applications, UI/UX design, digital marketing, SEO, and cloud infrastructure services.',
    creator: '@zenvora',
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
    canonical: 'https://zenvora.com',
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
    description: 'Technology & Digital Solutions Company',
    url: 'https://zenvora.com',
    logo: 'https://zenvora.com/zenvora.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+20 155 019 3699',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Alexandria',
      addressCountry: 'Egypt',
    },
    sameAs: [
      'https://www.facebook.com/share/1BmvKAEWEW/',
      'https://www.instagram.com/zenvoratechnology',
      'https://tiktok.com/@zenvora600',
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
