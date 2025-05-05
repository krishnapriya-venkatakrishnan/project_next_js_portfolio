"use client";

import { useToast } from "@/hooks/useToast"
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconPhone } from "@tabler/icons-react"
import Link from "next/link"
import { motion } from "motion/react";

const ContactLinks = () => {
  
  const { toast } = useToast();

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        toast({
          title: "Copied!",
          description: text,
        });
      })
      .catch((err) => {
        toast({
          title: "Error!",
          description: `Error while copying ${text}: ${err}`
        });
      });
  }
  
  const downloadResume = () => {
    toast({
      title: "Downloaded!",
      description: "Resume downloaded",
    });
  }

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
      className="min-h-[40px] w-full font-medium text-black dark:text-white flex dark:bg-dot-white/[0.2] rounded-3xl bg-dot-black/[0.2] items-center justify-evenly py-2 2xl:py-4 max-w-[400px] mx-auto mb-8"
      style={{
        background:
          "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
        backgroundSize: "400% 400%",
      }}
    >
      <motion.div className="relative h-full w-full rounded-3xl flex items-center justify-evenly">
      <IconMail className="cursor-pointer" onClick={() => copyText("krishnapriyavenkatakrishnan@gmail.com")} />
      <IconPhone className="cursor-pointer" onClick={() => copyText("+46 736595250")} />
      <Link
          href="https://github.com/krishnapriya-venkatakrishnan?tab=repositories"
          target="_blank"
      >
        <IconBrandGithub className="cursor-pointer" />
      </Link>
      
      <Link
        href="https://www.linkedin.com/in/krishnapriya-venkatakrishnan-891b4819a/"
        target="_blank"
      >
        <IconBrandLinkedin className="cursor-pointer" />
      </Link>
      
      <a href="/Krishnapriya_Venkatakrishnan_Resume.pdf" download onClick={downloadResume}>
          <IconDownload className="cursor-pointer" />
      </a>
      </motion.div>
      </motion.div>
  )
}

export default ContactLinks