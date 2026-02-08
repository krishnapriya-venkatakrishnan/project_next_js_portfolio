"use client";

import Image from "next/image";

const Intro = () => {
  
  return (
    <section id="home" className="w-full py-16 max-lg:px-8 flex flex-col  gap-4 max-w-5xl mx-auto">
      <div className="mt-8 relative max-md:w-full w-[60%]">
        <Image src="/svg/name.svg"
          alt="Name"
          width={300}
          height={350}
          className="h-[100px]"
        />
        <p className="my-4">— a <span className="font-bold">full-stack web developer</span> crafting modern, scalable web applications with clean code and seamless user experiences.</p>
      </div>
      <div id="about" className="flex flex-col gap-2">
        <h3 className="font-bold tracking-wide text-black">ABOUT</h3>
        <p>
          I thrive at the intersection of technology and design, creating intuitive, responsive interfaces that captivate users and deliver tangible value.
          After nearly six years in banking software, I pivoted to web development, mastering React, Next.js, TypeScript, Firebase, Supabase, and MongoDB. This transition empowered me to merge technical depth with a user-centric approach, building solutions that are both robust and elegant.
          Through hands-on projects and specialized courses, I refine applications from concept to deployment, ensuring performance, usability, and polished design — transforming ideas into digital experiences that users love.
        </p>
      </div>
    </section>
  )
}

export default Intro