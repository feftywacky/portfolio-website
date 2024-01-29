'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, squareVariants } from '../utils/motion';
import { SkillIcon } from '../components/IconSkill';
import { GlowLamp } from '../components/GlowLamp';
import PageTitle from '../components/PageTitle';



const Skills = () => {

    const [isHoverSkill, setIsHoverSkill] = useState(Array(27).fill(false));

    const skillSquares = [
        {
            svgViewBox: "-47.5 0 351 351",
            imgURL: '/skills/firebase.svg',
            name: "Firebase",
            svgPath1: "M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z",
            svgPath2: "M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z",
            svgPath3: "M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z",
            svgPath4: "M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z",
            svgPath5: "M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268",
            svgPath6: "M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z",
            svgPath7: "M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z",
        },




        // add more objects for more buttons
    ];

    return (
        <div className={` flex flex-col justify-center mt-[-2rem] lg:mt-[-11rem]`}>
            <GlowLamp color="194,97,254" colorDark="53,42,79" >
                <div className={`${styles.xPaddings} flex flex-col items-center`}>

                    {/* <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                    className='justify-center'
                > */}
                    <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
                        <PageTitle
                            title={
                                <>
                                    My Skills
                                </>
                            } />

                    </div>
                    {/* <TypingText title="| My Skills" textStyles="text-center lg:mt-[30px] mb-[20px]" /> */}
                    {/* </motion.div> */}

                    <div className="grid grid-cols-3 mini:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 mt-[3rem]">
                        {Array(27).fill().map((_, i) => {
                            const isHiddenIndex = [].includes(i);
                            // const isHiddenIndex = [1, 7, 10,32,24,15,17,19,20,28,29].includes(i);
                            const skill = skillSquares[i];
                            return (

                                <motion.div

                                    key={i}
                                    className="w-[78px] h-[78px] lg:w-[96px] lg:h-[96px] flex items-center justify-center rounded-[8px] glass-effect"
                                    whileHover={{ backgroundColor: "#332941", transition: { duration: 0.3 }, border: "none", scale: 1.05 }}
                                    onMouseEnter={() => {
                                        setIsHoverSkill(prevState => {
                                            const newState = [...prevState];
                                            newState[i] = true;
                                            return newState;
                                        });
                                    }}
                                    onMouseLeave={() => {
                                        setIsHoverSkill(prevState => {
                                            const newState = [...prevState];
                                            newState[i] = false;
                                            return newState;
                                        });
                                    }}
                                >
                                    {skill && (
                                        <div className="w-3/4 h-3/4 relative flex flex-col items-center justify-center">
                                            <AnimatePresence>
                                                <motion.img
                                                    key={i}
                                                    src={skill.imgURL}
                                                    style={{ width: '50%', height: '50%', position: 'absolute' }}
                                                    initial={{ opacity: 0 }}
                                                    animate={{
                                                        opacity: isHoverSkill[i] ? 1 : 0,
                                                        y: isHoverSkill[i] ? -7 : 0,
                                                        transition: {
                                                            opacity: { duration: 0 },
                                                            y: { duration: 0.3 }
                                                        }
                                                    }}
                                                    exit={{ y: 0 }} />


                                                <motion.div
                                                    style={{ position: 'absolute' }}
                                                    initial={{ opacity: 1 }}
                                                    animate={{
                                                        opacity: isHoverSkill[i] ? 0 : 1,
                                                        y: isHoverSkill[i] ? -7 : 0,
                                                        transition: {
                                                            opacity: { duration: 0 },
                                                            y: { duration: 0.3 }
                                                        }
                                                    }}
                                                    exit={{ y: 0 }}
                                                >
                                                    <SkillIcon
                                                        color={skill.color}
                                                        duration={skill.duration}
                                                        svgPaths={[
                                                            skill.svgPath1,
                                                            skill.svgPath2,
                                                            skill.svgPath3,
                                                            skill.svgPath4,
                                                            skill.svgPath5,
                                                            skill.svgPath6,
                                                            skill.svgPath7,
                                                            skill.svgPath8,
                                                            skill.svgPath9,
                                                            skill.svgPath10,
                                                            skill.svgPath11,
                                                            skill.svgPath12,
                                                            skill.svgPath13,
                                                            skill.svgPath14,
                                                        ]}
                                                        svgViewBox={skill.svgViewBox}
                                                        onHover={isHoverSkill[i]}
                                                        key={i}
                                                    />
                                                </motion.div>

                                            </AnimatePresence>


                                            {isHoverSkill[i] &&
                                                <div className="mt-[80%]">
                                                    <p className="text-xs text-center font-semibold text-white">{skill.name}</p>
                                                </div>
                                            }
                                        </div>
                                    )}
                                </motion.div>
                            )
                        })}

                    </div>
                    {/* 
            </section> */}
                </div>

            </GlowLamp>
        </div>
    )

}


export default Skills;