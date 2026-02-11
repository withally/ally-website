"use client";

import { motion } from "framer-motion";
import { WHY_NOW } from "@/lib/constants";

export default function WhyNow() {
  return (
    <section id="why-now" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/60 mb-12">
            {WHY_NOW.sectionLabel}
          </p>

          <h2 className="font-editorial text-[38px] tablet:text-[80px] desktop:text-[80px] desktop-lg:text-[80px] leading-[1.1] tracking-tight text-white mb-12">
            {WHY_NOW.headline}
          </h2>

          <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 max-w-[600px] leading-[1.6]">
            {WHY_NOW.body}
          </p>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 desktop-lg:grid-cols-3 gap-6 mt-16">
          {WHY_NOW.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-[#191919] border border-[#424242]/20"
            >
              <h3 className="text-[14px] font-inter-tight font-bold tracking-[0.5px] text-[#fec9ff] mb-3">
                {card.title}
              </h3>
              <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.4]">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
