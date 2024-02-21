import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Not Found',
}

const NotFoundPage = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="text-3xl md:text-6xl">404</h1>
      <p>
        "Oops! This page has mastered the art of invisibility. Try another link,
        perhaps?"
      </p>
      <Button variant="default" className="mt-4">
        <Link href="/">Go Home</Link>
      </Button>
    </div>
  )
}

export default NotFoundPage
