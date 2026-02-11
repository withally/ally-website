"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);

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
          <nav className="bg-[#0f0f0f]/80 backdrop-blur-xl border border-[#424242]/30 rounded-full px-2 py-2 shadow-2xl">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className={`relative px-4 py-2 rounded-full text-[14px] font-inter-tight tracking-[0.5px] transition-colors whitespace-nowrap ${
                        isActive
                          ? "text-[#0f0f0f]"
                          : "text-white/70 hover:text-white"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeSection"
                          className="absolute inset-0 bg-[#fec9ff] rounded-full -z-10"
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
              <li>
                <a
                  href={SITE_CONFIG.requestAccessUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-[14px] font-inter-tight tracking-[0.5px] bg-[#fec9ff] text-[#0f0f0f] whitespace-nowrap hover:opacity-90 transition-opacity"
                >
                  Request Access
                </a>
              </li>
            </ul>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
