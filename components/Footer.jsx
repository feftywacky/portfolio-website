'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex flex-col items-center justify-center gap-8`}>
    <p className="font-normal text-[14px] md:text-[20px] text-gradient opacity-75 text-center">
      Designed in Figma by yours truly. Built with Next.js, Tailwind CSS and Framer Motion. Deployed with Vercel. 
      </p>
      <p className="font-normal text-[14px] md:text-[14px] text-white opacity-70 mt-[-1rem]">
        © 2024  Feiyu Lin&nbsp;&nbsp;&hearts;

      </p>
    </div>
  </motion.footer>
);

export default Footer;