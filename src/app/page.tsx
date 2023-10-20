'use client';

import Head from 'next/head';
import * as React from 'react';
import UnderlineLink from '@/components/links/UnderlineLink';
import NextImage from '@/components/NextImage';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='bg-white'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <NextImage
            priority
            src='/svg/Logo.svg'
            width={200}
            height={200}
            alt='logo'
            className='mx-auto mb-8'
          />
          <div className='text-6xl font-bold leading-none text-gray-900 sm:text-4xl'>
            Next.js + Tailwind CSS + TypeScript Starter
          </div>
          <footer className='absolute bottom-2 text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://github.com/globalfaisal'>
              globalfaisal
            </UnderlineLink>
          </footer>
        </div>
      </section>
    </main>
  );
}
