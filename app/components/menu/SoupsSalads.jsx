"use client";

import { motion } from "framer-motion";

const soups = [
  {
    name: "Broccoli Almond Soup",
    desc: "Broccoli with cream and almonds.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Tomato Basil Soup",
    desc: "Classic tomato soup with basil.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Lemon Coriander Soup",
    desc: "Light soup with herbs and lime.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Hot & Sour Soup",
    desc: "Spicy Indo-Chinese soup.",
    type: "veg",
    spicy: true,
  },
];

const salads = [
  {
    name: "Waldorf Salad",
    desc: "Apples, nuts, and creamy dressing.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Avocado Pesto Salad",
    desc: "Fresh avocado with pesto sauce.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Watermelon Feta Salad",
    desc: "Sweet watermelon with feta cheese.",
    type: "veg",
    spicy: false,
  },
  {
    name: "Mexican Taco Salad",
    desc: "Crunchy tortilla with veggies.",
    type: "veg",
    spicy: true,
  },
];
export default function SoupsSalads({ filter, search }) {
  const applyFilter = (items) => {
    return items.filter((item) => {
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
  };

  const filteredSoups = applyFilter(soups);
  const filteredSalads = applyFilter(salads);

  return (
    <section id="soup" className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        {/* 🔥 TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Fresh &{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
            Light
          </span>
        </h2>

        {/* 🥣 SOUPS */}
        <div className="mb-16">
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-6">
            Soups
          </h3>

          <div className="space-y-6">
            {filteredSoups.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="border-b border-white/10 pb-4"
              >
                <div className="flex gap-2 mb-1">
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
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 🥗 SALADS */}
        <div>
          <h3 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-6">
            Salads
          </h3>

          <div className="space-y-6">
            {filteredSalads.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="border-b border-white/10 pb-4"
              >
                <div className="flex gap-2 mb-1">
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
                <div className="flex justify-between items-center">
                  <h4 className="text-lg font-medium">{item.name}</h4>
                </div>
                <p className="text-gray-400 text-sm mt-1">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
