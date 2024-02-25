import '@/styles/globals.css'
import { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import * as React from 'react'
import { cn } from '@/lib/utils'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import { siteConfig } from '@/constant/config'

const font = DM_Sans({ subsets: ['latin'] })

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
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn('h-dvh flex flex-col', font.className)}>
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <div className="flex-1">{children}</div>
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout
