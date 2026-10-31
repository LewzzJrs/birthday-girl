import Image from "next/image";
import { content } from "@/data/content";

const tilts = [-8, 6, -4, 9, -6, 4, -10, 7];

export default function FloatingPhotos() {
  const total = content.floating.length;

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {content.floating.map((src, i) => {
        const left = i % 2 === 0;
        const offset = ((i * 37) % 12) - 3;
        return (
          <div
            key={src}
            className="float absolute w-16 bg-card p-1 pb-3 opacity-35 shadow-soft sm:w-24"
            style={{
              top: `calc(100dvh + (100% - 100dvh - 8rem) * ${i / total})`,
              [left ? "left" : "right"]: `${offset}%`,
              "--r": `${tilts[i % tilts.length]}deg`,
              "--d": `${2.5 + (i % 4) * 0.5}s`,
              "--delay": `${-i * 0.4}s`,
            }}
          >
            <Image src={src} alt="" width={96} height={128} sizes="96px" className="aspect-[3/4] w-full object-cover" />
          </div>
        );
      })}
    </div>
  );
}
