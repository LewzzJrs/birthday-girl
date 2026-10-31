"use client";

import { content } from "@/data/content";

export default function Closing({ onReplay }) {
  return (
    <section className="aurora flex min-h-[70dvh] flex-col items-center justify-center gap-6 px-4 py-20 text-center">
      <p className="max-w-md font-serif text-2xl leading-snug font-semibold">{content.closing}</p>
      <p className="font-script text-4xl text-primary">with love, {content.signature}</p>
      <button
        type="button"
        onClick={onReplay}
        className="mt-4 min-h-11 cursor-pointer rounded-full border-2 border-primary bg-card px-6 font-semibold text-primary shadow-soft transition-transform duration-150 active:scale-95"
      >
        Putar ulang dari awal
      </button>
    </section>
  );
}
