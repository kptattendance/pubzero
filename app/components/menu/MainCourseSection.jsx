"use client";

import { motion } from "framer-motion";

const mains = [
  {
    name: "Paneer Tikka Masala",
    desc: "Paneer cooked in rich tomato gravy.",
    price: 280,
    type: "veg",
    spicy: false,
  },
  {
    name: "Kadai Paneer",
    desc: "Paneer tossed in spicy masala.",
    price: 260,
    type: "veg",
    spicy: true,
  },
  {
    name: "Butter Chicken",
    desc: "Creamy tomato-based chicken curry.",
    price: 320,
    type: "nonveg",
    spicy: false,
  },
  {
    name: "Chicken Tikka Masala",
    desc: "Grilled chicken in spiced gravy.",
    price: 300,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Mutton Rogan Josh",
    desc: "Slow-cooked aromatic mutton curry.",
    price: 380,
    type: "nonveg",
    spicy: true,
  },
];
export default function MainCourseSection({ filter, search }) {
  const filteredItems = mains.filter((item) => {
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
    <section id="main" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Main{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
            Course
          </span>
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 backdrop-blur-lg overflow-hidden group"
            >
              <div className="flex gap-2 mb-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    item.type === "veg"
                      ? "bg-green-500/20 text-green-400"
                      : "bg-red-500/20 text-red-400"
                  }`}
                >
                  {item.type === "veg" ? "Veg 🌱" : "Non-Veg 🍗"}
                </span>

                {item.spicy && (
                  <span className="text-xs px-2 py-1 rounded-full bg-orange-500/20 text-orange-400">
                    Spicy 🌶
                  </span>
                )}
              </div>

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* CONTENT */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.name}
                  </h3>

                  <span className="text-yellow-400 font-bold text-lg">
                    ₹{item.price}
                  </span>
                </div>

                <p className="text-gray-400 text-sm">{item.desc}</p>

                {/* decorative line */}
                <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
