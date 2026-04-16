"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10">
          {/* 🔥 MAP + INFO */}
          <div className="md:w-2/3 relative rounded-2xl overflow-hidden">
            {/* MAP */}
            <iframe
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2346.1385927646497!2d77.52065461574493!3d12.917595622894094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3face64ecd29%3A0x59a7f7f88ae47b89!2sBEML%20Layout%2C%20Rajarajeshwari%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560098!5e1!3m2!1sen!2sin!4v1776354220621!5m2!1sen!2sin"
              style={{
                filter: "grayscale(1) contrast(1.2) brightness(0.7)",
              }}
            />

            {/* INFO CARD */}
            <div className="relative z-10 bg-black/70 backdrop-blur-lg p-6 m-6 rounded-xl border border-white/10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h2 className="text-xs text-gray-400 mb-1">ADDRESS</h2>
                  <p className="text-sm text-gray-200">
                    Zero Degree Brewery & Kitchen, <br />
                    BEML Layout, Rajarajeshwari Nagar, <br />
                    Bengaluru, Karnataka - 560098
                  </p>
                </div>

                <div>
                  <h2 className="text-xs text-gray-400 mb-1">EMAIL</h2>
                  <p className="text-yellow-400 text-sm">info@zerodegree.com</p>

                  <h2 className="text-xs text-gray-400 mt-4 mb-1">PHONE</h2>
                  <p className="text-gray-200 text-sm">+91 8159919085</p>
                </div>
              </div>
            </div>
          </div>

          {/* 🔥 FORM */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            className="md:w-1/3 bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10"
          >
            <h2 className="text-2xl font-bold mb-2">
              Get in <span className="text-yellow-400">Touch</span>
            </h2>

            <p className="text-gray-400 mb-6 text-sm">
              Have a question or want to book an event? We’d love to hear from
              you.
            </p>

            {/* FORM */}
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-yellow-400 focus:outline-none"
              />

              <button className="w-full py-3 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition shadow-[0_0_15px_rgba(255,200,0,0.6)]">
                Send Message
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">
              We typically respond within a few hours.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
