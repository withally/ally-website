"use client";

import Image from "next/image";
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
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 max-w-[600px] leading-[1.6] mb-8">
            {HIRING.intro}
          </p>
          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white whitespace-pre-line">
            {HIRING.headline}
          </h2>
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
                    className="flex items-start gap-3 text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6]"
                  >
                    <Image
                      src="/images/checkmark.png"
                      alt=""
                      width={14}
                      height={14}
                      className="mt-1 flex-shrink-0 opacity-50"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {role.cta && (
                <a
                  href={SITE_CONFIG.hiringUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[14px] font-inter-tight tracking-[0.5px] text-[#fec9ff] hover:text-white transition-colors"
                >
                  {role.cta}
                  <Image
                    src="/images/arrow-icon.png"
                    alt=""
                    width={14}
                    height={14}
                    className="opacity-70"
                  />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
