import { motion } from "framer-motion";
import { experience } from "../../data/content";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl font-bold sm:text-4xl"
        >
          Experience &amp; education
        </motion.h2>
        <p className="mt-2 max-w-2xl text-zinc-400 light:text-zinc-600">
          Roles and study — most recent first.
        </p>

        <ol className="relative mt-12 max-w-3xl space-y-0 border-l border-white/10 pl-6 light:border-zinc-200">
          {experience.map((item, i) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.05 * i }}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border-2 border-cyan-400 bg-zinc-950 light:border-cyan-600 light:bg-white" />
              <p className="text-xs font-medium uppercase tracking-wider text-zinc-500 light:text-zinc-500">
                {item.range}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-zinc-100 light:text-zinc-900">
                {item.title}
              </h3>
              <p className="text-sm text-cyan-400/90 light:text-cyan-700">{item.org}</p>
              {item.detail && (
                <p className="mt-2 text-sm leading-relaxed text-zinc-400 light:text-zinc-600">
                  {item.detail}
                </p>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
