import '@/styles/globals.css'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import * as React from 'react'
import { cn } from '@/lib/utils'
import ThemeProvider from '@/components/theme-provider'
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={cn(inter.variable)}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="main">
            <div
              className={cn(
                'content',
                'container relative z-[10] px-6 pt-16 pb-20 md:pt-32 md:px-8 md:pb-40',
              )}
            >
              {children}
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
