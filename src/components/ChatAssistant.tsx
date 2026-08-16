import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  assistantSuggestions,
  assistantWelcome,
  getReplyDelay,
  matchAssistantReply,
} from "../lib/assistantMatcher";

function parseBold(s: string) {
  const lines = s.split("\n");
  return lines.map((line, lineIdx) => (
    <span key={lineIdx}>
      {lineIdx > 0 && <br />}
      {line.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-semibold text-cyan-200 light:text-cyan-800">
            {part}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  ));
}

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "user" | "bot"; text: string }[]>([
    { role: "bot", text: assistantWelcome },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, typing]);

  function replyTo(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((m) => [...m, { role: "user", text: trimmed }]);
    setTyping(true);

    const response = matchAssistantReply(trimmed);
    const delay = getReplyDelay(response);

    setTimeout(() => {
      setTyping(false);
      setMessages((m) => [...m, { role: "bot", text: response }]);
    }, delay);
  }

  function send() {
    const t = input.trim();
    if (!t || typing) return;
    setInput("");
    replyTo(t);
  }

  function askSuggestion(question: string) {
    if (typing) return;
    replyTo(question);
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
            className="fixed bottom-20 right-5 z-40 flex w-[min(100vw-2.5rem,22rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/95 shadow-2xl backdrop-blur-xl light:border-zinc-200 light:bg-white/95"
            role="dialog"
            aria-label="Assistant"
          >
            <div className="border-b border-white/10 px-4 py-2.5 light:border-zinc-200">
              <p className="text-xs font-medium text-zinc-300 light:text-zinc-700">Portfolio assistant</p>
              <p className="text-[10px] text-zinc-500">Ask about projects, skills, or contact</p>
            </div>

            <div ref={listRef} className="max-h-64 space-y-2 overflow-y-auto px-3 py-2 text-sm">
              {messages.map((m, i) => (
                <p
                  key={i}
                  className={
                    m.role === "user"
                      ? "ml-6 rounded-lg bg-cyan-500/15 px-2.5 py-1.5 text-cyan-100 light:bg-cyan-100 light:text-cyan-900"
                      : "mr-1 rounded-lg bg-white/5 px-2.5 py-1.5 text-zinc-300 light:bg-zinc-50 light:text-zinc-700"
                  }
                >
                  {m.role === "bot" ? parseBold(m.text) : m.text}
                </p>
              ))}
              {typing && (
                <p className="mr-1 flex gap-1 px-2.5 py-1.5 text-zinc-500">
                  <span className="animate-pulse">●</span>
                  <span className="animate-pulse [animation-delay:150ms]">●</span>
                  <span className="animate-pulse [animation-delay:300ms]">●</span>
                </p>
              )}
            </div>

            <div className="flex flex-wrap gap-1.5 border-t border-white/10 px-2 py-2 light:border-zinc-200">
              {assistantSuggestions.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => askSuggestion(s)}
                  disabled={typing}
                  className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] font-medium text-zinc-400 transition hover:bg-cyan-500/15 hover:text-cyan-300 disabled:opacity-50 light:bg-zinc-100 light:text-zinc-600 light:hover:text-cyan-700"
                >
                  {s}
                </button>
              ))}
            </div>

            <div className="flex gap-1 border-t border-white/10 p-2 light:border-zinc-200">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send()}
                disabled={typing}
                className="min-w-0 flex-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1.5 text-sm text-zinc-100 outline-none disabled:opacity-60 light:border-zinc-200 light:bg-zinc-50 light:text-zinc-900"
                placeholder="Ask anything…"
                aria-label="Message"
              />
              <button
                type="button"
                onClick={send}
                disabled={typing || !input.trim()}
                className="rounded-lg bg-cyan-500/20 px-3 py-1.5 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/30 disabled:opacity-50 light:bg-cyan-100 light:text-cyan-900"
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
