"use client";

import { motion } from "framer-motion";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <a
            href={`mailto:${SITE_CONFIG.email}`}
            className="block font-inter-tight text-[38px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[100px] leading-[1.1] text-white hover:text-[#fec9ff] transition-colors"
          >
            {SITE_CONFIG.email}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center justify-between pt-8 border-t border-[#424242]/20"
        >
          <div>
            <p className="text-[12px] font-inter-tight tracking-[0.5px] text-[#fec9ff]">
              Copywrite &copy; 2025
            </p>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-[12px] font-inter-tight tracking-[0.5px] text-white hover:text-[#fec9ff] transition-colors"
            >
              {SITE_CONFIG.email}
            </a>
          </div>
          <a
            href={SITE_CONFIG.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-inter-tight tracking-[0.5px] text-white hover:text-[#fec9ff] transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
