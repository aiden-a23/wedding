"use client";

import { useEffect, useRef, useState } from "react";
import RSVP from "./rsvp";
import Photos from "./photos";
import WeddingDetails from "./weddingDetails";
import Registry from "./registry";

export default function Home() {
  const photosRef = useRef(null);
  const detailsRef = useRef(null);
  const rsvpRef = useRef(null);
  const registryRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
  const checkScroll = () => {
    const el = headerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  };
  checkScroll();
  const el = headerRef.current;
  if (el) {
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
  }
  return () => {
    if (el) el.removeEventListener("scroll", checkScroll);
    window.removeEventListener("resize", checkScroll);
  };
}, []);

  return (
    <div className="flex flex-col items-center text-center font-serif">
      <div className="relative w-full">
        {canScrollLeft && (
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-50 pointer-events-none select-none text-2xl text-gray-400">
            asdf
          </div>
        )}
        {canScrollRight && (
          <div className="absolute right-2 top-1/2 -translate-y-1/2 z-50 pointer-events-none select-none text-2xl text-gray-400">
            &#62;
          </div>
        )}
        <header className="fixed top-0 w-full bg-white shadow-lg py-5 px-8 flex justify-center space-x-8 text-lg font-semibold tracking-wide z-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="w-full">
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
          </div>
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
    </div>
  );
}
