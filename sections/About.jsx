'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import GlowLamp from '../components/GlowLamp';
import PageTitle from '../components/PageTitle';

const About = () => (
  <div className={`flex flex-col justify-center mt-[-8rem] sm:mt-[-9rem] lg:mt-[-2rem] mb-[8rem]`}>
    <GlowLamp color="0,225,244" colorDark="23,70,81">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mb-[6rem] md:mb-[3rem] lg:mb-[2rem] mx-auto ${styles.flexCenter} flex-col`}
      >

        <PageTitle
          title={
            <>
              About Me
            </>
          } />

        <motion.p
          variants={fadeIn('up', 'tween', 1, 1)}
          className={`${styles.xPaddings} mt-[1rem] sm:mt-[2rem] font-normal md:text-[24px] mini:text-[18px] text-[14px] text-center text-white z-10`}
        >
          Hello there! My name is Feiyu Lin, a passionate Computer Science student pursuing my studies at the University of Ottawa.
          
          With a strong background in programming and software development, I am dedicated to creating innovative solutions that positively impact society.
          
          As an aspiring software developer, I am eager to gain practical experience and contribute towards meaingful projects.

          I'm a passionate coder with an huge appetite for learning and innovation. When I'm not immersed in lines of code, you'll find me 
          reading, going to the gym, or discovering new music.

          I believe that coding isn't just a career path for me; it's a journey of discovery and growth!
        </motion.p>
      </motion.div>
    </GlowLamp>
  </div>
);

export default About;