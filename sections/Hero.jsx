'use client';

import { motion, useAnimation } from 'framer-motion';
import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';
import { TypeAnimation } from "react-type-animation";
import { useState } from 'react';

const Hero = () => {
  const hi = "Hi!".split("")
  const myName = "I'm Feiyu,".split("")
  const animation_hi = hi.map(() => useAnimation());
  const animation_name= myName.map(() => useAnimation());
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
        color: "#00FF7F",
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
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`} style={{ marginTop: "75px" }}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col mt-12`}
      >
        <div className="flex justify-start items-start flex-col relative">
          <div>
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
              style={{ display: 'inline-block',
              lineHeight: '1', 
              padding: '0', 
               }}>
                {char}
              </motion.span>
            ))}
          </div>

          <div>
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
          </div>


          <motion.div
            variants={textVariant(1.3)}
            className="flex flex-row justify-start items-start"
          >
            <div className={styles.heroSubheading}>
              <TypeAnimation
                sequence={[
                  "Software Developer",
                  1500,
                  "Frontend Developer",
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

        {/* <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[20px] -mt-[12px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] z-[0] -top-[30px]" />

          <img
            src="/cover.png"
            alt="hero_cover"
            className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
          />

          <a href="#explore">
            <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10">
              <img
                src="/stamp.png"
                alt="stamp"
                className="sm:w-[155px] w-[100px] sm:h-[155px] h-[100px] object-contain"
              />
            </div>
          </a>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Hero;
