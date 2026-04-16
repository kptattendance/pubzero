"use client";

import Link from "next/link";

export default function StickyBooking() {
  return (
    <div className="fixed bottom-0 left-0 w-full z-40 md:hidden">
      <div className="bg-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex justify-between items-center">
        <span className="text-sm text-gray-300">Reserve your table now 🍻</span>

        <Link href="/book">
          <button className="px-5 py-2 bg-yellow-400 text-black rounded-full font-semibold shadow-[0_0_10px_rgba(255,200,0,0.6)]">
            Book Now
          </button>
        </Link>
      </div>
    </div>
  );
}
