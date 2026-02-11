"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHAT_TO_EXPECT } from "@/lib/constants";

export default function WhatToExpect() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white whitespace-pre-line">
            {WHAT_TO_EXPECT.heading}
          </h2>
        </motion.div>

        <div className="space-y-12 max-w-[800px]">
          {WHAT_TO_EXPECT.timeline.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="flex gap-8 mobile:flex-col"
            >
              <div className="flex-shrink-0 w-[140px]">
                <span className="text-[30px] font-editorial text-[#fec9ff] leading-[1.2]">
                  {phase.period}
                </span>
              </div>
              <div className="space-y-4">
                {phase.items.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Image
                      src="/images/checkmark.png"
                      alt=""
                      width={16}
                      height={16}
                      className="mt-1 flex-shrink-0 opacity-60"
                    />
                    <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
