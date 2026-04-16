"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
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
          Privacy{" "}
          <span className="text-yellow-400 drop-shadow-[0_0_12px_rgba(255,200,0,0.9)]">
            Policy
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
    title: "1. Introduction",
    content:
      "At Zero Degree Brewery & Kitchen, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit our website or interact with our services.",
  },
  {
    title: "2. Information We Collect",
    content:
      "We may collect personal information such as your name, email address, and phone number when you fill out contact forms, make reservations, or communicate with us.\n\nWe may also collect non-personal data such as browser type, device information, and website usage patterns.",
  },
  {
    title: "3. How We Use Your Information",
    content:
      "Your information is used to:\n\n• Respond to inquiries and provide customer support\n• Manage reservations and bookings\n• Improve our website and services\n• Send updates or promotional information (only if you opt in)",
  },
  {
    title: "4. Data Protection",
    content:
      "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, or misuse. However, no method of transmission over the internet is completely secure.",
  },
  {
    title: "5. Sharing of Information",
    content:
      "We do not sell, rent, or trade your personal information. Your data may be shared only with trusted service providers who assist in operating the website or delivering services, and only when necessary.",
  },
  {
    title: "6. Cookies & Tracking",
    content:
      "Our website may use cookies to enhance user experience and analyze website traffic. You can choose to disable cookies through your browser settings if preferred.",
  },
  {
    title: "7. Third-Party Services",
    content:
      "We may use third-party services such as Google Maps or social media integrations. These platforms have their own privacy policies, and we are not responsible for their practices.",
  },
  {
    title: "8. Your Rights",
    content:
      "You have the right to request access to your personal data, request corrections, or ask for deletion of your data. You may contact us to exercise these rights.",
  },
  {
    title: "9. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. Any changes will be reflected on this page with an updated effective date.",
  },
  {
    title: "10. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us:\n\nEmail: info@zerodegree.com\nPhone: +91 8159919085",
  },
];
