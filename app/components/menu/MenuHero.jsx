"use client";

import { motion } from "framer-motion";

export default function MenuHero() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src="/images/menu-banner.jpg"
        alt="menu background"
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/90" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          Our{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.9)]">
            Menu
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-300 max-w-xl"
        >
          Explore a global culinary journey — from comforting classics to bold
          fusion creations crafted with passion.
        </motion.p>
      </div>
    </section>
  );
}
