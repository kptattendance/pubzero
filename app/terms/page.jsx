"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
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
          Terms &{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.9)]">
            Conditions
          </span>
        </motion.h1>

        <p className="relative mt-4 text-gray-400 text-sm">
          Effective Date: {new Date().toLocaleDateString()}
        </p>
      </section>

      {/* 🔥 CONTENT */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* SECTION */}
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
    title: "1. Acceptance of Terms",
    content:
      "By accessing and using the Zero Degree Brewery & Kitchen website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree, please do not use this website.",
  },
  {
    title: "2. Use of Website",
    content:
      "This website is intended to provide information about our menu, events, and services. You agree not to misuse the website, attempt unauthorized access, or engage in any activity that may harm the platform or its users.",
  },
  {
    title: "3. Reservations & Bookings",
    content:
      "Table reservations and event bookings are subject to availability. We reserve the right to modify or cancel reservations in case of unforeseen circumstances.\n\nGuests are expected to arrive on time. Delays may result in cancellation or reassignment of the table.",
  },
  {
    title: "4. Payments & Pricing",
    content:
      "All prices listed on the website are subject to change without prior notice. Any applicable taxes and service charges will be added as per regulations.\n\nCurrently, online payments may not be enabled. Payments are typically collected at the venue.",
  },
  {
    title: "5. User Conduct",
    content:
      "Users are expected to behave responsibly while interacting with the website or visiting the venue. Any inappropriate behavior, misuse, or violation of rules may result in denial of service.",
  },
  {
    title: "6. Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and design, is the property of Zero Degree Brewery & Kitchen and may not be copied, reproduced, or used without permission.",
  },
  {
    title: "7. Limitation of Liability",
    content:
      "We strive to keep the website accurate and up to date, but we do not guarantee completeness or accuracy at all times.\n\nZero Degree Brewery & Kitchen shall not be held liable for any direct or indirect damages arising from the use of this website.",
  },
  {
    title: "8. Third-Party Links",
    content:
      "This website may contain links to third-party platforms such as social media or maps. We are not responsible for the content or policies of those platforms.",
  },
  {
    title: "9. Privacy",
    content:
      "Any personal information shared through forms on this website will be handled with care and used only for communication or service-related purposes.",
  },
  {
    title: "10. Modifications",
    content:
      "We reserve the right to update or modify these Terms & Conditions at any time without prior notice. Continued use of the website implies acceptance of the updated terms.",
  },
  {
    title: "11. Contact Information",
    content:
      "For any questions regarding these Terms & Conditions, you may contact us at:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
