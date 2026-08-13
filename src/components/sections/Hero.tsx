import { motion } from "framer-motion";
import { profile } from "../../data/content";

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-center pt-24 pb-16 sm:pt-28"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:gap-16">
        <div className="max-w-2xl">
          <motion.p
            variants={fadeUp}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.4 }}
            className="mb-2 text-sm font-medium uppercase tracking-widest text-cyan-400/90 light:text-cyan-700"
          >
            Available for work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
          >
            <span className="text-zinc-100 light:text-zinc-900">Hi, I&apos;m </span>
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.12, duration: 0.5 }}
            className="mt-2 font-display text-xl font-medium text-cyan-200/90 sm:text-2xl light:text-cyan-800"
          >
            {profile.title}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-4 max-w-lg text-base leading-relaxed text-zinc-400 light:text-zinc-600"
          >
            {profile.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <button
              type="button"
              onClick={() => scrollToId("projects")}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
            >
              <span className="relative z-10">View Projects</span>
              <span className="absolute inset-0 bg-white/0 transition group-hover:bg-white/10" />
            </button>
            <button
              type="button"
              onClick={() => scrollToId("contact")}
              className="glass rounded-xl px-6 py-3 text-sm font-semibold text-zinc-100 transition hover:border-cyan-500/30 hover:text-cyan-200 light:text-zinc-800 light:hover:text-cyan-800"
            >
              Contact Me
            </button>
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center rounded-xl border border-white/10 px-6 py-3 text-sm font-medium text-zinc-300 transition hover:border-cyan-500/40 light:border-zinc-200 light:text-zinc-700"
            >
              Download résumé
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-sm sm:mx-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-cyan-500/20 to-violet-500/20 blur-2xl" />
          <motion.img
            src={profile.avatar}
            alt=""
            className="relative h-auto w-full max-w-sm rounded-3xl border border-white/10 object-cover shadow-2xl light:border-zinc-200"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
