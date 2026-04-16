"use client";

export default function MenuSearch({ search, setSearch }) {
  return (
    <div className="bg-black px-6 md:px-16 py-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <input
          type="text"
          placeholder="Search dishes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400"
        />
      </div>
    </div>
  );
}
