"use client";

import { motion } from "framer-motion";

const specials = [
  {
    name: "Chicken Ghee Roast",
    desc: "A coastal Karnataka specialty with bold spices and rich ghee flavor.",
    price: 360,
    tag: "Chef Special",
  },
  {
    name: "Kodi Karavepaku Vapudu",
    desc: "Andhra-style spicy chicken fry with curry leaves and aromatic spices.",
    price: 340,
    tag: "Spicy Hit 🌶",
  },
  {
    name: "Malabar Prawns Ghee Roast",
    desc: "Juicy prawns roasted in rich Malabar masala with ghee.",
    price: 420,
    tag: "Must Try",
  },
];

export default function SignatureSection() {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-14 text-center">
          Signature{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
            Specials
          </span>
        </h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {specials.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative rounded-3xl overflow-hidden group bg-gradient-to-br from-yellow-400/10 to-transparent border border-yellow-400/20 p-8"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* TAG */}
              <span className="absolute top-4 right-4 text-xs bg-yellow-400 text-black px-3 py-1 rounded-full font-semibold">
                {item.tag}
              </span>

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-400 transition">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>

                {/* PRICE */}
                <div className="mt-6 text-right">
                  <span className="text-yellow-400 text-xl font-bold">
                    ₹{item.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
