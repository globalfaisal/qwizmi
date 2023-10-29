import '@/styles/globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import * as React from 'react'
import Header from '@/components/header'
import Providers from '@/components/providers'
import { siteConfig } from '@/constant/config'

export const inter = localFont({
  src: '../fonts/inter-var-latin.woff2',
  style: 'normal',
  weight: '100,900',
  display: 'optional',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
  },
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Providers>
          <main className="main">
            <div className="content">
              <Header />
              <div className="container relative z-10 pb-20  pt-16 antialiased md:pb-32 md:pt-24">
                {children}
              </div>
            </div>
          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
