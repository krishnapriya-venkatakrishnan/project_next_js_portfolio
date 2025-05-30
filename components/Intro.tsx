"use client";

import Link from "next/link";
import { IconChevronsDown } from "@tabler/icons-react";

const Intro = () => {
  
  return (
    <section className="intro-height flex flex-col items-center justify-center overflow-hidden">
        <div className="flex flex-col items-center justify-center font-medium">
          <div className="overflow-hidden w-full">
            <div className="whitespace-nowrap animate-marquee-left w-full flex items-center justify-center">
              <h1 className="text-[2.5rem] md:text-6xl lg:text-8xl xl:text-9xl">krishnapriya </h1>
            </div>
          </div>
          <div className="overflow-hidden w-full">
            <div className="whitespace-nowrap animate-marquee-right w-full flex items-center justify-center">
              <h1 className="text-[2.5rem] md:text-6xl lg:text-8xl xl:text-9xl">venkatakrishnan </h1>
            </div>
          </div>  
        </div>

        <div className="tracking-wide text-center sm:text-xl py-4 uppercase 2xl:text-[1.5rem]">
            A <span className="font-bold underline">web developer</span>, based in Stockholm
        </div>

        <div className="flex items-end justify-center px-8 pb-18">
          <div className="text-center tracking-wide sm:text-xl max-w-[800px] 2xl:text-[1.5rem]">
          Former banking software engineer turned web developer, passionate about crafting responsive and modern web applications using React, Next.js, and MongoDB.
          </div>
        </div>

        <div className="flex items-center">
          <Link href="#projects">
            <div
              className="h-[40px] w-[40px] md:h-[55px] md:w-[55px] lg:h-[70px] lg:w-[70px] animate-bounce cursor-pointer flex items-center justify-center"
            >
              <IconChevronsDown className="h-full w-full" />
            </div>
          </Link>
        </div>
    </section>
  )
}

export default Intro