'use client';

import styles from '../styles';
import { footerVariants } from '../utils/motion';

const Footer = () => (
  <div
    variants={footerVariants}
    className={`${styles.xPaddings} pb-[1.5rem] mx-auto flex flex-col items-center justify-center gap-8`}
  >
    <p className="font-normal text-[14px] md:text-[18px] text-gradient opacity-75 text-center">
      Made by yours truly. Designed in Figma. Built using Next.js, Tailwind CSS and Framer. Deployed with Vercel. 
      </p>
      <p className="font-normal text-[12px] md:text-[16px] text-light-blue opacity-70 mt-[-1.5rem]">
        © 2024 Feiyu Lin. All rights reserved.&nbsp;&hearts;

      </p>
  </div>
);

export default Footer;