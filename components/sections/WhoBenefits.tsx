"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHO_BENEFITS } from "@/lib/constants";

const CARD_GRADIENTS = [
  "/images/gradient-art-1.png",
  "/images/gradient-art-2.png",
];

const TITLE_COLORS = ["text-[#fec9ff]", "text-[#e8d8b7]"];

export default function WhoBenefits() {
  return (
    <section id="who" className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[90px] leading-[1.1] tracking-tight text-white">
            Who tends to{" "}
            <span className="text-[#fec9ff]">get the most</span>{" "}
            from Ally
          </h2>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 gap-6">
          {WHO_BENEFITS.audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative rounded-2xl overflow-hidden min-h-[300px]"
            >
              {/* Gradient background image */}
              <Image
                src={CARD_GRADIENTS[index]}
                alt=""
                fill
                className="object-cover"
              />
              {/* Content overlay */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                <h3 className={`text-[30px] tablet:text-[35px] font-editorial leading-[1.2] ${TITLE_COLORS[index]} mb-3`}>
                  {audience.title}
                </h3>
                <p className="text-[15px] font-inter-tight font-bold tracking-[0.5px] text-white mb-3 leading-[1.4]">
                  {audience.subtitle}
                </p>
                <p className="text-[15px] font-inter-tight tracking-[0.5px] text-white/90 leading-[1.6]">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Not for card */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: WHO_BENEFITS.audiences.length * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.1 }}
            className="rounded-2xl bg-[#191919] border border-[#424242]/20 p-6"
          >
            <h3 className="text-[15px] font-inter-tight font-bold tracking-[0.5px] text-white/40 mb-6">
              Not for
            </h3>
            <ul className="space-y-4">
              {WHO_BENEFITS.notFor.map((item, index) => (
                <li
                  key={index}
                  className="text-[15px] font-inter-tight tracking-[0.5px] text-[#858585] leading-[1.6]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
