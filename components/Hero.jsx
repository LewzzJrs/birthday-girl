"use client";

import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";
import { content } from "@/data/content";

export default function Hero() {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#9d2b6b", "#f472b6", "#c4b5fd", "#14b8a6", "#f59e0b", "#fdba74"],
      disableForReducedMotion: true,
    });
  }, [reduce]);

  return (
    <section className="aurora flex min-h-dvh flex-col items-center justify-center gap-6 px-4 py-16 text-center">
      <motion.p
        className="font-script text-4xl text-accent"
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        hari ini milik kamu
      </motion.p>
      <motion.h1
        className="font-serif text-5xl leading-tight font-semibold sm:text-7xl"
        initial={reduce ? false : { opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
      >
        Happy Birthday,
        <span className="mt-2 block font-script text-6xl font-normal text-primary sm:text-8xl">
          {content.name}!
        </span>
      </motion.h1>
      <p className="font-serif text-2xl font-semibold">yang ke-{content.age} 🎂</p>
    </section>
  );
}
