'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';
import GlowLamp from '../components/GlowLamp';
import PageTitle from '../components/PageTitle';


const Explore = () => {
  const [active, setActive] = useState('project-2');

  return (

    <div className="flex flex-col justify-center mt-[-10rem] mb-[24rem]">
      <GlowLamp color="40,87,255" colorDark="48,58,117">

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mx-auto flex flex-col`}
        >
          <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter} mb-[-1rem] lg:mb-[0rem] flex-col`} >
            <PageTitle
              title={
                <>
                  My Projects
                </>
              } />

          </div>

          {/* <TypingText title="| My Projects" textStyles="text-center" /> */}
          <div className={`${styles.xPaddings} mt-[1.5rem] mini:mt-[3rem] lg:mt-[2rem] flex projects_lg:flex-row flex-col min-h-[70vh] md:min-h-[60vh] lg:min-h-[50vh] gap-5 z-20`}> 
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

      </GlowLamp>
    </div>
  );
};

export default Explore;
