import * as React from 'react'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Providers from '@/components/Providers'
import { font } from './layout'

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const currentYear = new Date().getFullYear()
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={cn('h-dvh flex flex-col', font.className)}>
        <Providers>
          <Header />
          <main className="flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <div className="flex-1">{children}</div>
            <footer className="">
              <p>Copyright © {currentYear} Qwizmi. All rights reserved</p>
            </footer>
          </main>
        </Providers>
      </body>
    </html>
  )
}
