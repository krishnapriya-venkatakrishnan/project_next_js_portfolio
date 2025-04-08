const Intro = () => {
  return (
    <section className="h-[100dvh] flex flex-col">
      <div className="flex flex-col items-center justify-center text-5xl uppercase flex-wrap font-medium">
        <div className="mt-20 overflow-hidden w-full">
          <div className="whitespace-nowrap animate-marquee-left w-full flex items-center justify-center">
            Krishnapriya 
          </div>
        </div>
        <div className="overflow-hidden w-full">
          <div className="whitespace-nowrap animate-marquee-right w-full flex items-center justify-center">
            Venkatakrishnan 
          </div>
        </div>  
      </div>

      <div className="tracking-wide text-center text-xl py-4 uppercase">
          A web developer, based in Stockholm
      </div>

      <div className="flex-1 flex items-end justify-center px-8 pb-18">
        <div className="text-center tracking-wide text-xl max-w-[800px]">
        With years of experience in T24 banking software, I have shifted my focus to front-end development- building projects with React, Next.js, MongoDB, and modern tools through hands-on learning.
        </div>
      </div>
    </section>
  )
}

export default Intro