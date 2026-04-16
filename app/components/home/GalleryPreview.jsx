"use client";

import Link from "next/link";

export default function GalleryPreview() {
  const images = [
    "/images/gallery/1.png",
    "/images/gallery/7.png",
    "/images/gallery/3.png",
    "/images/gallery/4.png",
  ];

  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl  text-white font-bold mb-12 text-center">
          Our <span className="text-yellow-400">Vibe</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              className="rounded-xl object-cover h-40 w-full hover:scale-105 transition"
            />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/gallery">
            <button className="px-6 py-3 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition">
              Explore Gallery
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
