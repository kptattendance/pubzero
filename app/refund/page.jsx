"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <section className="relative py-24 text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl md:text-6xl font-extrabold"
        >
          Refund <span className="text-yellow-400">Policy</span>
        </motion.h1>
      </section>

      {/* CONTENT */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-5xl mx-auto space-y-10">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-3 text-yellow-400">
                {sec.title}
              </h2>

              <p className="text-gray-300 text-sm whitespace-pre-line">
                {sec.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

const sections = [
  {
    title: "1. General Policy",
    content:
      "Currently, Zero Degree Brewery & Kitchen does not process online payments through this website. All payments are made at the venue unless otherwise specified.",
  },
  {
    title: "2. Reservations",
    content:
      "Table reservations are free of charge. In case of special bookings or event reservations requiring advance payment, refund eligibility will be communicated at the time of booking.",
  },
  {
    title: "3. Event Bookings",
    content:
      "For ticketed or paid events, refunds may not be applicable unless the event is cancelled by the venue. In such cases, refunds or rescheduling options will be provided.",
  },
  {
    title: "4. Cancellations",
    content:
      "Customers are encouraged to cancel reservations in advance. Repeated no-shows may result in restricted booking privileges.",
  },
  {
    title: "5. Future Payments",
    content:
      "If online payments are introduced in the future, this policy will be updated to include detailed refund timelines, eligibility, and processing methods.",
  },
  {
    title: "6. Contact",
    content:
      "For any queries regarding refunds or cancellations:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
