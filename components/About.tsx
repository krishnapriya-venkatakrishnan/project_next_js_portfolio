"use client";
import { cn } from "@/lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export function BentoGridThirdDemo() {
  return (
    <section id="about" className="pb-10 w-full flex flex-col mx-auto">
      <h2 className="font-semibold text-[#555555] dark:text-white pb-4">
        ABOUT
      </h2>
      <div className="flex-1 w-full flex flex-col items-center justify-center gap-2">
        <div className="flex-1 self-start  flex items-center gap-10 max-lg:flex-col">
          <div className="space-y-4 text-gray-800 dark:text-gray-200">
            <p>I thrive at the intersection of technology and design, creating intuitive, responsive interfaces that captivate users and deliver tangible value.</p>

            <p>After nearly six years in banking software, I pivoted to web development, mastering React, Next.js, TypeScript, Firebase, Supabase, and MongoDB. This transition empowered me to merge technical depth with a user-centric approach, building solutions that are both robust and elegant.</p>

            <p>Through hands-on projects and specialized courses, I refine applications from concept to deployment, ensuring performance, usability, and polished design — transforming ideas into digital experiences that users love.</p>
              
          </div>
        </div>
        {/* <div className="w-full self-start flex max-lg:flex-col justify-between gap-4 px-4 lg:mt-6">
          <div className="flex flex-1 flex-col gap-4 justify-start ">
            <p className="text-[1.125rem] lg:text-[1.25rem] font-bold 2xl:text-[1.5rem] pb-1 ">certificates.</p>
            <Certificates />
          </div>
        </div> */}
        
      </div>
    </section>
  );
}

const Certificates = () => {

  const [display, setDisplay] = useState({
    index: 0,
    name: "intern"
  });

  const handleClick = (side: string) => {
    if (side === "right")
      setDisplay(prev => prev.name === "intern" 
        ? {index: 1, name: "jsMastery"} 
          : prev.name === "jsMastery"
            ? {index: 2, name: "scrimba"} 
            : {index: 0, name: "intern"});
    else
      setDisplay(prev => prev.name === "intern" 
        ? {index: 2, name: "scrimba"} 
          : prev.name === "scrimba"
            ? {index: 1, name: "jsMastery"} 
            : {index: 0, name: "intern"});
  }

  return (
    <>
    <motion.div
      className="flex flex-col items-center gap-4 flex-1 w-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-2"
    >
      <motion.div
        className={cn("lg:h-[24rem] w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between max-lg:max-w-[300px] lg:max-w-[600px] max-lg:self-start", display.name !== "intern" && "hidden")}
      >
        <Image
          src="/assets/intern-certificate-2.png"
          alt="avatar"
          height={100}
          width={400}
          className="rounded-tl-2xl rounded-tr-2xl w-[80%] h-full max-lg:max-w-[300px] lg:max-w-[600px] object-cover zoom-in"
        />
        <p className="flex-1 flex justify-center items-center text-[0.9rem] py-2">Ezichoice Internship</p>
      </motion.div>
      <motion.div
        className={cn("lg:h-[24rem] w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between max-lg:max-w-[300px] lg:max-w-[600px] max-lg:self-start", display.name !== "jsMastery" && "hidden")}
      >
        <Image
          src="/assets/jsmastery-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="aspect-[16/9] rounded-tl-2xl rounded-tr-2xl w-full max-lg:max-w-[300px] lg:max-w-[600px]"
        />
        <p className="flex-1 flex justify-center items-center text-[0.9rem] py-2">Javascript Mastery</p>
      </motion.div>
      <motion.div
        className={cn("lg:h-[24rem] w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between max-lg:max-w-[300px] lg:max-w-[600px] max-lg:self-start", display.name !== "scrimba" && "hidden")}
      >
        <Image
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="aspect-[16/9] rounded-tl-2xl rounded-tr-2xl w-full max-lg:max-w-[300px] lg:max-w-[600px]"
        />
        <p className="flex-1 flex justify-center items-center text-[0.9rem] py-2">Scrimba</p>
      </motion.div>
      <div className="max-lg:self-start flex justify-end items-center gap-2 mb-4 pt-2 max-lg:max-w-[300px] lg:max-w-[600px]">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          onClick={() => handleClick("left")}
        >
          <IconArrowNarrowLeft className="h-6 w-6  text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          onClick={() => handleClick("right")}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </motion.div>
    </>
  );
};
