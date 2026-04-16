"use client";

import { useState } from "react";
import { motion } from "framer-motion";
const categories = [
  { name: "Soups / Salads", id: "soups" },
  { name: "Starters", id: "starters" },
  { name: "Main Course", id: "main" },
  { name: "Pizza", id: "pizza" },
  { name: "Desserts", id: "desserts" },
];

export default function MenuTabs({ active, setActive }) {
  return (
    <div className="sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setActive(cat.name);

              const el = document.getElementById(cat.id);
              if (el) {
                const yOffset = -120; // adjust based on navbar height
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="relative px-5 py-2 text-sm md:text-base whitespace-nowrap"
          >
            <span
              className={`transition ${
                active === cat.name ? "text-yellow-400" : "text-gray-300"
              }`}
            >
              {cat.name}
            </span>

            {active === cat.name && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-1 h-[2px] bg-yellow-400 shadow-[0_0_8px_rgba(255,200,0,0.8)]"
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
