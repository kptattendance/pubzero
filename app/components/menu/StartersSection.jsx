"use client";

import { motion } from "framer-motion";

const starters = [
  {
    name: "Paneer Popcorn",
    desc: "Crispy fried paneer cubes coated with herbs.",
    img: "/images/food/1.png",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Chicken Popcorn",
    desc: "Golden fried chicken bites served with dip.",
    img: "/images/food/2.png",
    price: 260,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Chicken Strips Peri Peri",
    desc: "Crispy strips tossed in peri peri seasoning.",
    img: "/images/food/3.png",
    price: 280,
    type: "nonveg",
    spicy: true,
  },
];

export default function StartersSection({ filter, search }) {
  const filteredItems = starters.filter((item) => {
    const matchesFilter =
      filter === "Veg"
        ? item.type === "veg"
        : filter === "Non-Veg"
          ? item.type === "nonveg"
          : filter === "Spicy"
            ? item.spicy
            : true;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });
  return (
    <section id="starters" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Delicious{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
            Starters
          </span>
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="flex gap-2 mb-2">
                {/* Veg / Non-Veg */}
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.type === "veg"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {item.type === "veg" ? "Veg 🌱" : "Non-Veg 🍗"}
                </span>

                {/* Spicy */}
                {item.spicy && (
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                    Spicy 🌶
                  </span>
                )}
              </div>

              {/* IMAGE */}
              <div className="h-56 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 z-10">
                <h3 className="text-lg font-semibold text-white">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-300 mt-1">{item.desc}</p>
              </div>

              {/* GLOW BORDER */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
