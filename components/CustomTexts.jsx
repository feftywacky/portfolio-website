'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({title, textStyles}) => (
  <motion.p
  variants={textContainer}
  className={`font-normal sm:text-[38px] md:text-[48px] text-white ${textStyles}`}>
    {title.split("").map((letter, index) => (
      <motion.span
        key={index}
        variants={textVariant2}
        className="inline-block"
      >
        {letter===" " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

