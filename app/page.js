"use client";

import { useRef, useState } from "react";
import Gate from "@/components/Gate";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Reasons from "@/components/Reasons";
import Cake from "@/components/Cake";
import Letter from "@/components/Letter";
import Closing from "@/components/Closing";
import MusicToggle from "@/components/MusicToggle";
import FloatingPhotos from "@/components/FloatingPhotos";
import { content } from "@/data/content";

export default function Home() {
  const [opened, setOpened] = useState(false);
  const audioRef = useRef(null);

  function playMusic() {
    audioRef.current?.play().catch(() => {});
  }

  function replay() {
    window.scrollTo(0, 0);
    setOpened(false);
  }

  return (
    <>
      {content.song && (
        <>
          <audio ref={audioRef} src={content.song} loop preload="none" />
          <MusicToggle audioRef={audioRef} />
        </>
      )}
      {opened ? (
        <main className="relative isolate">
          <FloatingPhotos />
          <Hero />
          <Gallery />
          <Reasons />
          <Cake />
          <Letter />
          <Closing onReplay={replay} />
        </main>
      ) : (
        <Gate onTap={playMusic} onOpen={() => setOpened(true)} />
      )}
    </>
  );
}
