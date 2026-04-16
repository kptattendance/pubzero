"use client";

export default function MenuFilter({ filter, setFilter }) {
  const filters = ["All", "Veg", "Non-Veg", "Spicy"];

  return (
    <div className="sticky top-[80px] z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4 overflow-x-auto">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded-full text-sm border transition ${
              filter === item
                ? "bg-yellow-400 text-black border-yellow-400"
                : "text-gray-300 border-white/20 hover:border-yellow-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
