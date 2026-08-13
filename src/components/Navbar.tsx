import { motion } from "framer-motion";
import { navLinks } from "../data/content";
import { useActiveSection } from "../hooks/useActiveSection";
import { useTheme } from "../context/ThemeContext";

const ids = navLinks.map((l) => l.id);

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export function Navbar() {
  const activeId = useActiveSection(ids);
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 z-50 w-full border-b border-white/5 bg-zinc-950/70 backdrop-blur-xl light:border-zinc-200/80 light:bg-white/70"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollToId("hero")}
          className="font-display text-lg font-semibold tracking-tight text-zinc-100 transition hover:text-cyan-400 light:text-zinc-900 light:hover:text-cyan-700"
        >
          <span className="text-gradient">AM</span>
          <span className="ml-1 hidden sm:inline">Portfolio</span>
        </button>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => {
            const isActive = activeId === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToId(link.id)}
                className={`relative rounded-lg px-3 py-1.5 text-sm font-medium transition ${
                  isActive
                    ? "text-cyan-300 light:text-cyan-700"
                    : "text-zinc-400 hover:text-zinc-200 light:text-zinc-600 light:hover:text-zinc-900"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/10 light:bg-cyan-500/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className="glass rounded-lg px-3 py-2 text-xs font-medium text-zinc-300 transition hover:text-white light:text-zinc-700 light:hover:text-zinc-900"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>

      <div className="no-scrollbar flex gap-1 overflow-x-auto border-t border-white/5 px-4 py-2 md:hidden light:border-zinc-200/80">
        {navLinks.map((link) => {
          const isActive = activeId === link.id;
          return (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToId(link.id)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs font-medium ${
                isActive
                  ? "bg-cyan-500/20 text-cyan-200 light:bg-cyan-100 light:text-cyan-800"
                  : "bg-white/5 text-zinc-400 light:bg-zinc-100 light:text-zinc-600"
              }`}
            >
              {link.label}
            </button>
          );
        })}
      </div>
    </motion.header>
  );
}
