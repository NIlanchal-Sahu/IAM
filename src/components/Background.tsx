import { motion } from "framer-motion";

export function Background() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-glow-radial" />
      <div
        className="absolute inset-0 bg-grid-pattern [background-size:48px_48px] opacity-40"
        style={{ maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black, transparent)" }}
      />
      <motion.div
        className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  );
}
