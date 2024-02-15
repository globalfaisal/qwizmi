import Link from 'next/link'
import { getAuthSession } from '@/lib/nextauth'
import NextImage from '@/components/NextImage'
import SignInButton from '@/components/SingInButton'
import ThemeToggle from '@/components/ThemeToggle'

const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <nav className="fixed inset-x-0 top-0 z-20 h-fit border border-border  bg-background/20 text-foreground ">
      <div className="container flex h-full items-center justify-between gap-4 py-2 backdrop-blur-sm md:py-4">
        <Link href="/" className="h-8 w-8">
          <NextImage
            priority
            src="/images/logo.svg"
            alt="logo"
            width={32}
            height={32}
            className="dark:invert"
          />
        </Link>
        <aside className="flex gap-2">
          {session?.user ? (
            <p>Hello, {session.user.name}</p>
          ) : (
            <SignInButton text="Sign in" />
          )}
          <ThemeToggle className="h-8 w-8" />
        </aside>
      </div>
    </nav>
  )
}
export default Navbar
