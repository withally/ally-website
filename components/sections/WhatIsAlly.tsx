"use client";

import { motion } from "framer-motion";
import { WHAT_ALLY_IS } from "@/lib/constants";

export default function WhatIsAlly() {
  return (
    <section id="what-ally-is" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/60 mb-12">
            {WHAT_ALLY_IS.sectionLabel}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white">
            <span>{WHAT_ALLY_IS.heading.line1}</span>
            <br />
            <span className="text-[#fec9ff]">{WHAT_ALLY_IS.heading.line2}</span>
            <br className="hidden tablet:block" />
            <span className="text-[#fec9ff] tablet:hidden"> </span>
            <span>{WHAT_ALLY_IS.heading.line3}</span>
            <br />
            <span>{WHAT_ALLY_IS.heading.line4}</span>
            <br className="hidden tablet:block" />
            <span> {WHAT_ALLY_IS.heading.line5}</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 max-w-[600px] leading-[1.6]"
        >
          {WHAT_ALLY_IS.body}
        </motion.p>
      </div>
    </section>
  );
}
