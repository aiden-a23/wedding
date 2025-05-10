"use client";

import { useRef } from "react";
import RSVP from "./rsvp";
import Photos from "./photos";
import WeddingDetails from "./weddingDetails";
import Registry from "./registry";

export default function Home() {
  const photosRef = useRef(null);
  const detailsRef = useRef(null);
  const rsvpRef = useRef(null);
  const registryRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center text-center font-serif">
      <header className="fixed top-0 w-full bg-white shadow-lg py-5 px-8 flex justify-center space-x-8 text-lg font-semibold tracking-wide z-50">
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(detailsRef)}
        >
          Wedding Details
        </button>
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(photosRef)}
        >
          Photos
        </button>
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(rsvpRef)}
        >
          RSVP
        </button>
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(registryRef)}
        >
          Registry
        </button>

      </header>

      <div className="w-full">
        <div ref={detailsRef}>
          <WeddingDetails />
        </div>
        <div ref={photosRef}>
          <Photos />
        </div>
        <div ref={rsvpRef}>
          <RSVP />
        </div>
        <div ref={registryRef}>
          <Registry />
        </div>
      </div>
    </div>
  );
}
