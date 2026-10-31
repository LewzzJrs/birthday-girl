"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

const birthday = new Date(content.birthday).getTime();

function getParts(ms) {
  const total = Math.max(0, Math.floor(ms / 1000));
  return [
    { label: "hari", value: Math.floor(total / 86400) },
    { label: "jam", value: Math.floor((total % 86400) / 3600) },
    { label: "menit", value: Math.floor((total % 3600) / 60) },
    { label: "detik", value: total % 60 },
  ];
}

function Countdown({ now }) {
  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <div className="grid grid-cols-4 gap-2 sm:gap-4" role="timer" aria-live="off">
        {getParts(birthday - now).map((part) => (
          <div
            key={part.label}
            className="flex w-18 flex-col items-center rounded-card border border-border bg-card/80 py-4 shadow-soft sm:w-22"
          >
            <span className="font-serif text-4xl font-semibold tabular-nums">
              {String(part.value).padStart(2, "0")}
            </span>
            <span className="text-sm text-muted-foreground">{part.label}</span>
          </div>
        ))}
      </div>
      <p className="font-serif text-2xl font-semibold">Sabar ya, {content.name} 🤍</p>
    </div>
  );
}

function Envelope({ onTap, onOpen }) {
  const reduce = useReducedMotion();
  const [opening, setOpening] = useState(false);

  function handleClick() {
    if (opening) return;
    onTap();
    if (reduce) {
      onOpen();
      return;
    }
    setOpening(true);
    setTimeout(onOpen, 1300);
  }

  return (
    <div className="flex flex-col items-center gap-8 text-center">
      <button
        type="button"
        onClick={handleClick}
        aria-label={`For ${content.name}, buka kadonya`}
        className="relative h-44 w-64 cursor-pointer [perspective:800px]"
      >
        <motion.div
          className="absolute inset-x-4 top-4 bottom-2 flex items-start justify-center rounded-lg bg-card pt-5 shadow-soft"
          animate={opening ? { y: -70 } : { y: 0 }}
          transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
        >
          <span className="font-script text-lg">For {content.name}</span>
        </motion.div>
        <div
          className="absolute inset-0 rounded-lg bg-secondary"
          style={{ clipPath: "polygon(0 0, 50% 55%, 100% 0, 100% 100%, 0 100%)" }}
        />
        <div
          className="absolute inset-0 rounded-lg bg-primary/90"
          style={{ clipPath: "polygon(0 100%, 50% 50%, 100% 100%)" }}
        />
        <motion.div
          className="absolute inset-x-0 top-0 h-1/2 origin-top bg-primary"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)", backfaceVisibility: "hidden" }}
          animate={opening ? { rotateX: 180 } : { rotateX: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <span className="absolute top-1/2 left-1/2 flex size-11 -translate-x-1/2 -translate-y-1/4 items-center justify-center rounded-full bg-accent text-on-accent shadow-soft">
          <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
            <path d="M12 21s-7.5-4.6-9.5-9.2C1.2 8.6 3.3 5 6.8 5c2 0 3.5 1.1 5.2 3 1.7-1.9 3.2-3 5.2-3 3.5 0 5.6 3.6 4.3 6.8C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
      </button>
      <p className="text-muted-foreground">Tap amplopnya, {content.nickname} ✨</p>
    </div>
  );
}

export default function Gate({ onTap, onOpen }) {
  const [now, setNow] = useState(null);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setPreview(new URLSearchParams(window.location.search).get("preview") === "1");
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const ready = preview || (now !== null && now >= birthday);

  return (
    <main className="aurora flex min-h-dvh flex-col items-center justify-center gap-8 px-4 py-16 text-center">
      <p className="font-script text-4xl text-accent">a little something for you</p>
      <div className="flex min-h-64 items-start justify-center">
        {now === null ? null : ready ? <Envelope onTap={onTap} onOpen={onOpen} /> : <Countdown now={now} />}
      </div>
    </main>
  );
}
