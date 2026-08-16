import { navLinks, profile } from "../../data/content";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 py-12 light:border-zinc-200">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-display text-sm font-semibold text-zinc-200 light:text-zinc-800">
            {profile.name}
          </p>
          <p className="mt-1 text-xs text-zinc-500 light:text-zinc-500">
            © {year} All rights reserved.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer">
          {navLinks.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => go(l.id)}
              className="text-sm text-zinc-400 transition hover:text-cyan-300 light:text-zinc-600 light:hover:text-cyan-700"
            >
              {l.label}
            </button>
          ))}
        </nav>
        <div className="flex gap-4 text-zinc-500">
          <a
            href={profile.social.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400 light:hover:text-cyan-700"
            aria-label="GitHub"
          >
            <span className="sr-only">GitHub</span>
            <GitHubIcon />
          </a>
          <a
            href={profile.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400 light:hover:text-cyan-700"
            aria-label="LinkedIn"
          >
            <span className="sr-only">LinkedIn</span>
            <LinkedInIcon />
          </a>
          <a
            href={profile.social.website}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-cyan-400 light:hover:text-cyan-700"
            aria-label="NITA Classes"
          >
            <span className="sr-only">NITA Classes</span>
            <WebsiteIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}

function GitHubIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.857 0 1.34-.012 2.421-.012 2.75 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.021C22 6.484 17.522 2 12 2Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.7-2.2 3.9 0 4.6 2.6 4.6 6V24h-4.2v-7.1c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.6V24H8V8.1z" />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
