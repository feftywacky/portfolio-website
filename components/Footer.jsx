'use client';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <div
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.yPaddings} ${styles.xPaddings} mx-auto flex flex-col items-center justify-center gap-8`}
  >
    <p className="font-normal text-[14px] md:text-[20px] text-gradient opacity-75 text-center">
      Made by yours truly. Designed in Figma. Built using Next.js, Tailwind CSS and Framer. Deployed with Vercel. 
      </p>
      <p className="font-normal text-[14px] md:text-[16px] text-white opacity-70 mt-[-1rem]">
        © 2024 Feiyu Lin. All rights reserved.&nbsp;&hearts;

      </p>
  </div>
);

export default Footer;