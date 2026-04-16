"use client";

import { useState } from "react";
import MenuHero from "../components/menu/MenuHero";
import MenuTabs from "../components/menu/MenuTabs";
import SoupsSalads from "../components/menu/SoupsSalads";
import StartersSection from "../components/menu/StartersSection";
import MainCourseSection from "../components/menu/MainCourseSection";
import PizzaSection from "../components/menu/PizzaSection";
import DessertSection from "../components/menu/DessertSection";
import SignatureSection from "../components/menu/SignatureSection";
import MenuFilter from "../components/menu/MenuFilter";
import { useEffect } from "react";
import MenuSearch from "../components/menu/MenuSearch";

export default function MenuPage() {
  const [active, setActive] = useState("Soups");

  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const sections = ["soups", "starters", "main", "pizza", "desserts"];

    const handleScroll = () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(
              id === "main"
                ? "Main Course"
                : id.charAt(0).toUpperCase() + id.slice(1),
            );
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
  const sectionMap = {
    soups: "Soups / Salads",
    starters: "Starters",
    main: "Main Course",
    pizza: "Pizza",
    desserts: "Desserts",
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActive(sectionMap[id]);
        }
      });
    },
    {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // 👈 KEY MAGIC
      threshold: 0,
    }
  );

  const sections = Object.keys(sectionMap);

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });

  return () => observer.disconnect();
}, []);
  return (
    <main className="bg-black text-white min-h-screen">
      {/* HERO */}
      <MenuHero />

      {/* 🔥 SIGNATURE SECTION (better placement) */}
      <SignatureSection />
      {/* 🔥 STICKY CONTROL BAR */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        {/* Tabs */}
        <MenuTabs active={active} setActive={setActive} />

        {/* Search + Filter Row */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex-1">
            <MenuSearch search={search} setSearch={setSearch} />
          </div>

          <div className="flex justify-start md:justify-end">
            <MenuFilter filter={filter} setFilter={setFilter} />
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="pt-10 space-y-16">
        <div id="soups">
          <SoupsSalads filter={filter} search={search} />
        </div>

        <div id="starters">
          <StartersSection filter={filter} search={search} />
        </div>

        <div id="main">
          <MainCourseSection filter={filter} search={search} />
        </div>

        <div id="pizza">
          <PizzaSection filter={filter} search={search} />
        </div>

        <div id="desserts">
          <DessertSection filter={filter} search={search} />
        </div>
      </div>
    </main>
  );
}
