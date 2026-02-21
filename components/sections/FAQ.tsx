"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[90px] leading-[1.1] tracking-tight text-white">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-[#191919] border border-[#424242]/20 overflow-hidden"
        >
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className={index < FAQ_ITEMS.length - 1 ? "border-b border-[#424242]/20" : ""}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 text-left flex items-center gap-6 group"
              >
                <span className="flex-shrink-0 text-[16px] text-white/50">&#8599;</span>
                <span className="text-[15px] font-inter-tight tracking-[0.5px] text-white leading-[1.4]">
                  {item.question}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pl-[72px] text-[15px] font-inter-tight tracking-[0.5px] text-[#858585] leading-[1.6] max-w-[600px]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
