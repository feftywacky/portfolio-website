"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../styles";
import { staggerContainer, slideIn } from "../utils/motion";
import { SkillIcon } from "../components/IconSkill";
import { GlowLamp } from "../components/GlowLamp";
import PageTitle from "../components/PageTitle";
import { skillSquares } from "../constants";

const toggleButtonNames = [
  "All",
  "Languages",
  "Frameworks",
  "Databases",
  "Libraries",
  "Dev Tools",
];

const Skills = () => {
  const [toggleButton, setToggleButton] = useState(Array(6).fill(false));
  const [isHoverSkill, setIsHoverSkill] = useState(Array(27).fill(false));
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeAll, setActiveAll] = useState(false);

  const toggleButtonHandler = (index) => {
    const isActive = toggleButton[index];
    setToggleButton(
      toggleButton.map((item, i) => (i === index ? !item : false)),
    );
    setActiveCategory(
      isActive
        ? null
        : toggleButtonNames[index] === "All"
          ? null
          : toggleButtonNames[index],
    );
    toggleButtonNames[index] === "All"
      ? setActiveAll(!activeAll)
      : setActiveAll(false);
  };

  return (
    <div className={`flex flex-col justify-center mt-[-12rem] sm:mt-[-9rem]`}>
      <GlowLamp color="194,97,254" colorDark="53,42,79">
        <div className={`${styles.xPaddings} flex flex-col items-center`}>
          <div
            className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
          >
            <PageTitle title={<>My Skills</>} />
          </div>

          <motion.div
            className="flex flex-wrap justify-center md:flex-row gap-4 md:gap-5 xl:gap-6 mt-0 xl:mt-[1.5rem] mb-[2.5rem]"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            {toggleButton.map((item, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.1, transition: { duration: 0.3, delay: 0.1 } }}
                variants={slideIn("up", "easeInOut", 0.27 * index, 0.75)}
                onClick={() => toggleButtonHandler(index)}
              >
                {item ? (
                  <div className="border-effect-2">
                    {toggleButtonNames[index]}
                  </div>
                ) : (
                  <div className="border-effect-1 hover:text-light-purple">
                    {toggleButtonNames[index]}
                  </div>
                )}
              </motion.button>
            ))}
          </motion.div>

          <div className="grid grid-cols-3 mini:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3 mt-[0.5rem]">
            {Array(27)
              .fill()
              .map((_, i) => {
                const isHiddenIndex = [].includes(i);
                // const isHiddenIndex = [1, 7, 10,32,24,15,17,19,20,28,29].includes(i);
                const skill = skillSquares[i];
                const isHovered = activeAll
                  ? true
                  : isHoverSkill[i] ||
                    (activeCategory && skill.category === activeCategory);
                return (
                  <motion.div
                    key={i}
                    className="w-[78px] h-[78px] lg:w-[96px] lg:h-[96px] flex items-center justify-center rounded-[8px] glass-effect"
                    whileHover={{
                      backgroundColor: "#332941",
                      // transition: { duration: 1, ease: "easeInOut"},
                      border: "none",
                      scale: 1.05,
                    }}
                    animate={{
                      backgroundColor: isHovered ? "#332941" : "transparent",
                      border: isHovered ? "none" : "",
                      
                    }}
                    onMouseEnter={() => {
                      setActiveCategory(null);
                      setActiveAll(false);
                      setToggleButton(Array(6).fill(false));
                      setIsHoverSkill((prevState) => {
                        const newState = [...prevState];
                        newState[i] = true;
                        return newState;
                      });
                    }}
                    onMouseLeave={() => {
                      setIsHoverSkill((prevState) => {
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
                            style={{
                              width: skill.imgWidth ? skill.imgWidth : "50%",
                              height: skill.imgWidth ? skill.imgWidth : "50%",
                              position: "absolute",
                            }}
                            initial={{ opacity: 0, scale: 1 }}
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              y: isHovered ? -7 : 0,
                              scale: isHovered ? 0.97 : 1,
                              transition: {
                                opacity: { duration: 0.2, ease: "easeInOut"},
                                y: { duration: 0.2, ease: "easeInOut"},
                                scale: { duration: 0.2, ease: "easeInOut"},
                              },
                            }}
                            // exit={{ y: 0, scale: 1, 
                            //   transition: { 
                            //     y: { duration: 0.3, ease: "easeInOut" },
                            //     scale: { duration: 0, ease: "easeInOut"},
                            //   } 
                            //   }}
                          />

                          <motion.div
                            style={{ position: "absolute" }}
                            initial={{ opacity: 1 }}
                            animate={{
                              opacity: isHovered ? 0 : 1,
                              y: isHovered ? -7 : 0,
                              transition: {
                                opacity: { duration: 0, ease: "easeInOut"},
                                y: { duration: 0.2, ease: "easeInOut"},
                                
                              },
                            }}
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
                              strokeSize={
                                skill.strokeSize ? skill.strokeSize : 0.2
                              }
                              widthSize={
                                skill.widthSize ? skill.widthSize : "60%"
                              }
                              onHover={isHovered}
                              key={i}
                            />
                          </motion.div>
                        </AnimatePresence>

                        {isHovered && (
                          <motion.div className="mt-[80%]">
                            <motion.p className="text-[10px] sm:text-[12px] text-center leading-none font-semibold text-white">
                              {skill.name}
                            </motion.p>
                          </motion.div>
                        )}
                      </div>
                    )}
                  </motion.div>
                );
              })}
          </div>
        </div>
      </GlowLamp>
    </div>
  );
};

export default Skills;
