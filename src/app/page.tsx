import Head from 'next/head'
import * as React from 'react'
import NextImage from '@/components/next-image'

export default function HomePage() {
  return (
    <div className="">
      <Head>
        <title>Hi</title>
      </Head>
      <section>
        <div>
          <NextImage
            priority
            src="/svg/logo.svg"
            alt="logo"
            width={75}
            height={75}
            className="dark:invert"
          />
          <h1>Hello World!</h1>
          <p>The quick brown fox ...</p>
          <p>The quick brown fox ...</p>
          <p>The quick brown fox ...</p>
          <p>The quick brown fox ...</p>
          <p>The quick brown fox ...</p>
          <p>The quick brown fox ...</p>
        </div>
      </section>
    </div>
  )
}
