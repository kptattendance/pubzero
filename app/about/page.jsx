"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative bg-black text-white min-h-screen px-6 md:px-16 pt-28 pb-20">
      {/* 🔥 GLOBAL GLOW BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-yellow-400/10 blur-[120px]" />
        <div className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-yellow-400/5 blur-[120px]" />
      </div>

      {/* 🔥 MAIN CONTENT */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* 🖼 IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <img
              src="/images/hero.png"
              alt="Zero Degree ambience"
              className="rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] object-cover w-full h-[400px] md:h-[500px] hover:scale-[1.02] transition duration-500"
            />

            <div className="absolute inset-0 rounded-2xl bg-yellow-400/10 blur-2xl"></div>
          </motion.div>

          {/* 📝 CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              About{" "}
              <span className="text-yellow-400 drop-shadow-[0_0_18px_rgba(255,200,0,1)]">
                Zero Degree
              </span>
            </h1>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Zero Degree Brewery & Kitchen was founded with a vision to create
              a vibrant destination where craft brewing meets exceptional dining
              and unforgettable social experiences. Designed as a modern
              brewery, it blends contemporary aesthetics with a relaxed and
              welcoming vibe.
            </p>

            <p className="text-gray-400 leading-relaxed mb-6">
              From freshly brewed in-house beers to a diverse global culinary
              journey, every element is crafted to delight. Whether you're
              enjoying a casual evening with friends or celebrating special
              moments, Zero Degree offers an atmosphere that brings people
              together.
            </p>

            <p className="text-gray-400 leading-relaxed mb-10">
              Known for live music, DJ nights, sports screenings, and themed
              events, it has quickly become a go-to destination for
              unforgettable nightlife experiences in the city.
            </p>

            {/* ✨ HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-6">
              {[
                {
                  title: "🍺 Craft Brewing",
                  desc: "Signature in-house brewed beers crafted to perfection.",
                },
                {
                  title: "🌍 Global Cuisine",
                  desc: "A curated fusion of Indian and international flavors.",
                },
                {
                  title: "🎶 Live Events",
                  desc: "DJ nights, live music, and vibrant themed experiences.",
                },
                {
                  title: "🎉 Celebrations",
                  desc: "Ideal venue for parties, birthdays, and corporate gatherings.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-yellow-400/40 hover:bg-white/10 transition duration-300 hover:shadow-[0_0_20px_rgba(255,200,0,0.15)] hover:scale-[1.03]"
                >
                  <h4 className="text-yellow-400 font-semibold mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🔥 PHILOSOPHY */}
        <section className="mt-20 pt-20 pb-32 bg-gradient-to-b from-black via-zinc-900 to-black text-center px-6 relative overflow-hidden">
          {/* GLOW */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-yellow-400/10 blur-[120px]" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto relative z-10"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-yellow-400 drop-shadow-[0_0_25px_rgba(255,200,0,1)]">
                Philosophy
              </span>
            </h2>

            <p className="text-gray-400 leading-relaxed text-lg">
              At Zero Degree, we believe nightlife is not just about drinks —
              it’s about energy, connection, and unforgettable moments. Every
              detail, from our handcrafted brews to curated music, is designed
              to create an atmosphere where people come alive.
            </p>
          </motion.div>
        </section>
        {/* 🔥 STATS */}
        <section className="-mt-20 pb-20 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Signature Dishes" },
              { number: "20+", label: "Craft Beers" },
              { number: "1000+", label: "Happy Guests" },
              { number: "5★", label: "Customer Experience" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ scale: [0.9, 1] }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-black/60 backdrop-blur-xl border border-white/10
                   hover:border-yellow-400/40 transition
                   shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
              >
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-400">
                  {item.number}
                </h3>
                <p className="text-gray-400 text-sm mt-2">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔥 EXPERIENCE */}
        <section className="mt-20 px-6 md:px-0">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Ambience",
                desc: "Modern interiors with vibrant lighting",
                img: "/images/gallery/1.png",
              },
              {
                title: "Music",
                desc: "Live DJs & curated playlists",
                img: "/images/gallery/8.png",
              },
              {
                title: "Food & Drinks",
                desc: "Fusion cuisine & signature cocktails",
                img: "/images/gallery/6.png",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                viewport={{ once: true }}
                className="relative rounded-xl overflow-hidden group"
              >
                <img
                  src={item.img}
                  className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-300">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 🔥 WHY CHOOSE */}
        <section className="mt-20 text-center py-24 bg-gradient-to-r from-black via-zinc-900 to-black rounded-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-12">
            Why Choose{" "}
            <span className="text-yellow-400 drop-shadow-[0_0_18px_rgba(255,200,0,1)]">
              Zero Degree
            </span>
          </h2>

          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Experience",
                desc: "Every visit is designed to feel exclusive and memorable.",
              },
              {
                title: "Vibrant Nightlife",
                desc: "Music, energy, and atmosphere like no other.",
              },
              {
                title: "Quality & Taste",
                desc: "Crafted food and drinks with unmatched consistency.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: [0, 1], y: [40, 0] }}
                viewport={{ once: true }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-yellow-400/40 hover:shadow-[0_0_20px_rgba(255,200,0,0.1)]"
              >
                <h3 className="text-lg font-semibold mb-2 text-yellow-400">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
