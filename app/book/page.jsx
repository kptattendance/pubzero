"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function BookPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    hour: "",
    minute: "",
    period: "PM",
    guests: "2",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Set today's date + current time
  useEffect(() => {
    const now = new Date();

    const today = now.toISOString().split("T")[0];

    let hour = now.getHours();
    const minute = now.getMinutes();

    const period = hour >= 12 ? "PM" : "AM";

    hour = hour % 12 || 12;

    setForm((prev) => ({
      ...prev,
      date: today,
      hour: String(hour).padStart(2, "0"),
      minute: String(minute).padStart(2, "0"),
      period,
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.date || !form.hour || !form.minute) {
      Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please fill all fields",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15",
      });
      return;
    }

    setLoading(true);

    const timeFormatted = `${form.hour}:${form.minute} ${form.period}`;

    const message = `🍻 *Table Booking Request*

Name: ${form.name}
Phone: ${form.phone}
Date: ${form.date}
Time: ${timeFormatted}
Guests: ${form.guests}`;

    const url = `https://wa.me/9591228330?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);

      Swal.fire({
        icon: "success",
        title: "Redirecting to WhatsApp...",
        text: "Click send to confirm your booking",
        background: "#111",
        color: "#fff",
        confirmButtonColor: "#facc15",
      }).then(() => {
        window.open(url, "_blank");
      });
    }, 800);
  };

  return (
    <main className="bg-black text-white min-h-screen flex items-center justify-center px-6">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-zinc-900 to-black p-8 mt-20 rounded-2xl border border-white/10 w-full max-w-md space-y-4 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
      >
        <h2 className="text-2xl font-bold text-yellow-400 mb-4 text-center">
          Book a Table
        </h2>

        {/* NAME */}
        <input
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 bg-zinc-800/80 text-white border border-white/10 rounded focus:border-yellow-400 outline-none"
        />

        {/* PHONE */}
        <input
          placeholder="Phone Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full p-3 bg-zinc-800/80 text-white border border-white/10 rounded focus:border-yellow-400 outline-none"
        />

        {/* DATE */}
        <input
          type="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          className="w-full p-3 bg-zinc-800/80 text-white border border-white/10 rounded focus:border-yellow-400"
        />

        {/* TIME DROPDOWNS */}
        <div className="flex gap-2">
          {/* HOUR */}
          <select
            value={form.hour}
            onChange={(e) => setForm({ ...form, hour: e.target.value })}
            className="w-1/3 p-3 bg-zinc-800/80 text-white border border-white/10 rounded"
          >
            {[...Array(12)].map((_, i) => {
              const val = String(i + 1).padStart(2, "0");
              return <option key={val}>{val}</option>;
            })}
          </select>

          {/* MINUTE */}
          <select
            value={form.minute}
            onChange={(e) => setForm({ ...form, minute: e.target.value })}
            className="w-1/3 p-3 bg-zinc-800/80 text-white border border-white/10 rounded"
          >
            {["00", "15", "30", "45"].map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          {/* AM/PM */}
          <select
            value={form.period}
            onChange={(e) => setForm({ ...form, period: e.target.value })}
            className="w-1/3 p-3 bg-zinc-800/80 text-white border border-white/10 rounded"
          >
            <option>AM</option>
            <option>PM</option>
          </select>
        </div>

        {/* GUESTS */}
        <select
          value={form.guests}
          onChange={(e) => setForm({ ...form, guests: e.target.value })}
          className="w-full p-3 bg-zinc-800/80 text-white border border-white/10 rounded"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((g) => (
            <option key={g}>{g} Guests</option>
          ))}
        </select>

        {/* BUTTON */}
        <button
          disabled={loading}
          className={`w-full py-3 rounded-full font-semibold transition ${
            loading
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-yellow-400 text-black hover:scale-105 shadow-[0_0_15px_rgba(255,200,0,0.6)]"
          }`}
        >
          {loading ? "Processing..." : "Book via WhatsApp"}
        </button>

        {/* CALL */}
        <a
          href="tel:+918159919085"
          className="block text-center text-sm text-gray-400 hover:text-yellow-400 mt-2"
        >
          Or Call Us Directly
        </a>
      </form>
    </main>
  );
}
