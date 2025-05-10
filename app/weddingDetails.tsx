"use client";

import { motion } from "framer-motion";

export default function WeddingDetails() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-blue-200 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-6">The Deets</h1>
        <div className="space-y-4 text-left">
          <div>
            <h2 className="text-2xl font-semibold">Ceremony</h2>
            <p className="text-lg">
              {/* <strong>Location:</strong> The Toledo Zoo, <a href="https://maps.google.com/maps?hl=en&gl=us&um=1&ie=UTF-8&fb=1&sa=X&ftid=0x883b879d23f91ab7%3A0xb405e59b5b69bc67&ved=0CBMQ4kBqFwoTCIDQoKflmY0DFQAAAAAdAAAAABAF">2 Hippo Way, Toledo, OH 43609</a> */}
              <strong>Location:</strong> The Formal Gardens
            </p>
            {/* <p className="text-lg">
              <strong>Date:</strong> August 29th, 2026
            </p> */}
            <p className="text-lg">
              <strong>Time:</strong> 5:30 - 6:00 PM
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Reception</h2>
            <p className="text-lg">
              <strong>Location:</strong> The Great Hall
            </p>
            <p className="text-lg">
              <strong>Time:</strong> 6:00 PM - 11:00 PM
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Dress Code</h2>
            <p className="text-lg">Formal Wear</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Additional Information</h2>
            <p className="text-lg">
              - Parking is available at the Broadway Lot - Please do not park at the main entrance <br />
              - Please RSVP by June 1st, 2026. <br />
              - Contact us if you have any questions!!!
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}