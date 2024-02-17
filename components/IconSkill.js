"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export const SkillIcon = ({
  onClick,
  svgPaths,
  color,
  duration,
  svgViewBox,
  strokeSize,
  widthSize,
}) => {
  const [hoverKey, setHoverKey] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColor, setHoverColor] = useState("rgba(255, 255, 255, 1)");

  if (widthSize === undefined) widthSize = '60%';

  if (!duration) duration = 0.3;

  if (!color) color = "#332941";

  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      fill: "none",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      scale: 1,
      fill: "none",
    },
  };

  return (
    <motion.button
      className="w-full h-full flex items-center justify-center transition-all duration-300 z-10 transform"
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
        setHoverColor(color);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoverColor("rgba(255, 255, 255, 1)");
      }}
      onHoverEnd={() => setHoverKey((prevKey) => prevKey + 1)}
    >
      <motion.svg
        viewBox={svgViewBox}
        xmlns="http://www.w3.org/2000/svg"
        className="skill_item"
        style={{ "--stroke-size": strokeSize, width: widthSize }}
      >
        {svgPaths.map((svgPath, index) => (
          <motion.path
            key={hoverKey + `path${index + 1}`}
            d={svgPath}
            variants={icon}
            initial={"hidden"}
            animate={"visible"}
            transition={{
              default: { duration: duration, ease: "easeInOut" },
              fill: {
                duration: isHovered ? 0 : duration,
                ease: [0.85, 0, 0.15, 1],
              },
            }}
          />
        ))}
      </motion.svg>
    </motion.button>
  );
};
