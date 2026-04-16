"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { src: "/images/gallery/1.png", category: "ambience" },
  { src: "/images/gallery/4.png", category: "food" },
  { src: "/images/gallery/7.png", category: "events" },
  { src: "/images/gallery/2.png", category: "ambience" },
  { src: "/images/gallery/5.png", category: "food" },
  { src: "/images/gallery/8.png", category: "events" },
  { src: "/images/gallery/3.png", category: "ambience" },
  { src: "/images/gallery/6.png", category: "food" },
];

const filters = ["all", "food", "events", "ambience"];

export default function GalleryGrid() {
  const [selected, setSelected] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems =
    activeFilter === "all"
      ? items
      : items.filter((item) => item.category === activeFilter);

  return (
    <section className="px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 FILTER BAR */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm transition ${
                activeFilter === f
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-gray-300 hover:bg-white/20"
              }`}
            >
              {f.toUpperCase()}
            </button>
          ))}
        </div>

        {/* 🧱 MASONRY GRID */}
        <motion.div
          layout
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4"
        >
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="relative cursor-pointer group overflow-hidden rounded-xl"
                onClick={() => setSelected(item.src)}
              >
                <img
                  src={item.src}
                  className="w-full mb-4 rounded-xl object-cover group-hover:scale-105 transition duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />

                {/* label */}
                <div className="absolute bottom-3 left-3 text-xs text-white bg-black/60 px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 🔍 LIGHTBOX */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 bg-black/90 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            >
              <motion.img
                src={selected}
                className="max-w-[90%] max-h-[90%] rounded-xl"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              />

              {/* close button */}
              <button className="absolute top-6 right-6 text-white text-2xl">
                ✕
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
