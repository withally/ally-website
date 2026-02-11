"use client";

import { motion } from "framer-motion";
import { HERO_CONTENT, SITE_CONFIG } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <div className="max-w-[900px] mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="font-editorial text-[45px] tablet:text-[80px] desktop:text-[100px] desktop-lg:text-[100px] leading-[1.1] tracking-tight text-white mb-8"
        >
          {HERO_CONTENT.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-[14px] tablet:text-[14px] desktop:text-[14px] text-white/80 max-w-[600px] mx-auto mb-10 leading-[1.4] tracking-[0.5px] font-inter-tight"
        >
          {HERO_CONTENT.description}
        </motion.p>

        <motion.a
          href={SITE_CONFIG.requestAccessUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-[#fec9ff] text-[#0f0f0f] px-8 py-3 rounded-full font-inter-tight text-[14px] font-normal tracking-[0.5px] hover:opacity-90 transition-opacity"
        >
          {HERO_CONTENT.cta}
        </motion.a>
      </div>

      {/* Scrolling Request Access marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-20 w-full overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap">
          {Array.from({ length: 12 }).map((_, i) => (
            <a
              key={i}
              href={SITE_CONFIG.requestAccessUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-8 text-white/20 text-[14px] font-inter-tight tracking-[0.5px] hover:text-white/40 transition-colors"
            >
              Request Access
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
