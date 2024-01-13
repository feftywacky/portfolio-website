'use client';

import { motion } from "framer-motion";
import { navVariants } from '../utils/motion';
import styles from '../styles';


const Navbar = () => {
  const redirectToGithub = () => {
    window.open('https://github.com/feftywacky/', '_blank');
  };

  const redirectToLinkedin = () => {
    window.open('https://www.linkedin.com/in/feiyu-lin-uo/', '_blank');
  };

  const redirectToEmail = () => {
    window.open('mailto:linfeyu14@gmail.com', '_blank');
  };

  const redirectToResume = () => {
    window.open('/FEIYU_LIN_CS.pdf', '_blank');
  };

  const NavButton = ({ onClick, imgSrc, altText }) => (
    <button className="w-[50px] h-[50px] flex items-center justify-center transition-all duration-300 z-10 transform hover:scale-110"
      onClick={onClick}>
      <img src={imgSrc} alt={altText} className="w-full h-full object-contain" />
    </button>
  );

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[125%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-end gap-6 items-center`}>
        <NavButton onClick={redirectToResume} imgSrc="/resume.svg" altText="resume" />
        <NavButton onClick={redirectToEmail} imgSrc="/email.svg" altText="email" />
        <NavButton onClick={redirectToLinkedin} imgSrc="/linkedin.svg" altText="linkedin" />
        <NavButton onClick={redirectToGithub} imgSrc="/github-icon.svg" altText="github" />
      </div>
    </motion.nav>
  );
};

export default Navbar;
