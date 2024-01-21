'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';


const Skills = () => {


    return(
    <section className={`${styles.paddings} flex flex-col items-center justify-center h-screen w-screen`} id="skills">
   
        <TypingText title="| My Skills" textStyles="text-center"/>


        <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
        >


        <div className="grid grid-cols-6 border-2 border-grey-500 p-5">
           
            
            <div className="h-20 w-20 bg-gray-200">Item 1</div>
            <div className="h-20 w-20 bg-gray-200">Item 2</div>
            <div className="h-20 w-20 bg-gray-200">Item 3</div>
            <div className="h-20 w-20 bg-gray-200">Item 4</div>
            <div className="h-20 w-20 bg-gray-200">Item 5</div>
            <div className="h-20 w-20 bg-gray-200">Item 6</div>
            <div className="h-20 w-20 bg-gray-200">Item 1</div>
            <div className="h-20 w-20 bg-gray-200">Item 2</div>
            <div className="h-20 w-20 bg-gray-200">Item 3</div>
            <div className="h-20 w-20 bg-gray-200">Item 4</div>
            <div className="h-20 w-20 bg-gray-200">Item 5</div>
            <div className="h-20 w-20 bg-gray-200">Item 6</div>
            
        </div>

        </motion.div>

    </section>
    )

} 


export default Skills;