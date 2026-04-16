"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Menu", path: "/menu" },
  { name: "Events", path: "/events" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔥 CLICKABLE LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            {/* LOGO IMAGE */}
            <img
              src="/images/logo.png"
              alt="Zero Degree Logo"
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />

            {/* TEXT */}
            <h1 className="text-xl md:text-2xl font-extrabold tracking-wide text-white">
              <span className="text-yellow-400 drop-shadow-[0_0_8px_rgba(255,200,0,0.8)]">
                Zero
              </span>{" "}
              Degree
            </h1>
          </motion.div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link key={item.path} href={item.path} className="relative group">
                <span
                  className={`transition ${
                    isActive
                      ? "text-yellow-400"
                      : "text-white group-hover:text-yellow-400"
                  }`}
                >
                  {item.name}
                </span>

                {/* underline */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-yellow-400 transition-all duration-300
                  ${
                    isActive
                      ? "w-full shadow-[0_0_8px_rgba(255,200,0,0.8)]"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 rounded-full font-semibold text-black bg-yellow-400 shadow-[0_0_15px_rgba(255,200,0,0.6)]"
          >
            <Link
              href="/book"
              className="px-6 py-2 rounded-full bg-yellow-400 text-black font-semibold inline-block text-center"
            >
              Book Table
            </Link>
          </motion.button>
        </div>

        {/* MOBILE ICON */}
        <div className="md:hidden text-white">
          {isOpen ? (
            <X size={28} onClick={() => setIsOpen(false)} />
          ) : (
            <Menu size={28} onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-xl px-6 py-6 space-y-5"
        >
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block text-lg ${
                  isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center bg-yellow-400 text-black py-3 rounded-full font-semibold"
          >
            Book Table
          </Link>
        </motion.div>
      )}
    </motion.nav>
  );
}
