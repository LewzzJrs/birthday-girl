"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import confetti from "canvas-confetti";

export default function Cake() {
  const reduce = useReducedMotion();
  const [blown, setBlown] = useState(false);

  function blow() {
    setBlown(true);
    if (reduce) return;
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.55 },
      colors: ["#9d2b6b", "#f472b6", "#c4b5fd", "#14b8a6", "#f59e0b", "#fdba74"],
      disableForReducedMotion: true,
    });
  }

  return (
    <section className="mx-auto max-w-xl px-4 py-20 text-center">
      <p className="font-script text-3xl text-accent">close your eyes</p>
      <h2 className="mt-1 font-serif text-4xl font-semibold">Tiup Lilin</h2>
      <svg
        viewBox="0 0 200 200"
        className="mx-auto mt-8 w-60"
        role="img"
        aria-label={blown ? "Kue ulang tahun dengan lilin yang sudah padam" : "Kue ulang tahun dengan lilin menyala"}
      >
        <ellipse cx="100" cy="178" rx="88" ry="10" fill="#fde68a" />
        <rect x="30" y="112" width="140" height="62" rx="10" fill="#c4b5fd" />
        <path d="M30 124 q10 14 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0 V118 a8 8 0 0 0 -8 -6 H38 a8 8 0 0 0 -8 6z" fill="#ffffff" />
        <rect x="50" y="74" width="100" height="42" rx="8" fill="#9d2b6b" />
        <path d="M50 84 q8 12 16.6 0 t16.6 0 t16.6 0 t16.6 0 t16.6 0 t16.6 0 V80 a6 6 0 0 0 -6 -6 H56 a6 6 0 0 0 -6 6z" fill="#fff8f1" />
        <circle cx="62" cy="146" r="3.5" fill="#0f766e" />
        <circle cx="100" cy="152" r="3.5" fill="#f59e0b" />
        <circle cx="138" cy="146" r="3.5" fill="#f472b6" />
        <rect x="95" y="38" width="10" height="38" rx="3" fill="#fde68a" />
        <path d="M95 46 l10 -6 M95 56 l10 -6 M95 66 l10 -6" stroke="#14b8a6" strokeWidth="2.5" />
        <AnimatePresence>
          {!blown && (
            <motion.g
              key="flame"
              initial={false}
              exit={reduce ? undefined : { opacity: 0, scale: 0.3 }}
              transition={{ duration: 0.3 }}
              style={{ transformOrigin: "100px 36px" }}
            >
              <path className="flame" d="M100 8 C108 20 110 27 100 36 C90 27 92 20 100 8z" fill="#f59e0b" />
              <path className="flame" d="M100 18 C104 24 105 29 100 34 C95 29 96 24 100 18z" fill="#fef3c7" />
            </motion.g>
          )}
        </AnimatePresence>
        {blown && !reduce &&
          [0, 1, 2].map((i) => (
            <motion.circle
              key={i}
              cx={100 + (i - 1) * 3}
              cy="32"
              r="4"
              fill="#9ca3af"
              initial={{ opacity: 0.6, y: 0, scale: 0.6 }}
              animate={{ opacity: 0, y: -40, scale: 1.8 }}
              transition={{ duration: 1.6, delay: i * 0.2, ease: "easeOut" }}
            />
          ))}
      </svg>
      <div className="mt-6 min-h-16" aria-live="polite">
        {blown ? (
          <motion.p
            className="font-script text-5xl text-primary"
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Make a wish!
          </motion.p>
        ) : (
          <button
            type="button"
            onClick={blow}
            className="min-h-11 cursor-pointer rounded-full bg-primary px-6 font-semibold text-on-primary shadow-soft transition-transform duration-150 active:scale-95"
          >
            Tiup lilinnya 🎂
          </button>
        )}
      </div>
    </section>
  );
}
