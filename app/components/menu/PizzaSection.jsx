"use client";

import { motion } from "framer-motion";

const pizzas = [
  {
    name: "Margherita",
    desc: "Classic pizza with basil and mozzarella.",
    price: 280,
    type: "veg",
    spicy: false,
  },
  {
    name: "Fungi Mushroom",
    desc: "Loaded with sautéed mushrooms.",
    price: 320,
    type: "veg",
    spicy: false,
  },
  {
    name: "Paneer 65 Pizza",
    desc: "Spicy paneer topping with cheese.",
    price: 360,
    type: "veg",
    spicy: true,
  },
  {
    name: "Chicken 65 Pizza",
    desc: "Fiery chicken topping on cheesy crust.",
    price: 380,
    type: "nonveg",
    spicy: true,
  },
  {
    name: "Meat Madness",
    desc: "Loaded with assorted meats.",
    price: 420,
    type: "nonveg",
    spicy: false,
  },
];
export default function PizzaSection({ filter, search }) {
  const filteredItems = pizzas.filter((item) => {
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
    <section id="pizza" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Wood Fire{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
            Pizza
          </span>
        </h2>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              className="relative group rounded-2xl p-6 bg-gradient-to-br from-yellow-400/5 to-transparent border border-yellow-400/20 overflow-hidden"
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
              {/* glow hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-yellow-400/10 blur-2xl" />

              {/* CONTENT */}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-400 transition">
                    {item.name}
                  </h3>

                  <p className="text-gray-400 text-sm mb-4">{item.desc}</p>
                </div>

                {/* PRICE */}
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-yellow-400 font-bold text-lg">
                    ₹{item.price}
                  </span>

                  <button className="text-sm px-4 py-1 border border-yellow-400/40 rounded-full hover:bg-yellow-400 hover:text-black transition">
                    Order
                  </button>
                </div>
              </div>

              {/* border animation */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-yellow-400/40 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
