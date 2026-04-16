"use client";

import { motion } from "framer-motion";

export default function EventsHero() {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      {/* BACKGROUND */}
      <img
        src="/images/events-bg.jpg"
        alt="events"
        className="absolute w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Events &{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.9)]">
            Experiences
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-gray-300 max-w-xl"
        >
          Live music, DJ nights, and unforgettable experiences every week.
        </motion.p>
      </div>
    </section>
  );
}
