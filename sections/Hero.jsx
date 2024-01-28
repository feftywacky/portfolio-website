'use client';

import { motion, useAnimation } from 'framer-motion';
import styles from '../styles';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';
import { TypeAnimation } from "react-type-animation";
import { useState } from 'react';

const Hero = () => {
  const hi = "Hi!".split("")
  const myName = "I'm Feiyu,".split("")
  const animation_hi = hi.map(() => useAnimation());
  const animation_name = myName.map(() => useAnimation());
  const [isBouncingHi, setIsBouncingHi] = useState(
    hi.map(() => false)
  )
  const [isBouncingName, setIsBouncingName] = useState(
    myName.map(() => false)
  )

  const bounceAnimation = (index, animationControls, isBouncing, setIsBouncing) => {
    if (!isBouncing[index]) {
      setIsBouncing(prevState => {
        const newState = [...prevState];
        newState[index] = true;
        return newState;
      })
      animationControls[index].start({
        transform: [
          "scale3d(1, 1, 1)",
          "scale3d(1.4, 0.55, 1)",
          "scale3d(0.75, 1.25, 1)",
          "scale3d(1.25, 0.85, 1)",
          "scale3d(0.9, 1.05, 1)",
          "scale3d(1, 1, 1)",
        ],
        color: "#2353ff",
        transition: {
          times: [0, 0.2, 0.3, 0.6, 0.8, 1],
          color: { duration: 0.5 },
        }
      }).then(() => {
        animationControls[index].start({
          color: "#FFFFFF",
          transition: {
            color: { duration: 0.3 },
          }
        });
        setIsBouncing(prevState => {
          const newState = [...prevState];
          newState[index] = false;
          return newState;
        })
      })
    }
  }



  return (
    <section className={`${styles.xPaddings} flex items-center justify-center h-screen w-screen bg-hero-gradient`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row justify-between items-center`}
      >
        <div className="name mini:mt-[-50px] md:mt-[2rem] mb-[50px] md:mb-[4rem]">
          <motion.div variants={slideIn('left', 'tween', 0.2, 1)}
          >
            {hi.map((char, index) => (
              <motion.span key={index}

                animate={animation_hi[index]}
                onMouseOver={() => bounceAnimation(index, animation_hi, isBouncingHi, setIsBouncingHi)}
                onAnimationComplete={() => setIsBouncingHi(prevState => {
                  const newState = [...prevState];
                  newState[index] = false;
                  return newState;
                })}

                variants={textVariant(1.1)}
                className={styles.heroHeading}
                style={{
                  display: 'inline-block',
                  lineHeight: '1',
                  padding: '0',
                }}>
                {char}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={slideIn('left', 'tween', 0.2, 1)}>
            {myName.map((char, index) => (
              <motion.span

                key={index}
                animate={animation_name[index]}
                onMouseOver={() => bounceAnimation(index, animation_name, isBouncingName, setIsBouncingName)}
                onAnimationComplete={() => setIsBouncingName(prevState => {
                  const newState = [...prevState];
                  newState[index] = false;
                  return newState;
                })}

                variants={textVariant(1.2)}
                className={styles.heroHeading}
                style={{
                  display: 'inline-block',
                  lineHeight: '1',
                  padding: '0',
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.div>


          <motion.div
            variants={{ ...textVariant(1.3), ...slideIn('left', 'tween', 0.2, 1) }}
            className="flex flex-row justify-start items-start"
          >
            <div className={styles.heroSubheading}>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1500,
                  "Frontend Developer",
                  1500,
                  "Fullstack Developer",
                  1500,
                  "UI/UX Designer",
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </motion.div>
        </div>


          <motion.div
            variants={slideIn('right', 'tween', 0.2, 1)}
            className="col-span-4 place-self-center mt-4 md:mt-[20px] lg:mt-[70px] rounded-full
          w-[250px] h-[250px] md:w-[360px] md:h-[360px] lg:w-[440px] xl:w-[490px] lg:h-[440px] xl:h-[490px] relative overflow-hidden"
          >
            <img
              src="/pfp.jpg"
              alt="hero_pfp"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </motion.div>
                


      </motion.div>
    </section>
  );
};

export default Hero;
