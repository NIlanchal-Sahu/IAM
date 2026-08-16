import { motion } from "framer-motion";
import { skills, type SkillCategory } from "../../data/content";

const categories: SkillCategory[] = ["AI / ML", "Backend & Cloud", "Languages & Tools"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          Skills
        </motion.h2>
        <p className="mt-2 max-w-2xl text-zinc-400 light:text-zinc-600">
          Grouped by focus — from AI/ML and LLMs to cloud infrastructure and languages.
        </p>

        <div className="mt-8 space-y-8">
          {categories.map((cat) => {
            const list = skills.filter((s) => s.category === cat);
            return (
              <div key={cat}>
                <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400/90 light:text-cyan-700">
                  {cat}
                </h3>
                <motion.div
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.1 }}
                  className="mt-4 grid gap-4 sm:grid-cols-2"
                >
                  {list.map((s) => (
                    <motion.div
                      key={s.name}
                      variants={card}
                      className="glass group rounded-2xl p-5 transition hover:border-cyan-500/20"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-medium text-zinc-200 light:text-zinc-800">
                          {s.name}
                        </span>
                        <span className="text-xs font-mono text-zinc-500 light:text-zinc-500">
                          {s.level}%
                        </span>
                      </div>
                      <div
                        className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5 light:bg-zinc-200"
                        role="progressbar"
                        aria-valuenow={s.level}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label={s.name}
                      >
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-violet-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
