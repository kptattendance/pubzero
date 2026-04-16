"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "DJ Night Blast",
    date: "Saturday",
    desc: "High-energy DJ night with top hits.",
    img: "/images/gallery/7.png",
  },
  {
    title: "Live Band Night",
    date: "Friday",
    desc: "Experience live music performances.",
    img: "/images/gallery/8.png",
  },
  {
    title: "Ladies Night",
    date: "Wednesday",
    desc: "Special offers & music for ladies.",
    img: "/images/gallery/9.png",
  },
];

export default function UpcomingEvents() {
  return (
    <section className="px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Upcoming <span className="text-yellow-400">Events</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 group"
            >
              <img
                src={event.img}
                className="h-52 w-full object-cover group-hover:scale-110 transition"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{event.title}</h3>
                <p className="text-yellow-400 text-sm">{event.date}</p>
                <p className="text-gray-400 text-sm mt-2">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
