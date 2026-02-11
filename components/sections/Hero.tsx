"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 mobile:px-4 py-20 bg-ally-black">
      <div className="max-w-5xl mx-auto text-center">
        {/* Main Headline - Full title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-5xl md:text-7xl desktop-lg:text-8xl font-bold mb-12 font-inter-display leading-tight tracking-tight text-white"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        {/* Description - Main tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-xl md:text-2xl desktop-lg:text-3xl text-white/90 max-w-4xl mx-auto mb-12 leading-normal font-inter"
        >
          {HERO_CONTENT.description}
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-ally-purple hover:bg-ally-purple/90 text-white px-8 py-4 rounded-lg font-semibold text-lg font-inter-tight hover:shadow-lg hover:shadow-ally-purple/30 transition-all duration-200"
        >
          {HERO_CONTENT.cta}
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="mt-20 text-sm text-white/40 font-inter"
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
}
