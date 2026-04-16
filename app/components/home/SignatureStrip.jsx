"use client";

export default function SignatureStrip() {
  const items = [
    { title: "Craft Beers", icon: "🍺" },
    { title: "Live Music", icon: "🎶" },
    { title: "Global Cuisine", icon: "🌍" },
    { title: "Nightlife", icon: "🌃" },
  ];

  return (
    <section className="bg-black py-14 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-6 rounded-xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition"
          >
            <div className="text-3xl mb-2">{item.icon}</div>
            <h3 className="text-sm md:text-base font-semibold text-gray-200">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
