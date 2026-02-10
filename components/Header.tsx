"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      // Show header after scrolling 200px
      setIsVisible(window.scrollY > 200);

      // Update active section based on scroll position
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: -110, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -110, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
        >
          <nav className="bg-ally-bg/80 backdrop-blur-xl border border-ally-gray-800 rounded-full px-6 py-3 shadow-2xl">
            <ul className="flex items-center gap-2">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        isActive
                          ? "text-ally-bg"
                          : "text-ally-white/70 hover:text-ally-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-ally-green rounded-full -z-10"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
