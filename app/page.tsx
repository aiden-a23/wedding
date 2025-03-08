"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const aboutRef = useRef(null);
  const detailsRef = useRef(null);
  const rsvpRef = useRef(null);

  const scrollToSection = (ref: any) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center text-center font-serif">
      {/* Elegant Header */}
      <header className="fixed top-0 w-full bg-white shadow-lg py-5 px-8 flex justify-center space-x-8 text-lg font-semibold tracking-wide z-50">
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(aboutRef)}
        >
          Our Story
        </button>
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(detailsRef)}
        >
          Wedding Details
        </button>
        <button
          className="px-6 py-3 text-black"
          onClick={() => scrollToSection(rsvpRef)}
        >
          RSVP
        </button>
      </header>

      <div className="w-full">
        {/* Our Love Story Section */}
        <section
          ref={aboutRef}
          className="h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-pink-200 text-gray-800"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Our Love Story</h1>
            <p className="text-lg max-w-2xl mx-auto">
              From our first date to this special moment, our journey has been full of love, laughter, and unforgettable memories.
            </p>
          </motion.div>
        </section>

        {/* Wedding Details Section */}
        <section
          ref={detailsRef}
          className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 text-gray-800"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">Wedding Details</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Join us on our special day! The ceremony will be held at [Venue Name] on [Date & Time].
            </p>
          </motion.div>
        </section>

        {/* RSVP Section */}
        <section
          ref={rsvpRef}
          className="h-screen flex items-center justify-center bg-gradient-to-r from-emerald-100 to-green-200 text-gray-800"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h1 className="text-6xl font-bold mb-4">RSVP</h1>
            <p className="text-lg max-w-2xl mx-auto">
              We would love for you to celebrate with us! Let us know if you can make it.
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
