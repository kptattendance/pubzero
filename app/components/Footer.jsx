"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* 🔥 COLUMN 1 — BRAND */}
        <div>
          <Link href="/">
            <h2 className="text-2xl font-extrabold mb-4">
              <span className="text-yellow-400 drop-shadow-[0_0_10px_rgba(255,200,0,0.8)]">
                Zero
              </span>{" "}
              Degree
            </h2>
          </Link>

          <p className="text-gray-400 text-sm mb-4">
            Where craft brews meet unforgettable nights. Experience the perfect
            blend of taste, music, and ambience.
          </p>

          <p className="text-sm text-gray-300">📧 info@zerodegree.com</p>
          <p className="text-sm text-gray-300">📞 +91 8159919085</p>
          <p className="text-sm text-gray-300 mt-2">📍 Bengaluru, Karnataka</p>
        </div>

        {/* 🔥 COLUMN 2 — LEGAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">Legal</h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Refund Policy</Link>
            </li>
            <li>
              <Link href="#">Disclaimer</Link>
            </li>
          </ul>
        </div>

        {/* 🔥 COLUMN 3 — QUICK LINKS (IMPROVED) */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Explore
          </h3>

          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/menu">Menu</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* 🔥 COLUMN 4 — CONTACT + SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Stay Connected
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Follow us for latest events & offers
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mb-4">
            <span className="cursor-pointer hover:text-yellow-400 transition">
              🌐
            </span>
            <span className="cursor-pointer hover:text-yellow-400 transition">
              📸
            </span>
            <span className="cursor-pointer hover:text-yellow-400 transition">
              🎵
            </span>
          </div>

          {/* CTA */}
          <button className="px-5 py-2 rounded-full bg-yellow-400 text-black text-sm font-semibold hover:scale-105 transition shadow-[0_0_12px_rgba(255,200,0,0.6)]">
            Book a Table
          </button>
        </div>
      </div>

      {/* 🔻 BOTTOM BAR */}
      <div className="border-t border-white/10 py-6 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Zero Degree. All rights reserved.</p>

        <p className="mt-2 md:mt-0">
          Designed with 🍻 for unforgettable nights
        </p>
      </div>
    </footer>
  );
}
