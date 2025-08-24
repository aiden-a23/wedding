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
    <div className="flex flex-col items-center text-center font-cormorant">
      <div className="relative w-full pt-20 md:pt-24 bg-[#f5f1ea]">
        {canScrollLeft && (
          <div className="absolute left-2 top-14 md:top-1/2 -translate-y-1/2 z-50 pointer-events-none select-none text-xl md:text-2xl text-[#800020] bg-[#f5f1ea]/80 rounded-full p-1 shadow-sm">
            &#8249;
          </div>
        )}
        {canScrollRight && (
          <div className="absolute right-2 top-14 md:top-1/2 -translate-y-1/2 z-50 pointer-events-none select-none text-xl md:text-2xl text-[#800020] bg-[#f5f1ea]/80 rounded-full p-1 shadow-sm">
            &#8250;
          </div>
        )}
        <header ref={headerRef} className="fixed top-0 w-full bg-[#f5f1ea] shadow-md py-4 px-4 md:px-8 flex justify-center z-50 overflow-x-auto whitespace-nowrap scrollbar-hide">
          <div className="w-full flex justify-center md:justify-center">
            <button
              className="px-3 md:px-6 py-2 md:py-3 text-[#800020] hover:text-[#a0515d] transition-colors duration-300 text-sm md:text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-[#800020] mx-1 md:mx-3"
              onClick={() => scrollToSection(detailsRef)}
            >
              Details
            </button>
            <button
              className="px-3 md:px-6 py-2 md:py-3 text-[#800020] hover:text-[#a0515d] transition-colors duration-300 text-sm md:text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-[#800020] mx-1 md:mx-3"
              onClick={() => scrollToSection(photosRef)}
            >
              Photos
            </button>
            <button
              className="px-3 md:px-6 py-2 md:py-3 text-[#800020] hover:text-[#a0515d] transition-colors duration-300 text-sm md:text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-[#800020] mx-1 md:mx-3"
              onClick={() => scrollToSection(rsvpRef)}
            >
              RSVP
            </button>
            <button
              className="px-3 md:px-6 py-2 md:py-3 text-[#800020] hover:text-[#a0515d] transition-colors duration-300 text-sm md:text-lg font-medium tracking-wide border-b-2 border-transparent hover:border-[#800020] mx-1 md:mx-3"
              onClick={() => scrollToSection(registryRef)}
            >
              Registry
            </button>
          </div>
        </header>

        <div className="w-full">
          <div ref={detailsRef} className="py-10 md:py-16 px-4 md:px-10 border-b border-[#800020]/20">
            <WeddingDetails />
          </div>
          <div ref={photosRef} className="py-10 md:py-16 px-4 md:px-10 bg-[#f8eff1] border-b border-[#800020]/20">
            <Photos />
          </div>
          <div ref={rsvpRef} className="py-10 md:py-16 px-4 md:px-10 border-b border-[#800020]/20">
            <RSVP />
          </div>
          <div ref={registryRef} className="py-10 md:py-16 px-4 md:px-10 bg-[#f8eff1]">
            <Registry />
          </div>
        </div>
      </div>
    </div>
  );
}
