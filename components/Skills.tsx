"use client";

import { motion } from "framer-motion";

const techStack = [
  {
    title: "Frontend",
    direction: "left",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "Material UI"]
  },
  {
    title: "Backend & Data",
    direction: "right",
    items: ["Supabase", "Firebase", "MongoDB", "Liveblocks"]
  },
  {
    title: "Auth & Validation",
    direction: "left",
    items: ["NextAuth", "Clerk", "Zod"]
  },
  {
    title: "UI & Animations",
    direction: "right",
    items: ["Framer Motion", "GSAP", "Aceternity UI"]
  },
  {
    title: "Tooling & Deployment",
    direction: "left",
    items: ["Git / GitHub", "Vercel", "OpenAI APIs"]
  }
];


const MotionRow = ({ items, direction = "left" }) => {
  const xAnimation =
    direction === "left"
      ? ["0%", "-50%"]
      : ["-50%", "0%"]

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          visible: {
            transition: { staggerChildren: 0.05 },
          },
        }}
        className="flex flex-wrap gap-4 text-sm border-b-1 border-gray-100 pb-1"
      >
        {items.join(", ")}
      </motion.div>
    </div>
  )
}


const Skills = () => {
  return (
    <section className="pb-10 w-full">
      <h2 className="pb-4 font-semibold text-[#555555] dark:text-white">
        STACK
      </h2>

      <div className="space-y-2">
        {techStack.map((group) => (
          <div key={group.title}>
            <p className="text-sm font-medium mb-2 opacity-70 text-[#505050]">
              {group.title}
            </p>
            <MotionRow
              items={group.items}
              direction={group.direction}
            />
          </div>
        ))}
      </div>
    </section>

  )
}

export default Skills;