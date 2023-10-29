import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not Found',
}

const NotFoundPage = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="text-4xl md:text-6xl">Page Not Found</h1>
          <Link href="/" className="mt-4 block">
            Back to home
          </Link>
        </div>
      </section>
    </main>
  )
}

export default NotFoundPage
