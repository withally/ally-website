"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHAT_TO_EXPECT } from "@/lib/constants";

export default function WhatToExpect() {
  return (
    <section id="working-with-us" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[90px] leading-[1.1] tracking-tight text-white">
            What to expect after{" "}
            <span className="text-[#fec9ff]">working with us</span>
          </h2>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-[1fr_300px] gap-12">
          <div className="space-y-10">
            {WHAT_TO_EXPECT.timeline.map((phase, phaseIndex) =>
              phase.items.map((item, idx) => (
                <motion.div
                  key={`${phaseIndex}-${idx}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-[12px] font-inter-tight tracking-[0.5px] text-[#7734b3] mb-3">
                    {phase.period}
                  </p>
                  <p className="font-editorial text-[24px] tablet:text-[30px] desktop:text-[35px] leading-[1.3] text-white">
                    {item}
                  </p>
                </motion.div>
              ))
            )}
          </div>

          {/* Decorative gradient image */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="hidden tablet:block rounded-2xl overflow-hidden sticky top-32 h-fit"
          >
            <Image
              src="/images/gradient-art-1.png"
              alt=""
              width={300}
              height={300}
              className="w-full h-auto rounded-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
