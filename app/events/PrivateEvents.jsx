"use client";

export default function PrivateEvents() {
  return (
    <section className="px-6 md:px-16 text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-yellow-400/10 to-transparent p-10 rounded-2xl border border-yellow-400/20">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Host Your Own Event
        </h2>

        <p className="text-gray-400 mb-6">
          Birthdays, corporate events, or special celebrations — we’ve got you
          covered.
        </p>

        <button className="px-6 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition">
          Book Now
        </button>
      </div>
    </section>
  );
}
