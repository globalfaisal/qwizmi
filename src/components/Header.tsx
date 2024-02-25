import { User } from '@prisma/client'
import Link from 'next/link'
import { getAuthSession } from '@/lib/nextauth'
import Logo from '@/components/Logo'
import SignInButton from '@/components/SingInButton'
import ThemeToggle from '@/components/ThemeToggle'
import UserAccountNav from '@/components/UserAccountNav'

const Header = async () => {
  const session = await getAuthSession()
  return (
    <header className="sticky inset-x-0 top-0 z-10 bg-background/50 py-4 text-foreground backdrop-blur-[2px]">
      <div className="container flex items-center justify-between ">
        <Link href="/" className="flex items-center gap-2">
          <Logo
            size="sm"
            className="dark:fill-slate-300 dark:stroke-slate-300"
          />
          <span className="text-xl font-bold"> qwizmi.</span>
        </Link>
        <aside className="flex gap-4">
          <ThemeToggle className="h-8 w-8" />
          {session?.user ? (
            <UserAccountNav user={session.user as User} />
          ) : (
            <SignInButton text="Sign in" />
          )}
        </aside>
      </div>
    </header>
  )
}
export default Header
