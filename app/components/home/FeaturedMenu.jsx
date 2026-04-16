"use client";

import Link from "next/link";

const items = [
  { name: "Chicken Ghee Roast", price: 360 },
  { name: "Paneer Tikka", price: 280 },
  { name: "Butter Chicken", price: 320 },
];

export default function FeaturedMenu() {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl text-white font-bold mb-12">
          Featured <span className="text-yellow-400">Dishes</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:scale-105 transition"
            >
              <h3 className="text-lg  text-white font-semibold">{item.name}</h3>
              <p className="text-yellow-400 mt-2">₹{item.price}</p>
            </div>
          ))}
        </div>

        <Link href="/menu">
          <button className="mt-10 px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
}
