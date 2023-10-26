import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Not Found',
}

export default function NotFound() {
  return (
    <main>
      <section>
        <div className="container">
          <h1 className="text-4xl md:text-6xl">Page Not Found</h1>
          <a href="/" className="mt-4 block">
            Back to home
          </a>
        </div>
      </section>
    </main>
  )
}
