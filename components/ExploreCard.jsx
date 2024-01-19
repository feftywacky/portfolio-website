'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { fadeIn } from '../utils/motion';

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('up', 'easeOut', index * 0.5, 0.75)}
    className={`relative ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
    } flex items-center justify-center min-w-[170px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
    whileHover={() => handleClick(id)}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt="project"
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {active !== id ? (
      <h3
        className="font-semibold text-[18px] sm:text-[20px] md:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
        {title}
      </h3>
    ) : (
      <div className={`absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]`}>
        <div className={`flex flex-row space-x-3`}>
        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
        >
          <img
            src="/github.svg"
            alt="github"
            className="w-full h-full object-contain"
          />
        </div>

        <div
          className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism`}
        >
          <img
            src="/export.png"
            alt="github"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        </div>
        
        {/* <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
          Source Code
        </p> */}
        <h2 className="mt-[12px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;

