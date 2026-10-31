"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { content } from "@/data/content";

const tilts = [-3, 2.5, -1.5, 3, -2.5, 1.5, -2, 2];

function Lightbox({ photo, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    const opener = document.activeElement;
    closeRef.current?.focus();
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      opener?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-foreground/85 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Tutup foto"
        className="absolute top-4 right-4 flex size-11 cursor-pointer items-center justify-center rounded-full bg-card text-foreground shadow-soft"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
      <div className="relative h-[70dvh] w-full max-w-3xl">
        <Image src={photo.src} alt={photo.caption} fill sizes="100vw" className="object-contain" />
      </div>
      <p className="font-script text-3xl text-card">{photo.caption}</p>
    </motion.div>
  );
}

export default function Gallery() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(null);
  const close = () => setActive(null);

  return (
    <section className="mx-auto max-w-3xl px-4 py-20">
      <p className="text-center font-script text-3xl text-accent">little moments</p>
      <h2 className="mt-1 text-center font-serif text-4xl font-semibold">Galeri</h2>
      <ul className="mt-12 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3">
        {content.gallery.map((photo, i) => (
          <motion.li
            key={photo.src}
            style={{ rotate: tilts[i % tilts.length] }}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => setActive(photo)}
              aria-label={`Lihat foto: ${photo.caption}`}
              className="block w-full cursor-pointer bg-card p-2 pb-3 shadow-soft transition-transform duration-200 hover:scale-[1.03]"
            >
              <span className="relative block aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(max-width: 640px) 45vw, 280px"
                  className="object-cover"
                />
              </span>
              <span className="mt-2 block font-script text-xl leading-tight">{photo.caption}</span>
            </button>
          </motion.li>
        ))}
      </ul>
      <AnimatePresence>{active && <Lightbox photo={active} onClose={close} />}</AnimatePresence>
    </section>
  );
}
