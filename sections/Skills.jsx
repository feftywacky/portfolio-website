'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, squareVariants } from '../utils/motion';
import { ExploreCard, TypingText } from '../components';
import { SkillIcon } from '../components/IconSkill';
import { GlowLamp } from '../components/GlowLamp';
import PageTitle from '../components/PageTitle';


const Skills = () => {

    const [isHoverSkill, setIsHoverSkill] = useState(Array(24).fill(false));

    const skillSquares = [
        {
            name: "JavaScript",
            svgPath1: "M 29.5,29.5 C 180.167,29.5 330.833,29.5 481.5,29.5C 481.5,180.167 481.5,330.833 481.5,481.5C 330.833,481.5 180.167,481.5 29.5,481.5C 29.5,330.833 29.5,180.167 29.5,29.5 Z",
            svgPath2: "M 32.5,32.5 C 181.167,32.5 329.833,32.5 478.5,32.5C 478.5,181.167 478.5,329.833 478.5,478.5C 329.833,478.5 181.167,478.5 32.5,478.5C 32.5,329.833 32.5,181.167 32.5,32.5 Z",
            svgPath3: "M 364.5,233.5 C 384.685,231.446 402.685,236.613 418.5,249C 424.457,254.787 429.457,261.287 433.5,268.5C 422.436,276.227 411.103,283.561 399.5,290.5C 392.202,277.001 380.869,271.168 365.5,273C 352.921,279.47 350.088,288.97 357,301.5C 359.743,303.788 362.577,305.955 365.5,308C 379.748,314.86 394.082,321.527 408.5,328C 443.848,347.701 454.015,376.534 439,414.5C 425.806,433.856 407.306,444.022 383.5,445C 345.391,448.779 316.724,434.279 297.5,401.5C 308.965,394.263 320.632,387.263 332.5,380.5C 347.083,404.639 367.416,411.472 393.5,401C 403.813,391.4 404.146,381.4 394.5,371C 389.833,368.333 385.167,365.667 380.5,363C 362.701,356.434 346.034,347.768 330.5,337C 313.03,320.921 306.53,301.088 311,277.5C 316.089,259.75 326.923,246.916 343.5,239C 350.44,236.453 357.44,234.619 364.5,233.5 Z",
            svgPath4: "M 232.5,236.5 C 247.167,236.5 261.833,236.5 276.5,236.5C 276.667,287.834 276.5,339.168 276,390.5C 273.836,418.377 259.336,435.877 232.5,443C 203.377,450.347 178.543,443.181 158,421.5C 154.334,416.838 151.167,411.838 148.5,406.5C 159.625,398.43 171.292,391.097 183.5,384.5C 187.566,390.742 192.233,396.575 197.5,402C 206.806,406.619 216.14,406.619 225.5,402C 228.807,398.094 230.974,393.594 232,388.5C 232.5,337.834 232.667,287.168 232.5,236.5 Z"
        },


        // add more objects for more buttons
    ];

    skillSquares[4] = {
        name: "temp",
        svgPath1: "M 29.5,29.5 C 180.167,29.5 330.833,29.5 481.5,29.5C 481.5,180.167 481.5,330.833 481.5,481.5C 330.833,481.5 180.167,481.5 29.5,481.5C 29.5,330.833 29.5,180.167 29.5,29.5 Z",
        svgPath2: "M 32.5,32.5 C 181.167,32.5 329.833,32.5 478.5,32.5C 478.5,181.167 478.5,329.833 478.5,478.5C 329.833,478.5 181.167,478.5 32.5,478.5C 32.5,329.833 32.5,181.167 32.5,32.5 Z",
        svgPath3: "M 364.5,233.5 C 384.685,231.446 402.685,236.613 418.5,249C 424.457,254.787 429.457,261.287 433.5,268.5C 422.436,276.227 411.103,283.561 399.5,290.5C 392.202,277.001 380.869,271.168 365.5,273C 352.921,279.47 350.088,288.97 357,301.5C 359.743,303.788 362.577,305.955 365.5,308C 379.748,314.86 394.082,321.527 408.5,328C 443.848,347.701 454.015,376.534 439,414.5C 425.806,433.856 407.306,444.022 383.5,445C 345.391,448.779 316.724,434.279 297.5,401.5C 308.965,394.263 320.632,387.263 332.5,380.5C 347.083,404.639 367.416,411.472 393.5,401C 403.813,391.4 404.146,381.4 394.5,371C 389.833,368.333 385.167,365.667 380.5,363C 362.701,356.434 346.034,347.768 330.5,337C 313.03,320.921 306.53,301.088 311,277.5C 316.089,259.75 326.923,246.916 343.5,239C 350.44,236.453 357.44,234.619 364.5,233.5 Z",
        svgPath4: "M 232.5,236.5 C 247.167,236.5 261.833,236.5 276.5,236.5C 276.667,287.834 276.5,339.168 276,390.5C 273.836,418.377 259.336,435.877 232.5,443C 203.377,450.347 178.543,443.181 158,421.5C 154.334,416.838 151.167,411.838 148.5,406.5C 159.625,398.43 171.292,391.097 183.5,384.5C 187.566,390.742 192.233,396.575 197.5,402C 206.806,406.619 216.14,406.619 225.5,402C 228.807,398.094 230.974,393.594 232,388.5C 232.5,337.834 232.667,287.168 232.5,236.5 Z"
    }

    return (
        <GlowLamp color="194,97,254" colorDark="53,42,79" className={`${styles.paddings} flex flex-col items-center`} id="skills">

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

                <div className="grid grid-cols-3 mini:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3">
                    {Array(24).fill().map((_, i) => {
                        const isHiddenIndex = [].includes(i);
                        // const isHiddenIndex = [1, 7, 10,32,24,15,17,19,20,28,29].includes(i);
                        const skill = skillSquares[i];
                        return (

                            <motion.div

                                key={i}
                                className="w-[96px] h-[96px] flex items-center justify-center rounded-[8px] glass-effect"
                                whileHover={{ backgroundColor: "#1a1a1a", transition: { duration: 0.3 }, border: "none", scale: 1.05 }}
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
                                                src='js.png'
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
                                                <SkillIcon color={skill.color} duration={skill.duration}
                                                    svgPath1={skill.svgPath1}
                                                    svgPath2={skill.svgPath2}
                                                    svgPath3={skill.svgPath3}
                                                    svgPath4={skill.svgPath4}
                                                    svgPath5={skill.svgPath5}
                                                    svgPath6={skill.svgPath6}
                                                    svgPath7={skill.svgPath7}
                                                    svgPath8={skill.svgPath8}
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
        </GlowLamp>
    )

}


export default Skills;