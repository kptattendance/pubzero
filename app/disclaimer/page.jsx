"use client";

import { motion } from "framer-motion";

export default function DisclaimerPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      {/* 🔥 HERO */}
      <section className="relative py-24 text-center px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-4xl md:text-6xl font-extrabold"
        >
          Website{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.9)]">
            Disclaimer
          </span>
        </motion.h1>

        <p className="relative mt-4 text-gray-400 text-sm">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
      </section>

      {/* 🔥 CONTENT */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {sections.map((sec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10"
            >
              <h2 className="text-xl md:text-2xl font-semibold mb-4 text-yellow-400">
                {sec.title}
              </h2>

              <p className="text-gray-300 leading-relaxed text-sm md:text-base whitespace-pre-line">
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
    title: "1. General Information",
    content:
      "The information provided on this website is for general informational purposes only. While we strive to keep all details accurate and up to date, Zero Degree Brewery & Kitchen makes no warranties regarding completeness, reliability, or accuracy.",
  },
  {
    title: "2. Food & Beverage Disclaimer",
    content:
      "Menu items, ingredients, and availability may change without prior notice. Customers are advised to inform staff about any allergies or dietary restrictions before ordering.\n\nWe are not responsible for adverse reactions caused due to undisclosed allergies.",
  },
  {
    title: "3. Events & Promotions",
    content:
      "All events, offers, and promotions displayed on the website are subject to change or cancellation without prior notice. Entry to events may be subject to terms, availability, and venue policies.",
  },
  {
    title: "4. External Links Disclaimer",
    content:
      "This website may contain links to third-party websites or services. We do not control or guarantee the accuracy or reliability of content on external platforms and are not responsible for any damages arising from their use.",
  },
  {
    title: "5. Limitation of Liability",
    content:
      "Under no circumstances shall Zero Degree Brewery & Kitchen be liable for any loss or damage arising from the use of this website or reliance on its content.",
  },
  {
    title: "6. Professional Disclaimer",
    content:
      "The content on this website does not constitute professional advice of any kind. Any decisions made based on the information provided are at the user's own discretion and risk.",
  },
  {
    title: "7. Consent",
    content:
      "By using our website, you hereby consent to this disclaimer and agree to its terms.",
  },
  {
    title: "8. Updates",
    content:
      "We reserve the right to update, amend, or make changes to this disclaimer at any time without prior notice. Changes will be reflected on this page.",
  },
  {
    title: "9. Contact Us",
    content:
      "If you have any questions regarding this disclaimer, you may contact us:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
