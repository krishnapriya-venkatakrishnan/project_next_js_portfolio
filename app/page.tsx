"use client";

import { ContactForm } from "@/components/ContactForm";
import Details from "@/components/Details";
import Intro from "@/components/Intro";
import Navbar from "@/components/Navbar";
import Popup from "@/components/Popup";
import { TooltipProvider } from "@/components/ui/Tooltip";
import Works from "@/components/Works";
import { useProject } from "@/context/ProjectContext";

export default function Home() {
  const { showPopUp } = useProject();
  return (
      <main className={`text-[#A55166]  w-screen h-screen m-0 p-0 xs
        ${showPopUp ? "overflow-hidden": ""}
      `}>
        {showPopUp && <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />}
        <div className="text-[#A55166]">
          {/* <Resume /> */}
          
        <TooltipProvider>
          <Navbar />
        </TooltipProvider>
          <Intro />
        </div>
        <div className="bg-black text-[#FFD1DC] p-8">
          <Works />
        </div>
        <div className="p-8 text-[#A55166]">
          <Details />
        </div>
        <div className="bg-black text-[#FFD1DC] p-8">
          <ContactForm />
        </div>
        {showPopUp && <Popup />}
      </main>
  );
}
