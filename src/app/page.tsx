'use client';

import Head from 'next/head';
import * as React from 'react';
import NextImage from '@/components/NextImage';

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
            alt='logo'
            width={480}
            height={480}
          />
          <h1 className='mb-4 font-primary text-8xl font-black leading-none text-gray-900 '>
            qwizmi
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            corporis.
          </p>
        </div>
      </section>
    </main>
  );
}
