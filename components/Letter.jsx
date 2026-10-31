"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

export default function Letter() {
  const reduce = useReducedMotion();

  return (
    <section className="mx-auto max-w-xl px-4 py-20">
      <p className="text-center font-script text-3xl text-accent">from my heart</p>
      <h2 className="mt-1 text-center font-serif text-4xl font-semibold">Surat Untukmu</h2>
      <motion.article
        className="mt-10 rounded-sm border border-border bg-card px-6 py-10 shadow-soft sm:px-10"
        style={{
          backgroundImage: "repeating-linear-gradient(transparent 0 31px, #fbcfe8 31px 32px)",
          backgroundPosition: "0 40px",
        }}
        initial={reduce ? false : { opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-8 font-serif text-xl leading-8">
          {content.letter.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <p className="mt-8 text-right font-script text-4xl text-primary">— {content.signature}</p>
      </motion.article>
    </section>
  );
}
