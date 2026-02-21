"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHY_NOW } from "@/lib/constants";

const CARD_IMAGES = [
  { src: "/images/illustration-scales-square.png", alt: "Judgment", aspect: "aspect-square" },
  { src: "/images/illustration-scales.jpg", alt: "System", aspect: "aspect-[4/3]" },
  { src: "/images/illustration-growth.jpg", alt: "Scale", aspect: "aspect-[4/3]" },
];

export default function WhyNow() {
  return (
    <section id="why-now" className="py-32 px-6 bg-[#7734b3] rounded-[24px] mx-4 tablet:mx-6">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="font-editorial text-[28px] tablet:text-[36px] desktop:text-[42px] leading-[1.4] tracking-[-0.02em] text-white/60 mb-12">
            {WHY_NOW.sectionLabel}
          </h3>

          <h2 className="font-editorial text-[55px] tablet:text-[70px] desktop:text-[80px] desktop-lg:text-[115px] leading-[1.1] tracking-tight text-white mb-12">
            {WHY_NOW.headline}
          </h2>

          <p className="text-[15px] font-inter-tight tracking-[0.5px] text-white/70 max-w-[600px] leading-[1.6]">
            {WHY_NOW.body}
          </p>
        </motion.div>

        <div className="grid mobile:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 desktop-lg:grid-cols-3 gap-6">
          {WHY_NOW.cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-white/10 backdrop-blur-sm overflow-hidden"
            >
              {/* Card image */}
              <div className="aspect-[4/3] overflow-hidden rounded-t-2xl bg-white">
                <Image
                  src={CARD_IMAGES[index].src}
                  alt={CARD_IMAGES[index].alt}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Card text */}
              <div className="p-6">
                <h3 className="text-[30px] tablet:text-[35px] font-editorial leading-[1.2] text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-[15px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.4]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
