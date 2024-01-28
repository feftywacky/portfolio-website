'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import GlowLamp from '../components/GlowLamp';
import PageTitle from '../components/PageTitle';

const About = () => (
  <div className={`mt-[2rem] lg:mt-[-6rem]`} >
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

        {/* <TypingText title="| About Me" textStyles="text-center" /> */}

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className={`${styles.xPaddings} mt-[2rem] md:mt-[3rem] font-normal md:text-[26px] sm:text-[20px] text-[14px] text-center text-gradient z-10`}
        >
          Hi! My name is Feiyu Lin and I'm currently study Computer Science at the University of Ottawa.


          Outside of school I enjoy reading, going to the gym, and discovering new music.

          temp temp temp temptemp temp temp temptemp temp temp temp
          temp temp temp temp
          temp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temp
          temp temp temp temptemp temp temp ALSKJDLAKSJD
          {' '}
          <span className="font-extrabold text-gradient">
            AAAAAA temp temp temp
          </span>
          {' '}
          temp temp temp temp
          {' '}
          <span className="font-extrabold text-gradient">temp temp temp temp</span> temp temp temp temptemp temp temp tempte
          mp temp temp temptemp temp temp
        </motion.p>

        {/* <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px] z-10"
        /> */}
      </motion.div>
    </GlowLamp>
  </div>
);

export default About;
