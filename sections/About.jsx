'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import GlowLamp from '../components/GlowLamp';

const About = () => (
  <section className={`${styles.paddings} flex items-center h-screen w-screen relative z-10`}>

    <GlowLamp color="40,87,255" colorDark="48,58,117">

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| About Me" textStyles="text-center" />

        <motion.p
          variants={fadeIn('up', 'tween', 0.2, 1)}
          className="mt-[22px] font-normal md:text-[26px] sm:text-[20px] text-[16px] text-center text-secondary-white"
        >
          Hi! My name is Feiyu Lin and I'm currently study Computer Science at the University of Ottawa.


          Outside of school I enjoy reading, going to the gym, and discovering new music.

          temp temp temp temptemp temp temp temptemp temp temp temp
          temp temp temp temp
          temp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temptemp temp temp temp
          temp temp temp temptemp temp temp ALSKJDLAKSJD
          {' '}
          <span className="font-extrabold text-white">
            AAAAAA temp temp temp
          </span>
          {' '}
          temp temp temp temp
          {' '}
          <span className="font-extrabold text-white">temp temp temp temp</span> temp temp temp temptemp temp temp tempte
          mp temp temp temptemp temp temp
        </motion.p>

        <motion.img
          variants={fadeIn('up', 'tween', 0.3, 1)}
          src="/arrow-down.svg"
          alt="arrow down"
          className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
    </GlowLamp>
  </section>
);

export default About;
