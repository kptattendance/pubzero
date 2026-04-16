"use client";

const weekly = [
  { day: "Monday", event: "Chill Acoustic Night" },
  { day: "Wednesday", event: "Ladies Night" },
  { day: "Friday", event: "Live Band" },
  { day: "Saturday", event: "DJ Night" },
];

export default function WeeklyEvents() {
  return (
    <section className="px-6 md:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
          Weekly Highlights
        </h2>

        <div className="space-y-6">
          {weekly.map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center p-5 bg-white/5 rounded-xl border border-white/10"
            >
              <span className="text-yellow-400 font-semibold">{item.day}</span>
              <span className="text-gray-300">{item.event}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
