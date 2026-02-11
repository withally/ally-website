"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/60 mb-12">
            {HOW_IT_WORKS.sectionLabel}
          </p>

          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white mb-12">
            {HOW_IT_WORKS.headline}
          </h2>
        </motion.div>

        <div className="space-y-8 max-w-[800px]">
          {HOW_IT_WORKS.steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#191919] border border-[#424242]/20"
            >
              <div className="flex items-start gap-4">
                <span className="text-[14px] font-inter-tight tracking-[0.5px] text-[#fec9ff] font-bold">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-[30px] font-editorial leading-[1.2] text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-[14px] font-inter-tight tracking-[0.5px] text-white/50 max-w-[500px] leading-[1.6]"
        >
          {HOW_IT_WORKS.bottomText}
        </motion.p>
      </div>
    </section>
  );
}
