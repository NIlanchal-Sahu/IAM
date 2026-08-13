import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  projects,
  projectFilters,
  type ProjectFilter,
} from "../../data/content";

const filterBtn = (active: boolean) =>
  `rounded-full px-3 py-1.5 text-xs font-medium transition ${
    active
      ? "bg-cyan-500/20 text-cyan-200 light:bg-cyan-100 light:text-cyan-900"
      : "bg-white/5 text-zinc-400 hover:text-zinc-200 light:bg-zinc-100 light:text-zinc-600"
  }`;

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");

  const visible = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          Projects
        </motion.h2>
        <p className="mt-2 max-w-2xl text-zinc-400 light:text-zinc-600">
          Selected work — filter by type or open live demos and code.
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {projectFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={filterBtn(filter === f)}
            >
              {f === "all" ? "All" : f}
            </button>
          ))}
        </div>

        <motion.ul
          layout
          className="mt-10 grid gap-6 sm:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.li
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                className="group h-full"
              >
                <article className="glass relative flex h-full flex-col overflow-hidden rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/5 light:hover:border-cyan-200">
                  <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-cyan-500/5 blur-2xl transition group-hover:bg-cyan-500/10" />
                  <h3 className="font-display text-lg font-semibold text-zinc-100 light:text-zinc-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
                    {p.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-md bg-white/5 px-2 py-0.5 text-xs font-mono text-cyan-200/80 light:bg-zinc-100 light:text-cyan-800"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300 light:text-cyan-700"
                    >
                      Live demo →
                    </a>
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium text-zinc-500 transition hover:text-zinc-300 light:hover:text-zinc-700"
                    >
                      GitHub
                    </a>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        {visible.length === 0 && (
          <p className="mt-8 text-sm text-zinc-500">No projects in this filter.</p>
        )}
      </div>
    </section>
  );
}
