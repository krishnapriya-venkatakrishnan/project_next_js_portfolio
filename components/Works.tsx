"use client";

import { useProject } from "@/context/ProjectContext";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const details = [
  {
    title: "Dev Overflow",
    imageSrc: "/assets/sq-devflow.png",
    description: "Dev Overflow is a full-stack Q&A web application inspired by Stack Overflow, built with scalable architecture and a strong focus on user experience. The layout features a persistent top navigation bar with global search and a responsive three-column container: a left sidebar for navigation, a central area for dynamic content, and a right sidebar highlighting top questions and popular tags. Users can securely sign in using email/password or social accounts, navigate through dynamic routes with URL state management, and explore questions via filters, pagination, and local search. They can also submit questions and answers, enhanced by OpenAI-generated suggestions, and engage through upvotes and downvotes. The backend, powered by MongoDB, handles users, accounts, questions, answers, tags, votes, and interactions, with server actions and API routes managing data operations. Additional highlights include user profiles with reputation scores and badges, a Find Jobs page integrated with the Arbetsförmedlingen API, community and collection views, and full theme support (light, dark, and system modes).",
    stack: ["Next.js", "React", "TypeScript", "MongoDB", "TailwindCSS", "OpenAI API", "NextAuth.js", "Shadcn UI", "Zod"],
    deployedLink: "https://nextjs-devflow-nu.vercel.app/",
  },
  {
    title: "3D Animated Website",
    imageSrc: "/assets/sq-animated.png",
    description: "This 3D animated website starts with a loading page that appears while the elements are being loaded. Once the content is ready, the homepage displays a background video, which plays the next video when hovered over at the center. Below the video, an animated image section creates the illusion of entering a new world. The site also features a section with bento card-styled features, incorporating tilt effects, followed by a story section with another animated image. A floating navigation bar with an audio feature appears when scrolling up, enhancing the interactive experience. Finally, the contact section and footer complete the layout. Built with React.js, GSAP (with ScrollTrigger for scroll-triggered animations), and TailwindCSS, this website combines interactivity, immersive design, and dynamic user engagement",
    stack: ["React", "JavaScript", "GSAP", "TailwindCSS"],
    deployedLink: "https://project-3d-animated-website.vercel.app/",
  },
  {
    title: "Livedocs Editor",
    imageSrc: "/assets/sq-livedocs.png",
    description: "The Collaborative Document Editor is a modern, real-time editing platform built using Next.js App Router, Clerk for authentication, and Liveblocks for real-time collaboration. It's designed to deliver a seamless and interactive document editing experience - whether you're working solo or collaborating with a team. Key Features include- Create & Manage Documents: start new documents, update existing ones, or delete with ease from a unified dashboard; Real-Time Collaboration- multiple users can edit the same document simultaneously with presence indicators and cursor tracking; Access control- share documents as view-only or grant editing access using a simple sharing modal; Commenting System- add contextual comments to specific text blocks or reply to feedback in real-time; In-App Notifications- stay updated when someone shares a document with you or invites you to collaborate; Persistence with Liveblocks Storage- all changes are synced and persisted using Liveblocks' storage APIs - even comments are synced across sessions.",
    stack: ["Next.js", "React", "JavaScript", "Clerk", "Liveblocks", "Shadcn UI", "TailwindCSS"],
    deployedLink: "https://project-live-docs.vercel.app/",
  },
  {
    title: "Saas Landing Page",
    imageSrc: "/assets/sq-saas.png",
    description: "This scroll-based website opens with a fixed navigation bar that adapts as the user scrolls, offering smooth transitions and active link highlights tied to scroll position. The mobile view features a toggleable menu with background imagery and icon animations for an engaging touch. Throughout the site, content is dynamically pulled from a centralized configuration file, making the layout modular and easy to maintain. Interactive buttons with glowing gradient effects enhance the UI, while animated pricing transitions are powered by 'react-countup', allowing seamless toggling between monthly and yearly plans. Elements across the site respond with smooth hover and scroll-based transitions using Tailwind utilities and 'react-scroll'. Collapsible components like FAQs use controlled states and animated reveals using 'react-slidedown'. Built with React, TailwindCSS, and lightweight animation libraries, this website delivers a sleek, interactive journey optimized for both desktop and mobile users.",
    deployedLink: "https://project-landing-page-one.vercel.app/",
    stack: ["React", "JavaScript", "TailwindCSS"]
  }
];

const Works = () => {
  const { togglePopUp, setProjectDetails } = useProject();
  return (
    <section id="projects" className="max-w-5xl mx-auto">
      <h3 className="font-bold tracking-wide">DEVELOPMENT PROJECTS</h3>
      <p className="mt-2">Below are some of my select projects.</p>
      <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {details.map(({title, imageSrc, description, stack, deployedLink}) => (
          <div key={title} className="flex flex-col gap-2 w-[338px] lg:w-[480px] ">
            <div className="flex items-center justify-between">
              <p className="">{title}</p>
              <ArrowUpRight 
                className="border rounded-full font-bold size-4 mt-1 cursor-pointer"
                onClick={() => {
                  togglePopUp()
                  setProjectDetails(title, description, stack, deployedLink)
                }}
              />
            </div>
            <div className="relative w-[338px] h-[246px] lg:w-[480px] lg:h-[360px]">
              <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover border-2 border-[#FFD1DC]"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Works