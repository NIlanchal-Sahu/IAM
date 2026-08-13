import { Helmet, HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext";
import { Background } from "./components/Background";
import { SpotlightCursor } from "./components/SpotlightCursor";
import { Navbar } from "./components/Navbar";
import { ChatAssistant } from "./components/ChatAssistant";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { Projects } from "./components/sections/Projects";
import { Experience } from "./components/sections/Experience";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import { profile } from "./data/content";

export default function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>
          {profile.name} — {profile.title}
        </title>
        <meta
          name="description"
          content="Personal portfolio: projects, skills, experience, and contact."
        />
        <meta property="og:title" content={`${profile.name} — ${profile.title}`} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://your-domain.com" />
      </Helmet>
      <ThemeProvider>
        <div className="relative min-h-screen">
          <a
            href="#main"
            className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-lg bg-cyan-500 px-3 py-2 text-sm font-semibold text-zinc-950 transition focus:translate-y-0 focus:outline focus:ring-2 focus:ring-cyan-300"
          >
            Skip to content
          </a>
          <Background />
          <SpotlightCursor />
          <Navbar />
          <main id="main" tabIndex={-1}>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <Footer />
          <ChatAssistant />
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
