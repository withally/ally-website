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
          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[90px] leading-[1.1] tracking-tight text-white mb-8">
            We&rsquo;re{" "}
            <span className="text-[#fec9ff]">hiring!</span>
          </h2>
          <p className="text-[15px] font-inter-tight tracking-[0.5px] text-white/80 max-w-[800px] leading-[1.6]">
            {HIRING.intro}
          </p>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-2 desktop-lg:grid-cols-2 gap-6">
          {HIRING.roles.map((role, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#141414] border border-dashed border-[#424242]/50"
            >
              <h3 className="text-[30px] tablet:text-[35px] font-editorial leading-[1.2] text-white mb-2">
                {role.title}
              </h3>
              {role.location && (
                <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white mb-6">
                  {role.location}
                </p>
              )}

              <div className="border-t border-[#424242]/40 mb-6" />

              <ul className="space-y-4 mb-8">
                {role.responsibilities.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[15px] font-inter-tight tracking-[0.5px] text-[#999] leading-[1.6]"
                  >
                    <svg
                      className="mt-1 flex-shrink-0 w-[16px] h-[16px] text-[#7734b3]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {role.cta && (
                <a
                  href={SITE_CONFIG.hiringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-gradient-to-r from-[#6b2fa0] to-[#9b45d6] text-[14px] font-inter-tight tracking-[0.5px] text-white hover:from-[#7734b3] hover:to-[#a855e8] transition-all"
                >
                  {role.cta}
                  <span className="text-[12px]">&#8599;</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
