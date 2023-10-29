import Link from 'next/link'
import NextImage from '@/components/next-image'
import ThemeToggle from '@/components/theme-toggle'

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-20 h-fit border border-border  bg-background/20 text-foreground ">
      <div className="container flex h-full items-center justify-between gap-2 py-2 backdrop-blur-sm md:py-4">
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
        <ThemeToggle className="h-8 w-8" />
      </div>
    </header>
  )
}
export default Header
