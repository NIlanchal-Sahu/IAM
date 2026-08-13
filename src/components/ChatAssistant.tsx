import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

const replies: Record<string, string> = {
  hi: "Hi! Ask me about **projects**, **stack**, or **contact**.",
  hello: "Hello — I’m a tiny on-page helper. What would you like to know?",
  projects: "Check the **Projects** section for live demos and repos — you can filter by tag.",
  stack: "This site uses **Vite**, **React**, **Tailwind**, and **Framer Motion**.",
  contact: "Use the **Contact** form or email — links are in the footer and contact card.",
  default:
    "I match simple keywords. Try: projects, stack, contact, or hi.",
};

function matchReply(text: string) {
  const t = text.toLowerCase();
  for (const key of Object.keys(replies)) {
    if (key !== "default" && t.includes(key)) return replies[key];
  }
  return replies.default;
}

function parseBold(s: string) {
  const parts = s.split(/\*\*(.+?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 ? (
      <strong key={i} className="font-semibold text-cyan-200 light:text-cyan-800">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: replies.hi },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  function send() {
    const t = input.trim();
    if (!t) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text: t }]);
    setTimeout(() => {
      setMessages((m) => [...m, { role: "bot", text: matchReply(t) }]);
    }, 200);
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-500/30 bg-zinc-900/90 text-lg shadow-lg shadow-cyan-500/10 backdrop-blur transition hover:scale-105 hover:border-cyan-400/50 light:border-cyan-200 light:bg-white/90"
        aria-expanded={open}
        aria-label="Open assistant"
      >
        {open ? "×" : "✦"}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className="fixed bottom-20 right-5 z-40 w-[min(100vw-2.5rem,20rem)] overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl light:border-zinc-200 light:bg-white/95"
            role="dialog"
            aria-label="Assistant"
          >
            <div className="border-b border-white/10 px-4 py-2 text-xs font-medium text-zinc-400 light:border-zinc-200 light:text-zinc-500">
              Quick assistant
            </div>
            <div
              ref={listRef}
              className="max-h-56 space-y-2 overflow-y-auto px-3 py-2 text-sm"
            >
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-4 rounded-lg bg-cyan-500/15 px-2 py-1.5 text-cyan-100 light:bg-cyan-100 light:text-cyan-900"
                      : "mr-2 text-zinc-300 light:text-zinc-700"
                  }
                >
                  {m.role === "bot" ? parseBold(m.text) : m.text}
                </p>
              ))}
            </div>
            <div className="flex gap-1 border-t border-white/10 p-2 light:border-zinc-200">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-zinc-100 outline-none light:border-zinc-200 light:bg-zinc-50 light:text-zinc-900"
                placeholder="Type a message…"
                aria-label="Message"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs font-semibold text-cyan-200 light:bg-cyan-100 light:text-cyan-900"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
