export const profile = {
  name: "Nilanchal Sahu",
  title: "AI/ML Engineer | Data Science Lead",
  tagline:
    "I build enterprise AI solutions — from LLM-powered voice analytics and prompt fine-tuning to scalable ML APIs on cloud-native infrastructure.",
  email: "tech.nilanchala25@gmail.com",
  phone: "+91 9040358148",
  location: "Burla, Odisha · India",
  avatar: "/avatar.jpg",
  resumeUrl: "/CV_Nilanchala_Sahu.docx",
  social: {
    linkedin: "https://www.linkedin.com/in/nilanchal-sahu",
    github: "https://github.com/nilanchalsahu",
    website: "https://www.nitaclasses.in",
  },
};

export const about = {
  bio: [
    "I'm an AI/ML Engineer specializing in enterprise AI solutions, with deep experience in voice call analysis, evaluation prompt fine-tuning, and predictive model deployment.",
    "At Pragyaa.ai, I deploy models via AWS Lambda and API Gateway, build backend inference logic, and design microservices architectures on cloud-native VM environments.",
    "Beyond enterprise AI, I founded and run NITA Classes — an online LMS and coaching academy at nitaclasses.in — combining technical leadership with education and product ownership.",
  ],
  highlights: [
    "5+ years building AI/ML systems for banking, healthcare, and enterprise domains",
    "Expertise in LLMs, prompt engineering, model deployment, and REST/microservices APIs",
    "Certified AI Intelligence Business Analyst (SSC/Q8102) with microservices & cloud credentials",
  ],
};

export type SkillCategory = "AI / ML" | "Backend & Cloud" | "Languages & Tools";

export type Skill = {
  name: string;
  level: number;
  category: SkillCategory;
};

export const skills: Skill[] = [
  { name: "AI/ML & LLMs", level: 94, category: "AI / ML" },
  { name: "Prompt Engineering", level: 92, category: "AI / ML" },
  { name: "Model Deployment & Inference", level: 90, category: "AI / ML" },
  { name: "OpenSearch & Analytics", level: 85, category: "AI / ML" },
  { name: "AWS Lambda & API Gateway", level: 90, category: "Backend & Cloud" },
  { name: "Azure & GCP", level: 82, category: "Backend & Cloud" },
  { name: "FastAPI, Flask & REST APIs", level: 92, category: "Backend & Cloud" },
  { name: "Docker, Linux & Microservices", level: 88, category: "Backend & Cloud" },
  { name: "Python", level: 94, category: "Languages & Tools" },
  { name: "Java", level: 85, category: "Languages & Tools" },
  { name: "React", level: 80, category: "Languages & Tools" },
  { name: "SQL & MySQL", level: 88, category: "Languages & Tools" },
];

export type Project = {
  id: string;
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string;
  tags: string[];
};

export const projects: Project[] = [
  {
    id: "1",
    title: "AI Voice Analytics & Call Evaluation",
    description:
      "LLM-based pipelines for analysing voice call transcripts — evaluating call quality, generating summaries and verbatims, and extracting actionable insights. Optimized prompts and evaluation logic across banking and healthcare domains.",
    stack: ["LLMs", "Python", "Prompt Engineering", "AWS"],
    tags: ["ai", "llm", "enterprise"],
  },
  {
    id: "2",
    title: "AI/ML Prediction & API Services Platform",
    description:
      "Designed and deployed predictive ML models as scalable API services with backend inference logic and cloud-native deployments using serverless and VM-based architectures.",
    stack: ["Python", "FastAPI", "AWS Lambda", "Docker"],
    tags: ["ai", "ml", "cloud"],
  },
  {
    id: "3",
    title: "NITA Classes — LMS & Coaching Academy",
    description:
      "Built and operate a full online learning management system and coaching academy. Own the institute end-to-end — platform, content, and operations.",
    stack: ["React", "Python", "MySQL", "REST APIs"],
    liveUrl: "https://www.nitaclasses.in",
    tags: ["lms", "fullstack", "education"],
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
    title: "AI / ML Engineer",
    org: "Pragyaa.ai",
    range: "Present",
    detail:
      "Enterprise AI solutions: voice call analysis, LLM prompt fine-tuning, predictive model deployment on AWS Lambda & API Gateway, and microservices architecture.",
  },
  {
    id: "e2",
    title: "Founder & Owner",
    org: "NITA Classes (nitaclasses.in)",
    range: "Present",
    detail:
      "Developed and run an online LMS and coaching academy — owning the platform, curriculum, and institute operations.",
  },
  {
    id: "e3",
    title: "M.C.A. — Master of Computer Application",
    org: "VSSUT, Burla, Odisha",
    range: "Completed",
    detail: "Postgraduate degree in computer applications.",
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

export const projectFilters = ["all", "ai", "ml", "llm", "cloud", "enterprise", "lms", "fullstack", "education"] as const;
export type ProjectFilter = (typeof projectFilters)[number];
