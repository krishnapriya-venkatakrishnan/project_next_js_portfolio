// Single source of content for the site.
// Anything still bracketed [FILL IN: ...] is a placeholder to replace.

export type CaseStudy = {
  readonly slug: string;
  readonly name: string;
  /** One sharp line under the name: a problem statement or a result. */
  readonly tagline: string;
  readonly problem: string;
  /** "What I did": a few tight points, contribution first. */
  readonly contribution: readonly string[];
  /** "Outcome": what it does, in plain terms. */
  readonly outcome: readonly string[];
  /** Link order is fixed: Live demo first, Repository second. */
  readonly links: readonly { readonly label: string; readonly href: string }[];
  /** Secondary detail, kept small in the UI. */
  readonly stack: readonly string[];
  /** Product screenshot. A missing src/size renders a marked placeholder. */
  readonly screenshot: Image;
};

type Image = {
  readonly src: string;
  readonly width: number;
  readonly height: number;
  readonly alt: string;
};

export type MoreWorkItem = {
  readonly name: string;
  readonly blurb: string;
  readonly tags: readonly string[];
  readonly links: readonly { readonly label: string; readonly href: string }[];
  /** Optional still image. A missing src/size renders a marked placeholder. */
  readonly thumb?: Image;
};

export const site = {
  name: "Krishnapriya Venkatakrishnan",

  // Hero: the whole argument in one line.
  positioning:
    "I build AI and voice systems with fintech-grade reliability, where deterministic code, not the model, makes the decisions that matter.",

  // Credibility strip: one quiet line, visually subordinate to the hero.
  credibility:
    "6 years regulated core banking · recent LLM & voice-agent work · Stockholm",

  hero: {
    primaryCta: { label: "See the work", href: "#work" },
    secondaryCta: { label: "Get in touch", href: "#contact" },
  },

  work: {
    intro:
      "Two systems, one idea: the model handles the conversation, and deterministic code makes the decisions that carry weight. Both were built to be tested by trying hard to break them.",
    diagram: {
      src: "/portfolio-thesis-diagram.svg",
      // Mirrors the aria-label inside the SVG so the description survives being rendered via <img>.
      alt: "How the systems are built: a language model proposes, a deterministic core decides, approves, and verifies using fixed testable rules, and only approved output reaches an action or human review. Anything rejected is contained and nothing is recorded.",
    },
  },

  // About: make the banking to AI move read as a strength.
  about: [
    "For nearly six years I built regulated core-banking software: ledgers, payments, reconciliation. In that world a wrong number isn’t a bug, it’s an incident, and “the system said so” has to hold up to an auditor.",
    "I build AI and voice systems with the same instinct. The model handles language, but the decisions that carry weight run through code that’s fixed and testable, not left to the model. Language models will happily make things up; building this way means that when something goes wrong, it’s contained and I can see it.",
  ],

  // Freelance on-ramp: one low-key line, not a second identity.
  freelance: "Available for select contract work in AI, voice, and full-stack.",

  contact: {
    email: "krishnapriyavenkatakrishnan@gmail.com",
    links: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/krishnapriya-venkatakrishnan-891b4819a/",
      },
      { label: "GitHub", href: "https://github.com/krishnapriya-venkatakrishnan" },
      // Optional: uncomment and fill to offer a calendar link.
      // { label: "Book a call", href: "[FILL IN: calendar link]" },
    ],
  },

  caseStudies: [
    {
      slug: "debt-collection-voice-agent",
      name: "Debt-Collection Voice Agent",
      tagline:
        "A voice agent that negotiates repayment on an overdue account. Every amount it offers is decided by fixed rules, not by the model.",
      problem:
        "Collections calls are heavily regulated. A wrong balance, a discount the company never authorised, or a promise it can’t keep each create real liability, and a model left to its own judgement will produce all three.",
      contribution: [
        "Split the system in two: the model runs the conversation, and a separate rule engine decides what counts as an acceptable repayment arrangement. The model can only quote figures the rules give it, so it cannot invent or approve anything on its own.",
        "Made the rules weigh every legal repayment option against what the caller says they can afford and choose the best one, rather than follow a fixed script.",
        "Built the legal requirements in directly: confirm who you are speaking to before discussing the debt, give the required disclosures, stop when asked, and never threaten or pressure. Every completed call is checked automatically for compliance.",
      ],
      outcome: [
        "The agent cannot state an amount it was not given, and nothing that breaks the rules can be recorded even if it misspeaks.",
        "It was tested against dozens of difficult callers, including people disputing the debt or asking it to stop.",
        "It is live and handling real calls, from both a browser and a phone number.",
      ],
      links: [
        { label: "Live demo", href: "https://debt-collection-v1.vercel.app" },
        {
          label: "Repository",
          href: "https://github.com/krishnapriya-venkatakrishnan/debt.collection.v1",
        },
      ],
      stack: [
        "Deepgram Voice Agent",
        "GPT-4o",
        "Python",
        "FastAPI",
        "PostgreSQL",
        "Supabase",
      ],
      screenshot: {
        src: "/assets/ava-web.png",
        width: 3018,
        height: 1580,
        alt: "The Debt-Collection Voice Agent call view: a live transcript with the automated compliance check shown alongside it.",
      },
    },
    {
      slug: "clinician-in-the-loop-health-visit",
      name: "Clinician-in-the-Loop Health Visit",
      tagline:
        "Software for a preventive-health visit: an AI-drafted summary before the appointment and a plain-language recap afterwards, with every claim checked before the clinician sees it.",
      problem:
        "An AI can draft a genuinely useful summary of a patient’s history. But it should not be trusted to decide whether a figure is accurate, which way a result is trending, or how serious it is.",
      contribution: [
        "The model decides what to highlight and writes the summary. A separate check then verifies every statement against the patient’s actual record: the numbers have to match, the trend direction is recalculated, and the risk level comes from the record, not the model.",
        "Anything that fails a check is set aside in a clearly marked list with the reason, instead of being shown as if it were fact.",
        "The clinician makes every decision, and nothing can be signed off until each item has been reviewed.",
      ],
      outcome: [
        "Planted errors, such as an altered number or a reversed trend, are caught every time, with no false alarms on the correct cases.",
        "The clinician can always see which claims were verified and which were rejected, and why.",
        "It runs on synthetic data only, with no real patient information involved.",
      ],
      links: [
        { label: "Live demo", href: "https://medical-visit-v1.vercel.app/" },
        {
          label: "Repository",
          href: "https://github.com/krishnapriya-venkatakrishnan/medical.visit.v1",
        },
      ],
      stack: [
        "Next.js 16",
        "React 19",
        "TypeScript (strict)",
        "Zod",
        "TanStack Query",
      ],
      screenshot: {
        src: "/assets/med-web.png",
        width: 3018,
        height: 1572,
        alt: "The Clinician-in-the-Loop review screen: one finding verified against the record, another rejected and set aside with its reason.",
      },
    },
  ],

  moreWork: [
    {
      name: "Dev Overflow",
      blurb:
        "Real auth, real CRUD, real users, end to end: a full-stack Stack Overflow-style Q&A app with email and social sign-in, questions and answers with voting, reputation and badges, and a live jobs feed off the Arbetsförmedlingen API.",
      tags: [
        "Next.js",
        "React",
        "TypeScript",
        "MongoDB",
        "NextAuth.js",
        "OpenAI API",
        "Zod",
        "Tailwind",
      ],
      links: [
        { label: "Live demo", href: "https://nextjs-devflow-nu.vercel.app/" },
        {
          label: "Repository",
          href: "https://github.com/krishnapriya-venkatakrishnan/nextjs-devflow",
        },
      ],
      thumb: {
        src: "/assets/devoverflow-web.png",
        width: 3008,
        height: 1584,
        alt: "The Dev Flow question feed: sidebar navigation, global search, a list of questions with tags, vote and view counts, and a Top Questions and Popular Tags rail.",
      },
    },
    {
      name: "3D Animated Website",
      blurb:
        "An immersive, motion-led site: a loading sequence, video transitions, scroll-triggered animation, and a floating audio-enabled nav. Best seen running.",
      tags: ["React", "GSAP", "Tailwind"],
      links: [
        {
          label: "Live demo",
          href: "https://project-3d-animated-website.vercel.app/",
        },
        {
          label: "Repository",
          href: "https://github.com/krishnapriya-venkatakrishnan/project_3d_animated_website_1",
        },
      ],
      thumb: {
        src: "/assets/3d-web.png",
        width: 3014,
        height: 1574,
        alt: "The 3D Animated Website mid-scroll, one video panel expanding into the next scene.",
      },
    },
  ],
} as const;

export type Site = typeof site;
