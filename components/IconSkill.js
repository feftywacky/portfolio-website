import { useState } from 'react';
import { motion } from 'framer-motion';


export const SkillIcon = ({ onClick, svgPath1, svgPath2, svgPath3, svgPath4, svgPath5, svgPath6, svgPath7, svgPath8, color, duration }) => {
    const [hoverKey, setHoverKey] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [hoverColor, setHoverColor] = useState("rgba(255, 255, 255, 1)");
  
    if (!duration)
      duration = 2;
  
    if (!color)
      color = "#FFFFFF";
  
    const icon = {
      hidden: {
        opacity: 1,
        pathLength: 1,
        scale: 1,
        fill: "rgba(255, 255, 255, 0)"
      },
      visible: {
        opacity: 1,
        pathLength: 1,
        scale: 1,
        fill: "none"
      },
  
    };
  
  
    return (
      <motion.button
        className="w-full h-full flex items-center justify-center transition-all duration-300 z-10 transform border-2 border-green-400"
        onClick={onClick}
        whileHover={{ scale: 1.15, transition: { duration: 0 } }}
  
        onMouseEnter={() => { setIsHovered(true); setHoverColor(color); }}
        onMouseLeave={() => { setIsHovered(false); setHoverColor("rgba(255, 255, 255, 1)"); }}
  
        onHoverEnd={() => setHoverKey(prevKey => prevKey + 1)}
      >
        <motion.svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" className="skill_item w-full h-full border-2 border-red-500" >
          <motion.path
            key={hoverKey + "path1"}
            d={svgPath1}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path2"}
            d={svgPath2}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path3"}
            d={svgPath3}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path4"}
            d={svgPath4}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path5"}
            d={svgPath5}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path6"}
            d={svgPath6}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path7"}
            d={svgPath7}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
          <motion.path
            key={hoverKey + "path8"}
            d={svgPath8}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: { duration: isHovered ? 0 : duration, ease: [0.85, 0, 0.15, 1] }
            }}
          />
        </motion.svg>
      </motion.button>
    );
  };