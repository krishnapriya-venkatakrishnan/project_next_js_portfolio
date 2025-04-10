"use client";

import { useToast } from "@/hooks/useToast"
import { IconCopy, IconCornerUpRightDouble } from "@tabler/icons-react"
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
  
  return (
    <div className="flex max-sm:flex-col items-center justify-center py-4 gap-2 max-w-9xl">
      <div className="flex items-center justify-center p-2 gap-1">
        <p>krishnapriyavenkatakrishnan@gmail.com</p>
        <span onClick={() => copyText("krishnapriyavenkatakrishnan@gmail.com")} className="cursor-pointer"><IconCopy /></span>
      </div>

      <div className="flex items-center justify-center p-2 gap-1">
        <p>+46 736595250</p>
        <span onClick={() => copyText("+46 736595250")} className="cursor-pointer"><IconCopy /></span>
      </div>

      
      <div className="flex items-center justify-center p-2 gap-1">
        <p>GitHub</p>
        <Link
          href="#"
        >
          <span><IconCornerUpRightDouble /></span>
        </Link>
      </div>
      

      <div className="flex items-center justify-center p-2 gap-1">
        <p>LinkedIn</p>
        <Link
          href="#"
        >
          <span><IconCornerUpRightDouble /></span>
        </Link>
      </div>
    
    </div>
  )
}

export default Footer