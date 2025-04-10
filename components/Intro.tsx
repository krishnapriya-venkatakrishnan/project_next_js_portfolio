"use client";

const Intro = () => {
  return (
    <section className="h-[100dvh] flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center uppercase font-medium">
          <div className="overflow-hidden w-full">
            <div className="whitespace-nowrap animate-marquee-left w-full flex items-center justify-center">
              <h1 className="text-[2.5rem] lg:text-8xl xl:text-9xl">Krishnapriya </h1>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <div className="whitespace-nowrap animate-marquee-right w-full flex items-center justify-center">
              <h1 className="text-[2.5rem] lg:text-8xl xl:text-9xl">Venkatakrishnan </h1>
            </div>
          </div>  
        </div>

        <div className="tracking-wide text-center text-xl py-4 uppercase">
            A <span className="font-bold underline">web developer</span>, based in Stockholm
        </div>

        <div className="flex items-end justify-center px-8 pb-18">
          <div className="text-center tracking-wide text-xl max-w-[800px]">
          With years of experience in T24 banking software, I have shifted my focus to web development- building projects with React, Next.js, MongoDB, and modern tools through hands-on learning.
          </div>
        </div>
    </section>
  )
}

export default Intro