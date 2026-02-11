"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { WHO_BENEFITS } from "@/lib/constants";

const AUDIENCE_IMAGES = [
  { src: "/images/gradient-art-1.png", alt: "" },
  { src: "/images/gradient-art-2.png", alt: "" },
];

export default function WhoBenefits() {
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
            {WHO_BENEFITS.heading}
          </h2>
        </motion.div>

        <div className="space-y-6 mb-12">
          {WHO_BENEFITS.audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex mobile:flex-col gap-6 p-8 rounded-2xl bg-[#191919] border border-[#424242]/20"
            >
              {/* Avatar image */}
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl overflow-hidden">
                  <Image
                    src={AUDIENCE_IMAGES[index].src}
                    alt={AUDIENCE_IMAGES[index].alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Content */}
              <div>
                <h3 className="text-[30px] font-editorial leading-[1.2] text-[#fec9ff] mb-2">
                  {audience.title}
                </h3>
                <p className="text-[14px] font-inter-tight font-bold tracking-[0.5px] text-white mb-4 leading-[1.4]">
                  {audience.subtitle}
                </p>
                <p className="text-[14px] font-inter-tight tracking-[0.5px] text-white/70 leading-[1.6]">
                  {audience.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-[#191919]/50 border border-[#424242]/10"
        >
          <h3 className="text-[14px] font-inter-tight font-bold tracking-[0.5px] text-white/40 mb-4">
            Not for
          </h3>
          <ul className="space-y-3">
            {WHO_BENEFITS.notFor.map((item, index) => (
              <li
                key={index}
                className="text-[14px] font-inter-tight tracking-[0.5px] text-white/50 leading-[1.6]"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
