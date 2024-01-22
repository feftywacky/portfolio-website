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
        className={`${styles.innerWidth} mx-auto flex flex-col mt-[50px] md:mt-[50px]`}
      >
        <TypingText title="| My Projects" textStyles="text-center" />
        <div className=" mt-[20px] md:mt-[3 0px] lg:mt-[40px] flex projects_lg:flex-row flex-col min-h-[70vh] md:min-h-[60vh] lg:min-h-[50vh] gap-5">
          {projects.map((project, index) => (
            <ExploreCard
              key={project.id}
              {...project}
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
