'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { projects } from '../constants';
import { staggerContainer, squareVariants } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';


const Skills = () => {

    const gridSize = 6;

    const skill = ({ onClick, svgPath1, svgPath2, svgPath3, svgPath4 }) => {
        const [hoverKey, setHoverKey] = useState(false);
        const [isHovered, setIsHovered] = useState(false);
        const [hoverColor, setHoverColor] = useState("rgba(255, 255, 255, 1)");

        const icon = {
            hidden: {
                opacity: 1,
                pathLength: 0,
                scale: 2,
                fill: "rgba(255, 255, 255, 0)"
            },
            visible: {
                opacity: 1,
                pathLength: 1,
                scale: 2,
                fill: hoverColor
            },

        };


        return (
            <motion.button
                className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px]  md:w-[32px] md:h-[32px] flex items-center justify-center transition-all duration-300 z-10 transform"
                onClick={onClick}
                whileHover={{ scale: 1.15, transition: { duration: 0 } }}

                onMouseEnter={() => { setIsHovered(true); setHoverColor("#00FF7F"); }}
                onMouseLeave={() => { setIsHovered(false); setHoverColor("rgba(255, 255, 255, 1)"); }}

                onHoverEnd={() => setHoverKey(prevKey => prevKey + 1)}
            >
                <motion.svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="item" style={{ transform: 'translate(-7px, -7px)' }}>
                    <motion.path
                        key={hoverKey + "path1"}
                        d={svgPath1}
                        variants={icon}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: isHovered ? 0 : 2, ease: [0.85, 0, 0.15, 1] }
                        }}
                    />
                    <motion.path
                        key={hoverKey + "path2"}
                        d={svgPath2}
                        variants={icon}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: isHovered ? 0 : 2, ease: [0.85, 0, 0.15, 1] }
                        }}
                    />
                    <motion.path
                        key={hoverKey + "path3"}
                        d={svgPath3}
                        variants={icon}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: isHovered ? 0 : 2, ease: [0.85, 0, 0.15, 1] }
                        }}
                    />
                    <motion.path
                        key={hoverKey + "path4"}
                        d={svgPath4}
                        variants={icon}
                        initial={"hidden"}
                        animate={"visible"}
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: isHovered ? 0 : 2, ease: [0.85, 0, 0.15, 1] }
                        }}
                    />
                </motion.svg>
            </motion.button>
        );
    };

    return (
        <section className={`${styles.paddings} flex flex-col items-center min-h-screen overflow-auto border-2 border-pink-500`} id="skills">

            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='justify-center border-2 border-green-500'
            >
                <TypingText title="| My Skills" textStyles="text-center lg:mt-[30px] mb-[20px]" />              
            </motion.div>

            <div className="grid grid-cols-3 mini:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-2 border-2 border-yellow-500">
                {Array(54).fill().map((_, i) => {
                    const isHiddenIndex = [].includes(i);
                    // const isHiddenIndex = [1, 7, 10,32,24,15,17,19,20,28,29].includes(i);
                    return (
                        <motion.div

                            key={i}
                            className="w-[78px] h-[78px] border-2 text-white flex items-center justify-center"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: isHiddenIndex ? 0 : 1 }}
                            transition={{ duration: 0.2, delay: i * 0.05 }}
                        >
                            hi
                        </motion.div>
                    )
                })}

            </div>

        </section>
    )

}


export default Skills;