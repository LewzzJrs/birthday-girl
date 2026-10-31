"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

export default function Reasons() {
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const total = content.reasons.length;

  function next() {
    setIndex((index + 1) % total);
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-script text-3xl text-accent">a little reminder</p>
      <h2 className="mt-1 font-serif text-4xl font-semibold">Pengingat Buat Kamu</h2>
      <div className="relative mt-10 flex min-h-56 items-center justify-center rounded-card border border-border bg-card p-8 shadow-soft">
        <svg viewBox="0 0 24 24" className="absolute top-4 left-4 size-6 text-secondary" fill="currentColor" aria-hidden="true">
          <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.8 5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.5 0 5.6 3.6 4.3 6.8C19.5 16.4 12 21 12 21z" />
        </svg>
        <div aria-live="polite">
          <motion.p
            key={index}
            className="font-serif text-2xl leading-snug font-semibold"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {content.reasons[index]}
          </motion.p>
        </div>
        <span className="absolute right-4 bottom-3 text-sm text-muted-foreground">
          #{index + 1} dari {total}
        </span>
      </div>
      {total > 1 && (
        <button
          type="button"
          onClick={next}
          className="mt-6 min-h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-on-primary shadow-soft transition-transform duration-150 active:scale-95"
        >
          Satu lagi
        </button>
      )}
    </section>
  );
}
