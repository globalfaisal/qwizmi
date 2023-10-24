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
      <section className='min-h-main bg-bkg text-content'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>
          <NextImage
            priority
            src='/svg/Logo.svg'
            alt='logo'
            width={75}
            height={75}
          />
          <h1 className='mb-4 text-8xl font-black leading-none text-primary'>
            qwizmi
          </h1>
          <p className='my-4 text-2xl font-light '>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            corporis.
          </p>
          <p className='my-4 text-2xl font-light text-accent'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            corporis.
          </p>
          <p className='text-4xl text-primary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            corporis.
          </p>
          <p className='text-3xl text-secondary'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa,
            corporis.
          </p>
        </div>
      </section>
    </main>
  );
}
