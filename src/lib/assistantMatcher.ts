import {
  about,
  experience,
  profile,
  projects,
  skills,
} from "../data/content";

export type AssistantIntent = {
  id: string;
  patterns: RegExp[];
  response: string;
  priority: number;
};

const skillSummary = skills.map((s) => s.name).slice(0, 6).join(", ");
const projectList = projects.map((p) => `**${p.title}**`).join(", ");

export const assistantIntents: AssistantIntent[] = [
  {
    id: "greeting",
    patterns: [
      /^(hi|hey|hello|hola|yo|sup|good\s+(morning|afternoon|evening|day))\b/i,
      /\b(namaste|howdy)\b/i,
    ],
    response: `Hello! I'm Nilanchal's portfolio assistant. I can tell you about his **AI/ML work**, **projects**, **skills**, **experience**, or how to **get in touch**. What would you like to know?`,
    priority: 100,
  },
  {
    id: "thanks",
    patterns: [/\b(thanks|thank you|thx|appreciate it|helpful)\b/i],
    response: `You're welcome! Feel free to ask anything else — or scroll to **Contact** if you'd like to reach Nilanchal directly.`,
    priority: 95,
  },
  {
    id: "bye",
    patterns: [/\b(bye|goodbye|see you|later|gotta go)\b/i],
    response: `Goodbye! If you need anything later, just open this chat again. Good luck with your visit!`,
    priority: 95,
  },
  {
    id: "help",
    patterns: [
      /\b(help|what can you do|what do you know|how can you help|options|menu)\b/i,
    ],
    response: `I can answer questions about:\n• **Who Nilanchal is** and his background\n• **Projects** — voice analytics, ML APIs, NITA Classes LMS\n• **Skills** — Python, LLMs, AWS, FastAPI, and more\n• **Experience** at Pragyaa.ai and NITA Classes\n• **Contact** — email, phone, résumé\n\nTry: "Tell me about your AI projects" or "What's your email?"`,
    priority: 90,
  },
  {
    id: "who",
    patterns: [
      /\b(who are you|who is nilanchal|tell me about (you|yourself|him)|about you|introduce)\b/i,
      /\bwhat do you do\b/i,
    ],
    response: `**${profile.name}** is an **${profile.title}** based in ${profile.location}. ${about.bio[0]} He has **${about.highlights[0].toLowerCase()}**.`,
    priority: 88,
  },
  {
    id: "role",
    patterns: [
      /\b(data science|ml engineer|ai engineer|your role|your title|designation|job title)\b/i,
    ],
    response: `Nilanchal is an **${profile.title}**, currently at **Pragyaa.ai**. He specializes in enterprise AI — LLM pipelines, voice call analytics, prompt fine-tuning, and deploying models on **AWS Lambda** and cloud infrastructure.`,
    priority: 85,
  },
  {
    id: "voice-analytics",
    patterns: [
      /\b(voice|call analytics|call evaluation|transcript|verbatim|banking|healthcare)\b/i,
    ],
    response: `His flagship project is **AI Voice Analytics & Call Evaluation** — LLM pipelines that analyse call transcripts, score call quality, generate summaries, and extract insights. He fine-tuned prompts for **banking and healthcare** domains. See the **Projects** section for details.`,
    priority: 84,
  },
  {
    id: "ml-api",
    patterns: [
      /\b(prediction|inference|api service|ml platform|model deploy|serverless|microservice)\b/i,
    ],
    response: `Nilanchal built an **AI/ML Prediction & API Services Platform** — predictive models exposed as scalable REST APIs using **FastAPI**, **AWS Lambda**, and **Docker**, with both serverless and VM-based deployments.`,
    priority: 83,
  },
  {
    id: "nita",
    patterns: [/\b(nita|nitaclasses|lms|coaching|academy|education platform)\b/i],
    response: `Nilanchal founded and runs **NITA Classes** — an online LMS and coaching academy at **nitaclasses.in**. He owns the platform end-to-end: development, curriculum, and operations. It's live at the **Projects** section.`,
    priority: 83,
  },
  {
    id: "projects",
    patterns: [
      /\b(project|portfolio|work sample|case stud|built|developed)\b/i,
    ],
    response: `Key projects: ${projectList}. Scroll to **Projects** to filter by AI, ML, cloud, or education tags.`,
    priority: 80,
  },
  {
    id: "python",
    patterns: [/\b(python|django|flask|fastapi)\b/i],
    response: `Python is a core strength (**${skills.find((s) => s.name === "Python")?.level}%**). Nilanchal uses it for ML pipelines, **FastAPI/Flask** backends, and model inference — alongside **Java** for enterprise systems.`,
    priority: 78,
  },
  {
    id: "aws",
    patterns: [/\b(aws|lambda|api gateway|amazon|cloud deploy)\b/i],
    response: `Nilanchal deploys models on **AWS Lambda** and **API Gateway**, with experience in **Azure**, **GCP**, **Docker**, and Linux-based VM environments. Cloud & microservices are a major part of his day-to-day work at Pragyaa.ai.`,
    priority: 78,
  },
  {
    id: "llm",
    patterns: [/\b(llm|gpt|prompt|generative ai|gen ai|fine-?tun|openai)\b/i],
    response: `LLMs and **prompt engineering** are central to his work — especially for voice transcript analysis, call evaluation logic, and summary generation. He optimizes prompts for accuracy across enterprise domains.`,
    priority: 78,
  },
  {
    id: "skills",
    patterns: [
      /\b(skill|tech stack|stack|technology|tool|expertise|proficient|language)\b/i,
    ],
    response: `Top skills: ${skillSummary}, and more. Categories include **AI/ML**, **Backend & Cloud**, and **Languages & Tools**. Check the **Skills** section for full proficiency bars.`,
    priority: 77,
  },
  {
    id: "experience",
    patterns: [
      /\b(experience|work history|career|employ|pragyaa|company|current job)\b/i,
    ],
    response: experience
      .map((e) => `**${e.title}** at ${e.org} (${e.range})${e.detail ? ` — ${e.detail}` : ""}`)
      .join("\n"),
    priority: 76,
  },
  {
    id: "education",
    patterns: [/\b(education|degree|mca|master|vssut|burla|university|qualification)\b/i],
    response: `Nilanchal holds an **M.C.A. (Master of Computer Application)** from **VSSUT, Burla, Odisha**. He also holds certifications in **AI Intelligence Business Analysis**, microservices, and Python/Java frameworks.`,
    priority: 75,
  },
  {
    id: "certification",
    patterns: [/\b(certif|credential|ssc|business analyst)\b/i],
    response: `Certifications include **AI Intelligence Business Analyst (SSC/Q8102)**, **Microservices Architecture**, **Automation**, **DSA**, and **Python & Advanced Java Programming**.`,
    priority: 74,
  },
  {
    id: "resume",
    patterns: [/\b(resume|résumé|cv|download|document)\b/i],
    response: `You can download Nilanchal's résumé using the **Download résumé** button on the home section, or ask for his email to connect directly.`,
    priority: 73,
  },
  {
    id: "email",
    patterns: [/\b(email|e-mail|mail|gmail|reach out|write to)\b/i],
    response: `Email Nilanchal at **${profile.email}** — or use the **Contact** form on this page.`,
    priority: 72,
  },
  {
    id: "phone",
    patterns: [/\b(phone|call|mobile|number|whatsapp|contact number)\b/i],
    response: `You can reach Nilanchal at **${profile.phone}** or email **${profile.email}**.`,
    priority: 72,
  },
  {
    id: "contact",
    patterns: [
      /\b(contact|connect|hire|collaborat|freelance|available|get in touch|talk to)\b/i,
    ],
    response: `Reach out via **${profile.email}** or **${profile.phone}**. Use the **Contact** section for the form, or find links to **LinkedIn** and **NITA Classes** in the footer.`,
    priority: 71,
  },
  {
    id: "location",
    patterns: [/\b(where|location|based|city|odisha|india|remote)\b/i],
    response: `Nilanchal is based in **${profile.location}**. He's open to connecting for AI/ML and enterprise projects.`,
    priority: 70,
  },
  {
    id: "ai-general",
    patterns: [/\b(ai|artificial intelligence|machine learning|\bml\b|deep learning|data science)\b/i],
    response: `Nilanchal builds **enterprise AI solutions** — from LLM-powered voice analytics to predictive ML APIs on cloud-native infrastructure. He's worked across **banking, healthcare**, and education domains with **5+ years** of experience.`,
    priority: 65,
  },
  {
    id: "years",
    patterns: [/\b(how many years|years of experience|experience level|senior)\b/i],
    response: `Nilanchal has **5+ years** of experience building AI/ML systems, with deep hands-on work in model deployment, backend APIs, and enterprise integrations.`,
    priority: 64,
  },
];

