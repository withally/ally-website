"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-8xl md:text-9xl font-bold mb-6 font-inter-tight"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl md:text-3xl text-ally-pink mb-8 font-inter-tight"
        >
          {HERO_CONTENT.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-ally-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-ally-green text-ally-bg px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-ally-green/20 transition-shadow"
        >
          {HERO_CONTENT.cta}
        </motion.button>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-20 text-sm text-ally-white/40"
        >
          Scroll to explore ↓
        </motion.div>
      </div>
    </section>
  );
}
