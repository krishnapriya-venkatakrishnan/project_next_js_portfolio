"use client";


export function Experience() {
const experiences = [
  {
    company: "Ezichoice AB, Stockholm, Sweden",
    date: "Aug 2025 - Jan 2026",
    paragraph: `
As a Full-Stack Developer Intern at Ezichoice AB, I contributed to building full-stack features using React, Next.js, TypeScript, JavaScript, and Supabase. I implemented responsive and intuitive UI components, collaborated closely with the development team to design scalable solutions, and ensured high-performance and smooth user experiences across the application.
    `,
  },
  {
  company: "Temenos India Private Limited, Chennai, India",
  date: "Dec 2016 - Dec 2022",
  paragraph: `
I progressed from T24 Software Developer to T24 Specialist and finally to Associate Lead Product Engineer. During this time, I developed and tested banking software modules, prepared technical design documents, delivered client demos, mentored junior developers, led technical initiatives, coordinated with stakeholders, conducted risk assessments, and ensured high-quality outcomes. This experience strengthened my problem-solving, collaboration, and leadership skills while building scalable, reliable software solutions.
  `,
}
];


  return (
    <section className="pb-10 max-w-7xl mx-auto">
      <h2 className="font-semibold text-[#555555] pb-4 dark:text-white">
        EXPERIENCE
      </h2>

      <div className="relative flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <div key={index} className="">
            <h3 className="font-medium text-[#222222] dark:text-white">
              {experience.company}
            </h3>
            <p className="pb-4 max-lg:text-[0.9rem] italic">
              {experience.date}
            </p>
            <p className="max-lg:text-[0.9rem]">
              {experience.paragraph}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
