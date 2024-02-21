import { User } from '@prisma/client'
import { getAuthSession } from '@/lib/nextauth'
import NextImage from '@/components/NextImage'
import SignInButton from '@/components/SingInButton'
import ThemeToggle from '@/components/ThemeToggle'
import UserAccountNav from '@/components/UserAccountNav'

const Navbar = async () => {
  const session = await getAuthSession()
  return (
    <div className="fixed inset-x-0 top-0 z-10 flex items-center justify-between bg-background/20 p-4 text-foreground backdrop-blur-sm">
      <aside className="flex items-center gap-2">
        <NextImage
          priority
          src="/assets/logo.svg"
          alt="logo"
          width={32}
          height={32}
          className="dark:invert"
        />
        <span className="text-xl font-bold"> qwizmi.</span>
      </aside>
      <aside className="flex gap-2">
        <ThemeToggle className="h-8 w-8" />
        {session?.user ? (
          <UserAccountNav user={session.user as User} />
        ) : (
          <SignInButton text="Sign in" />
        )}
      </aside>
    </div>
  )
}
export default Navbar
