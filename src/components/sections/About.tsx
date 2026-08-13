import { motion } from "framer-motion";
import { about, profile } from "../../data/content";

const item = {
  hidden: { opacity: 0, y: 16 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * i, duration: 0.4 },
  }),
};

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          About
        </motion.h2>
        <p className="mt-2 max-w-2xl text-zinc-400 light:text-zinc-600">
          A little context before we dive into the work.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-6 sm:p-8">
              {about.bio.map((p, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-base leading-relaxed text-zinc-300 light:text-zinc-700 [&+&]:mt-4"
                >
                  {p}
                </motion.p>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400/90 light:text-cyan-700">
                Location
              </h3>
              <p className="mt-2 text-zinc-200 light:text-zinc-800">{profile.location}</p>
            </div>
            <ul className="space-y-3">
              {about.highlights.map((h, i) => (
                <motion.li
                  key={h}
                  custom={i + 3}
                  variants={item}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex gap-3 text-sm text-zinc-400 light:text-zinc-600"
                >
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
                  {h}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
