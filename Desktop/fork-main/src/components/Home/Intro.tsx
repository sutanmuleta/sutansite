import React from "react";
import { socials, animations } from "../../constants";
import { motion } from "framer-motion";
import Link from "../Global/Link";
import ScrambleText from "../Global/ScrambleText";
import Image from "next/image";

const Intro = () => {
  return (
    <div className="bg-[#5C2A3E] text-white min-h-screen p-10 space-y-10">
      {/* Name */}
      <h1 className="text-5xl font-bold tracking-tight body">Sutan Tadese</h1>

      {/* ScrambleText */}
      <ScrambleText
        text="builder. researcher working at the intersection of machine learning, decentralized AI, and blockchain technology."
        settings={{ speed: 0.5 }}
      />
      <p className="text-sm text-pink-300">sutanmuleta@outlook.com</p>

      {/* Profile Image */}
      <div className="pt-4">
        <Image
          src="/profile.jpg"
          alt="Sutan Tadese — Builder and Researcher"
          width={540}
          height={720}
          quality={85}
          priority
        />
      </div>

      {/* Nav Section */}
      <div className="space-y-3">
        <motion.ul variants={animations.containerVariants}>
          <motion.li variants={animations.itemVariants} className="body">
            <ScrambleText text="ON HERE" />
          </motion.li>
          <div className="sm:block sm:-space-y-5 flex flex-wrap">
            <motion.li variants={animations.itemVariants}>
              <Link text="lists" href="/lists" className="pr-2 space-x-1" />
            </motion.li>
          </div>
        </motion.ul>
      </div>

      {/* Social Links Section */}
      <div className="space-y-3">
        <motion.ul variants={animations.containerVariants}>
          <motion.li variants={animations.itemVariants} className="body">
            <ScrambleText text="ELSEWHERE" />
          </motion.li>
          <div className="sm:block sm:-space-y-5 flex flex-wrap">
            {socials.map((social, index) => (
              <motion.li variants={animations.itemVariants} key={social.name}>
                <Link
                  text={social.name}
                  href={social.url}
                  className="pr-2 space-x-1"
                />
                {index < socials.length - 1 && (
                  <p className="pr-2 sm:pr-0 sm:invisible sm:block inline">•</p>
                )}
              </motion.li>
            ))}
          </div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Intro;
