"use client";

import { motion } from "framer-motion";

export default function GalleryHero() {
  return (
    <section className="relative h-[50vh] overflow-hidden">
      <img
        src="/images/gallery/hero.jpg"
        className="absolute w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Our{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]">
            Gallery
          </span>
        </motion.h1>

        <p className="mt-4 text-gray-300">
          A glimpse of unforgettable nights & experiences
        </p>
      </div>
    </section>
  );
}
