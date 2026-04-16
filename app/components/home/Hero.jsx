"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/hero.png"
        alt="background"
        className="absolute w-full h-full object-cover"
      />

      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute w-full h-full object-cover z-0 scale-110 animate-slowZoom"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* 🌈 GRADIENT OVERLAY (DEPTH) */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* ✨ LIGHT GLOW EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,200,0,0.15),transparent_40%)]" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-full px-6">
        {/* 🔥 HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
        >
          Crafted Nights at{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_20px_rgba(255,200,0,0.9)]">
            Zero Degree
          </span>
        </motion.h1>

        {/* 🍻 SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-gray-300 text-base md:text-lg"
        >
          Craft brews, global flavors, and electrifying vibes — your perfect
          destination for unforgettable nights.
        </motion.p>

        {/* 🚀 BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* 🍽 MENU BUTTON */}
          <Link href="/menu">
            <button className="relative px-7 py-3 rounded-full font-semibold text-black bg-yellow-400 overflow-hidden group">
              <span className="relative z-10">Explore Menu</span>

              {/* glow */}
              <span className="absolute inset-0 bg-yellow-300 blur-md opacity-40 group-hover:opacity-70 transition"></span>
            </button>
          </Link>

          {/* 📅 BOOK BUTTON */}
          <Link
            href="/book"
            className="px-7 py-3 rounded-full border border-white/30 text-white backdrop-blur-md hover:bg-white/10 transition hover:scale-105"
          >
            Book a Table
          </Link>
        </motion.div>
      </div>

      {/* 🔻 SCROLL INDICATOR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-3 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
