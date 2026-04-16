"use client";

export default function CTASection() {
  return (
    <section className="py-20 px-6 md:px-16 text-center bg-gradient-to-r from-yellow-400/10 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready for an{" "}
          <span className="text-yellow-400">Unforgettable Night?</span>
        </h2>

        <p className="text-gray-400 mb-8">
          Reserve your table now and experience the vibe.
        </p>

        <button className="px-8 py-3 bg-yellow-400 text-black rounded-full font-semibold hover:scale-105 transition shadow-[0_0_15px_rgba(255,200,0,0.6)]">
          Book a Table
        </button>
      </div>
    </section>
  );
}