export const assistantSuggestions = [
  "Your AI projects?",
  "Tech stack",
  "Contact info",
  "Experience",
];

export const assistantWelcome =
  "Hi! I'm Nilanchal's assistant. Ask about **projects**, **skills**, **experience**, or **contact** — I'll do my best to help.";

export function matchAssistantReply(input: string): string {
  const text = input.trim();
  if (!text) {
    return "Type a question and I'll try to help — e.g. projects, skills, or contact info.";
  }

  const normalized = text.toLowerCase();

  const sorted = [...assistantIntents].sort((a, b) => b.priority - a.priority);

  for (const intent of sorted) {
    if (intent.patterns.some((p) => p.test(normalized))) {
      return intent.response;
    }
  }

  const tokens = normalized.split(/\s+/);
  let best: { intent: AssistantIntent; score: number } | null = null;

  for (const intent of sorted) {
    let score = 0;
    for (const pattern of intent.patterns) {
      const source = pattern.source.replace(/\\b/g, "").replace(/[\^$()|\[\]{}.+*?\\]/g, " ");
      const keywords = source.split("|").map((k) => k.trim()).filter(Boolean);
      for (const kw of keywords) {
        if (kw.length > 2 && tokens.some((t) => t.includes(kw) || kw.includes(t))) {
          score += 1;
        }
      }
    }
    if (score > 0 && (!best || score > best.score || (score === best.score && intent.priority > best.intent.priority))) {
      best = { intent, score };
    }
  }

  if (best && best.score >= 1) {
    return best.intent.response;
  }

  return `I'm not sure about that one. Try asking about **projects**, **Python/AWS skills**, **Pragyaa.ai experience**, **NITA Classes**, or **contact details** — or rephrase your question.`;
}

export function getReplyDelay(text: string): number {
  const base = 400;
  const perChar = 8;
  return Math.min(base + text.length * perChar, 1400);
}
