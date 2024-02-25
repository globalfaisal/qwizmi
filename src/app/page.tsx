import { cn } from '@/lib/utils'

const HomePage = () => {
  return (
    <div className="container relative flex h-full w-full flex-col items-center pt-32 md:pt-44">
      <div
        className={cn([
          'absolute bottom-0 left-0 right-0 top-0 -z-10',
          'bg-[linear-gradient(to_right,#2b2b2b,transparent_1px),linear-gradient(to_bottom,#2b2b2b,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_10%_at_50%_10%,#000_0%,transparent_110%)]',
        ])}
      />
      <section>
        <p className="text-center md:text-2xl">
          Revolutionize your learning experience with AI-powered quizzes.
        </p>
        <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
          <h1 className="text-center text-8xl font-bold md:text-9xl">qwizmi</h1>
        </div>
      </section>
      {/* <section className="mt-12">
        <p className="text-center md:text-2xl">
          Select a topic to get started with your quiz.
        </p>
      </section> */}
    </div>
  )
}

export default HomePage
