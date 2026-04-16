"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-16 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* 🖼 IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <img
            src="/images/hero.png"
            alt="Zero Degree ambience"
            className="rounded-2xl shadow-2xl object-cover w-full h-[400px] md:h-[500px]"
          />

          {/* glow */}
          <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-2xl"></div>
        </motion.div>

        {/* 📝 CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        >
          {/* 🔥 TITLE */}
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            About{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.9)]">
              Zero Degree
            </span>
          </h1>

          {/* STORY */}
          <p className="text-gray-300 leading-relaxed mb-6 text-lg">
            Zero Degree Brewery & Kitchen was founded with a vision to create a
            vibrant destination where craft brewing meets exceptional dining and
            unforgettable social experiences. Designed as a modern brewery, it
            blends contemporary aesthetics with a relaxed and welcoming vibe.
          </p>

          <p className="text-gray-400 leading-relaxed mb-6">
            From freshly brewed in-house beers to a diverse global culinary
            journey, every element is crafted to delight. Whether you're
            enjoying a casual evening with friends or celebrating special
            moments, Zero Degree offers an atmosphere that brings people
            together.
          </p>

          <p className="text-gray-400 leading-relaxed mb-10">
            Known for live music, DJ nights, sports screenings, and themed
            events, it has quickly become a go-to destination for unforgettable
            nightlife experiences in the city.
          </p>

          {/* ✨ HIGHLIGHTS */}
          <div className="grid grid-cols-2 gap-6">
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              <h4 className="text-yellow-400 font-semibold mb-1">
                🍺 Craft Brewing
              </h4>
              <p className="text-gray-400 text-sm">
                Signature in-house brewed beers crafted to perfection.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              <h4 className="text-yellow-400 font-semibold mb-1">
                🌍 Global Cuisine
              </h4>
              <p className="text-gray-400 text-sm">
                A curated fusion of Indian and international flavors.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              <h4 className="text-yellow-400 font-semibold mb-1">
                🎶 Live Events
              </h4>
              <p className="text-gray-400 text-sm">
                DJ nights, live music, and vibrant themed experiences.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-md hover:bg-white/10 transition">
              <h4 className="text-yellow-400 font-semibold mb-1">
                🎉 Celebrations
              </h4>
              <p className="text-gray-400 text-sm">
                Ideal venue for parties, birthdays, and corporate gatherings.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
