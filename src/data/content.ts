export const profile = {
  name: "Alex Morgan",
  title: "AI Developer | Content Creator",
  tagline:
    "I build fast, accessible web products and share what I learn about AI, tooling, and modern frontend craft.",
  email: "hello@example.com",
  location: "Remote · Earth",
  avatar: "/avatar-placeholder.svg",
  /** Add `public/resume.pdf` for one-click download; link still works for resume requests. */
  resumeUrl: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/example",
    github: "https://github.com/example",
    instagram: "https://www.instagram.com/example",
  },
};

export const about = {
  bio: [
    "I’m a developer and creator who enjoys turning ideas into shipped software — from polished UIs to ML-powered features.",
    "My background blends product engineering, developer education, and a steady curiosity for how AI can augment creative work.",
    "When I’m not coding, I’m writing, recording, and experimenting with new tools in public.",
  ],
  highlights: [
    "5+ years shipping web apps for startups and side projects",
    "Focus on performance, a11y, and maintainable design systems",
    "Active in open source and content around AI + frontend",
  ],
};

export type SkillCategory = "Frontend" | "Backend" | "Tools / AI tools";

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "React & TypeScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Web APIs & a11y", level: 85, category: "Frontend" },
  { name: "Node.js & Express", level: 82, category: "Backend" },
  { name: "REST & APIs", level: 88, category: "Backend" },
  { name: "Postgres / Firebase", level: 75, category: "Backend" },
  { name: "Git & CI (Vite, ESLint)", level: 90, category: "Tools / AI tools" },
  { name: "Cursor, Copilot, LLM APIs", level: 86, category: "Tools / AI tools" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl: string;
  repoUrl: string;
  image?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Neon Dashboard",
    description:
      "Analytics dashboard with glassmorphism UI, real-time charts, and role-based views.",
    stack: ["React", "Vite", "Tailwind", "Recharts"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/neon-dashboard",
    tags: ["web", "dashboard"],
  },
  {
    id: "2",
    title: "Prompt Kit",
    description:
      "A small library and CLI to template and validate LLM prompts in TypeScript projects.",
    stack: ["TypeScript", "Node", "Zod"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/prompt-kit",
    tags: ["ai", "devtools"],
  },
  {
    id: "3",
    title: "Orbit Notes",
    description:
      "Lightweight PWA for capturing ideas with offline support and end-to-end friendly architecture.",
    stack: ["React", "IndexedDB", "Workbox"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/orbit-notes",
    tags: ["web", "pwa"],
  },
  {
    id: "4",
    title: "Content Studio",
    description:
      "Internal tool for planning and scheduling multi-channel posts with a Kanban flow.",
    stack: ["Next.js", "Prisma", "Postgres"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/example/content-studio",
    tags: ["web", "fullstack"],
  },
];

export type TimelineItem = {
  id: string;
  title: string;
  org: string;
  range: string;
  detail?: string;
};

export const experience: TimelineItem[] = [
  {
    id: "e1",
    title: "Senior Frontend Engineer",
    org: "Northwind Labs",
    range: "2023 — Present",
    detail: "Design systems, performance, and AI-assisted workflows across product teams.",
  },
  {
    id: "e2",
    title: "Full-Stack Developer",
    org: "Aurora Studio",
    range: "2020 — 2023",
    detail: "Shipped customer-facing apps with React, Node, and serverless on Vercel.",
  },
  {
    id: "e3",
    title: "B.S. Computer Science",
    org: "State University",
    range: "2016 — 2020",
  },
];

export const navLinks = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
] as const;

export const projectFilters = ["all", "web", "ai", "fullstack", "pwa", "dashboard", "devtools"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
