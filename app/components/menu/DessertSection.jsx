"use client";

import { motion } from "framer-motion";

const desserts = [
  {
    name: "Sizzling Brownie",
    desc: "Warm brownie with ice cream & chocolate sauce.",
    price: 180,
    type: "veg",
    spicy: false,
  },
  {
    name: "Blueberry Cheesecake",
    desc: "Creamy cheesecake with blueberry topping.",
    price: 220,
    type: "veg",
    spicy: false,
  },
  {
    name: "Mango Panna Cotta",
    desc: "Smooth mango-infused Italian dessert.",
    price: 200,
    type: "veg",
    spicy: false,
  },
  {
    name: "Gulab Jamun",
    desc: "Soft dumplings soaked in sugar syrup.",
    price: 140,
    type: "veg",
    spicy: false,
  },
];
export default function DessertSection({ filter, search }) {
  const filteredItems = desserts.filter((item) => {
    const matchesFilter =
      filter === "Veg"
        ? true // all desserts veg
        : filter === "Non-Veg"
          ? false // no non-veg desserts
          : filter === "Spicy"
            ? false // desserts not spicy
            : true;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="desserts"
      className="bg-gradient-to-b from-black to-zinc-900 text-white py-20 px-6 md:px-16"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12">
          Sweet{" "}
          <span className="text-pink-400 drop-shadow-[0_0_10px_rgba(255,100,150,0.8)]">
            Delights
          </span>
        </h2>

        {/* LIST STYLE */}
        <div className="space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex justify-between items-center p-5 rounded-xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <div className="mb-2">
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400">
                  Veg 🌱
                </span>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>

              <span className="text-pink-400 font-bold text-lg">
                ₹{item.price}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
