'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';

const Explore = () => {
  const [active, setActive] = useState('project-2');

  return (
    <section className={`${styles.paddings} flex items-center h-screen w-screen`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| My Projects" textStyles="text-center" />
        <div className=" mt-[20px] lg:mt-[5px] flex lg:flex-row flex-col items-center min-h-[70vh] gap-5 border-2 border-blue-500">
          {projects.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
