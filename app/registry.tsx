"use client";

import { motion } from "framer-motion";

export default function Registry() {
  const registryLinks = [
    {
      name: "Amazon",
      image: "/file.svg", // You can replace with actual Amazon logo
      url: "https://www.amazon.com/wedding/registry",
    },
    {
      name: "Target",
      image: "/globe.svg", // You can replace with actual Target logo
      url: "https://www.target.com/gift-registry/",
    },
    {
      name: "Crate & Barrel",
      image: "/window.svg", // You can replace with actual Crate & Barrel logo
      url: "https://www.crateandbarrel.com/gift-registry/",
    },
  ];

  return (
    <section className="min-h-[90vh] flex items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto px-4"
      >
        <h1 className="text-5xl md:text-6xl font-light mb-2 text-[#800020]">
          Registry
        </h1>
        <div className="w-24 h-[1px] bg-[#800020] mx-auto my-6"></div>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          We are very grateful for everyone's love and support. Gifts are not required or expected, your presence is what matters most. 
          However, if you feel inclined to give us a gift, we've registered at these locations.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {registryLinks.map((registry, index) => (
            <motion.a
              key={index}
              href={registry.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg border border-[#800020]/10 transition-all duration-300 hover:scale-105"
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 mb-4">
                <img
                  src={registry.image}
                  alt={registry.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-medium text-[#800020]">
                {registry.name}
              </h3>
            </motion.a>
          ))}
        </div>

        <p className="text-md mt-10 italic text-[#800020]/70">
          Thank you for your thoughtfulness and generosity.
        </p>
      </motion.div>
    </section>
  );
}