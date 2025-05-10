"use client";

import { motion } from "framer-motion";

export default function Registry() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-pink-200 text-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-6xl font-bold mb-4">Buy us shit!!!</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Thanks
        </p>
      </motion.div>
    </section>
  );
}