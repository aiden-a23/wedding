"use client";

import { motion } from "framer-motion";

export default function WeddingDetails() {
  return (
    <section
      className="min-h-[90vh] flex items-center justify-center text-[#333333] py-16"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-2 text-[#800020]">Wedding Details</h1>
        <a href="https://calendar.app.google/QR3ugLcfNNPKj7b87" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl text-[#800020] hover:underline">
          August 29th, 2026
        </a>
        <div className="w-24 h-[1px] bg-[#800020] mx-auto my-4"></div>
        <div className="space-y-8 text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#800020] mb-2">Ceremony</h2>
            <p className="text-lg md:text-xl">
              <span className="font-medium text-[#800020]">Location:</span> The Formal Gardens
            </p>
            {/* <p className="text-lg">
              <strong>Date:</strong> August 29th, 2026
            </p> */}
            <p className="text-lg md:text-xl">
              <span className="font-medium text-[#800020]">Time:</span> 5:30 - 6:00 PM
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#800020] mb-2">Reception</h2>
            <p className="text-lg md:text-xl">
              <span className="font-medium text-[#800020]">Location:</span> The Great Hall
            </p>
            <p className="text-lg md:text-xl">
              <span className="font-medium text-[#800020]">Time:</span> 6:00 PM - 11:00 PM
            </p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#800020] mb-2">Dress Code</h2>
            <p className="text-lg md:text-xl">Formal Wear</p>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-[#800020] mb-2">Additional Information</h2>
            <ul className="text-lg md:text-xl space-y-2">
              <li>• Parking is available at the Broadway Lot</li>
              <li>• Please do not park at the main entrance</li> 
              <li>• Please RSVP by June 1st, 2026</li>
              <li>• Contact us if you have any questions</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
}