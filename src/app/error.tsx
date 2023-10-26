'use client' // Error components must be Client Components

import * as React from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error)
  }, [error])

  return (
    <main>
      <section>
        <div className="container">
          <h1 className="text-4xl md:text-6xl">Oops, something went wrong!</h1>
          <button onClick={reset} className="mt-2">
            Try again
          </button>
        </div>
      </section>
    </main>
  )
}
