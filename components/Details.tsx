
const Details = () => {
  return (
    <section className="w-full flex flex-col gap-4 max-w-5xl mx-auto">
      <div id="stack">
        <h3 className="font-bold tracking-wide pb-4 text-black">STACK</h3>
        <p className=''>
          <span className='font-bold'>FRONTEND: </span> React | Next.js | TypeScript | JavaScript | Tailwind CSS | Material UI <br />
          <span className='font-bold'>BACKEND & DB: </span> Node.js | Supabase | Firebase | MongoDB <br />
          <span className='font-bold'>TOOLS & DEPLOYMENT: </span> Figma | Git | GitHub | Vercel | OpenAI APIs
        </p>
      </div>
      <div id="experience">
        <h3 className="font-bold tracking-wide pb-4 text-black">EXPERIENCE</h3>
        <h4 className="font-medium">Ezichoice AB, Stockholm, Sweden</h4>
        <p className="italic text-sm">Aug 2025 - Jan 2026</p>
        <p className="mt-2">
          As a Full-Stack Developer Intern at Ezichoice AB, I contributed to building full-stack features using React, Next.js, TypeScript, JavaScript, and Supabase. I implemented responsive and intuitive UI components, collaborated closely with the development team to design scalable solutions, and ensured high-performance and smooth user experiences across the application.
        </p>
        <h4 className="font-medium mt-4">Temenos India Private Limited, Chennai, India</h4>
        <p className="italic text-sm">Dec 2016 - Dec 2022</p>
        <p className="mt-2">
          I progressed from T24 Software Developer to T24 Specialist and finally to Associate Lead Product Engineer. During this time, I developed and tested banking software modules, prepared technical design documents, delivered client demos, mentored junior developers, led technical initiatives, coordinated with stakeholders, conducted risk assessments, and ensured high-quality outcomes. This experience strengthened my problem-solving, collaboration, and leadership skills while building scalable, reliable software solutions.
        </p>
      </div>
      <div id="education">
        <h3 className="font-bold tracking-wide pb-4 text-black">EDUCATION</h3>
        <p>
          Computer Science graduate with a strong foundation in software engineering principles, complemented by hands-on training in modern web development through Scrimba(The Frontend Developer Career Path) and JS Mastery(The Ultimate Next.js 15 Course). Experienced in building production-ready, full-stack applications with React and Next.js, focusing on clean architecture, performance, and scalable UI development.
        </p>
      </div>
    </section>
  )
}

export default Details