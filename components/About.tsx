"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { SiClerk, SiCss3, SiFirebase, SiGit, SiJavascript, SiMongodb, SiNextdotjs, SiOpenai, SiReact, SiReactrouter, SiShadcnui, SiTailwindcss, SiTypescript, SiZod } from "react-icons/si";
import GsapLogo from "./GsapLogo";
import { cn } from "@/lib/utils";
import { IconArrowNarrowLeft, IconArrowNarrowRight } from "@tabler/icons-react";

export function BentoGridThirdDemo() {
  return (
    <section id="about" className="w-full flex flex-col max-w-7xl mx-auto">
      <h2 className="my-10 h-[10dvh] font-bold tracking-[0.125rem] text-center text-[1.75rem] lg:text-[3rem] 2xl:text-[4rem]">about me.</h2>
      <div className="flex-1 w-full lg:py-8 flex flex-col items-center justify-center tracking-wide gap-2">
        <div className="flex-1 self-start px-4 max-lg:text-[0.9rem]">
          <ProfilePicture />
          I&apos;m a passionate self-taught front-end developer with a background in banking software (T24). After nearly six years in the fintech industry, I transitioned into web development to bring ideas to life visually and interactively.<br /><br />

          I specialize in building clean, responsive UIs using React, Next.js, and modern front-end tools. I&apos;m particularly excited about exploring animation libraries like GSAP to create engaging and dynamic user experiences.<br /><br />

          To fuel my transition into web development, I completed a Front-End Development course through Scrimba, where I gained proficiency in React, JavaScript, HTML, and CSS. Additionally, I deepened my expertise with JS Mastery, focusing on Next.js and MongoDB to build scalable, high-performance web applications.<br /><br />

          In December 2022, I relocated to Stockholm, Sweden, after a career shift. I also had the opportunity to travel and explore diverse cultures, which helped me shape a global perspective on design and technology.<br /><br />

          My long-term goal is to expand my skill set further and grow into a full-stack developer, with a focus on building end-to-end applications.<br /><br />

          For more details on my background, education, and work experience, feel free to download my <a href="/Krishnapriya_Venkatakrishnan_Resume.pdf" download className="underline">resume</a>.
        </div>
        <div className="w-full self-start flex max-lg:flex-col justify-between gap-4 px-4 lg:mt-6">
          <div className="flex-1">
            <p className="text-[1.125rem] lg:text-[1.25rem] font-bold 2xl:text-[1.5rem] pb-1 ">technologies.</p>
            <table className="flex">
              <thead></thead>
              <tbody className="mt-4">
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Frontend</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiReact className="text-[#61DAFB] lg:text-2xl" />
                      <SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />
                      <SiTypescript className="text-[#3178C6] lg:text-2xl" />
                      <SiJavascript className="text-[#F7DF1E] lg:text-2xl" />
                      <SiTailwindcss className="text-[#06B6D4] lg:text-2xl" />
                      <SiCss3 className="text-[#264DE4] lg:text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Backend & Databases</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiMongodb className="text-green-400 lg:text-2xl" />
                      <SiFirebase className="text-[#FFCA28] lg:text-2xl"/>
                      <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
                      <Image src="/assets/logo-live-docs.png" alt="liveblocks" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">UI & Design Systems</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiShadcnui className="text-[#000] dark:text-[#fff] lg:text-xl" />
                      <span className="font-sans font-black  dark:text-white text-[1.125rem]">Aceternity UI</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Authentication</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiClerk className="text-[#000] dark:text-[#fff] lg:text-2xl" />
                      <Image src="/assets/next-auth.png" alt="next-auth" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Validation</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiZod className="text-[#06B6D4] lg:text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Routing</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiReactrouter className="text-[#CA4245] lg:text-2xl" />
                      <SiNextdotjs className="text-[#000] dark:text-[#fff] lg:text-2xl" />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">Animations</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <GsapLogo />
                    </div>
                  </td>
                </tr>
                <tr className="border-b-1 max-lg:text-[0.9rem]">
                  <td className="py-2">APIs & Tools</td>
                  <td className="px-2">
                    <div className="flex items-center gap-4">
                      <SiOpenai className="lg:text-2xl"/>
                      <SiGit className="text-[#F05032] lg:text-2xl" />
                      <Image src="/assets/vs-code-logo.svg" alt="vs-code" height={25} width={25} className="rounded-full max-lg:h-[20px] max-lg:w-[20px]" />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-1 flex-col gap-4 justify-start ">
            <p className="text-[1.125rem] lg:text-[1.25rem] font-bold 2xl:text-[1.5rem] pb-1 ">certificates.</p>
            <Certificates />
          </div>
        </div>
        
      </div>
    </section>
  );
}

const ProfilePicture = () => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={variants}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      className="flex flex-1 max-lg:w-[175px] max-lg:h-[175px] w-[255px] h-[255px] min-h-[6rem] dark:bg-dot-white/[0.2] rounded-3xl bg-dot-black/[0.2] flex-col float-left mr-4"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="relative h-full w-full rounded-3xl flex items-center justify-center">
        <Image
        src="/assets/profile.jpg"
        alt="Profile"
        width={250}
        height={250}
        className="rounded-3xl border-4"
        />
      </motion.div>
    </motion.div>
  );
};

const Certificates = () => {

  const [display, setDisplay] = useState("scrimba");

  const handleClick = () => {
    setDisplay(prev => prev === "scrimba" ? "jsMastery": "scrimba");
  }

  return (
    <>
    <motion.div
      className="flex flex-col items-center gap-4 flex-1 w-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] space-x-2"
    >
      <motion.div
        className={cn("w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between max-lg:max-w-[400px] max-lg:self-start", display !== "scrimba" && "hidden")}
      >
        <Image
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className=" rounded-tl-2xl rounded-tr-2xl w-full max-lg:max-w-[400px]"
        />
        <p className="flex-1 flex justify-center items-center text-[0.9rem] py-2">From Scrimba</p>
      </motion.div>
      
      <motion.div
        className={cn("w-full rounded-2xl bg-white dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-between max-lg:max-w-[500px] max-lg:self-start", display === "scrimba" && "hidden")}
      >
        <Image
          src="/assets/scrimba-certificate.png"
          alt="avatar"
          height={100}
          width={400}
          
          className="object-contain rounded-tl-2xl rounded-tr-2xl w-full max-lg:max-w-[500px]"
        />
        <p className="py-2 flex-1 flex justify-center items-center text-[0.9rem]">From JavaScript Mastery</p>
      </motion.div>

      <div className="max-lg:self-start flex justify-end items-center gap-2 mb-4 pt-2 max-lg:max-w-[500px]">
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          onClick={handleClick}
          disabled={display === "scrimba"}
        >
          <IconArrowNarrowLeft className="h-6 w-6  text-gray-500" />
        </button>
        <button
          className="relative z-40 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center disabled:opacity-50 cursor-pointer"
          onClick={handleClick}
          disabled={display !== "scrimba"}
        >
          <IconArrowNarrowRight className="h-6 w-6 text-gray-500" />
        </button>
      </div>
    </motion.div>
    </>
  );
};
