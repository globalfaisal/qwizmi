import Link from 'next/link'
import React from 'react'
import Logo from '@/components/Logo'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <footer className="bg-black py-20 text-slate-300">
      <div className="container flex flex-col justify-between gap-4 md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Logo size="sm" />
              <span className="text-xl font-bold"> qwizmi.</span>
            </Link>
            <div className="">With Qwizmi, every quiz is a new adventure!</div>
          </div>
        </div>
        <p className="text-sm text-slate-400 md:self-end">
          Copyright © {currentYear} Qwizmi. All rights reserved
        </p>
      </div>
    </footer>
  )
}

export default Footer
