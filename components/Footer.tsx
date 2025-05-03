"use client";

import { useToast } from "@/hooks/useToast"
import { IconBrandGithub, IconBrandLinkedin, IconDownload, IconMail, IconPhone } from "@tabler/icons-react"
import Link from "next/link"

const Footer = () => {
  
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

  return (
    <footer className="min-h-[40px] w-full bg-gradient-to-br from-black to-neutral-600 font-medium text-white dark:text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset] flex items-center justify-evenly py-2 2xl:py-4">
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
        
    </footer>
  )
}

export default Footer