const HomePage = () => {
  return (
    <section className="relative mt-[-70px] flex h-full w-full flex-col items-center justify-center md:pt-44 ">
      {/* grid */}
      {/* eslint-disable-next-line tailwindcss/no-contradicting-classname */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <p className="text-center md:text-2xl">
        Revolutionize your learning experience with AI-powered quizzes.
      </p>
      <div className="relative bg-gradient-to-r from-primary to-secondary-foreground bg-clip-text text-transparent">
        <h1 className="text-center text-8xl font-bold md:text-[300px]">
          qwizmi
        </h1>
      </div>
    </section>
  )
}

export default HomePage
