"use client";

import { motion } from "framer-motion";
import { HIRING, SITE_CONFIG } from "@/lib/constants";

export default function Hiring() {
  return (
    <section id="hiring" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white whitespace-pre-line mb-8">
            {HIRING.headline}
          </h2>
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 max-w-[600px] leading-[1.6]">
            {HIRING.intro}
          </p>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 desktop-lg:grid-cols-2 gap-8">
          {HIRING.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#191919] border border-[#424242]/20"
            >
              <h3 className="text-[30px] font-editorial leading-[1.2] text-white mb-2">
                {role.title}
              </h3>
              {role.location && (
                <p className="text-[12px] font-inter-tight tracking-[0.5px] text-[#fec9ff] mb-6">
                  {role.location}
                </p>
              )}
              <ul className="space-y-3 mb-6">
                {role.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6] pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-[5px] before:h-[5px] before:rounded-full before:bg-[#fec9ff]/40"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              {role.cta && (
                <a
                  href={SITE_CONFIG.hiringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[14px] font-inter-tight tracking-[0.5px] text-[#fec9ff] hover:text-white transition-colors"
                >
                  {role.cta} →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
