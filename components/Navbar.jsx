"use client";

import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import styles from "../styles";
import React, { useState } from "react";

export const redirectToGithub = () => {
  window.open("https://github.com/feftywacky/", "_blank");
};

const redirectToLinkedin = () => {
  window.open("https://www.linkedin.com/in/feiyu-lin-uo/", "_blank");
};

const redirectToEmail = () => {
  window.open("mailto:linfeyu14@gmail.com", "_blank");
};

const redirectToResume = () => {
  window.open("/FEIYU_LIN_CS.pdf", "_blank");
};

const TextButton = ({ href, buttonText }) => (
  <a
    href={href}
    className="text-l md:text-xl bg-transparent border-none cursor-pointer text-gradient hover:scale-120 hover:text-button-color transition-colors duration-200 z-10 font-semibold"
  >
    {buttonText}
  </a>
);

export const NavButton = ({
  onClick,
  svgPath1,
  svgPath2,
  svgPath3,
  svgPath4,
  svgPath5,
  svgPath6,
  svgPath7,
  svgPath8,
  color,
  duration,
}) => {
  const [hoverKey, setHoverKey] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoverColor, setHoverColor] = useState("rgba(255, 255, 255, 1)");

  if (!duration) duration = 2;

  if (!color) color = "#FFFFFF";

  const icon = {
    hidden: {
      opacity: 1,
      pathLength: 0,
      scale: 2,
      fill: "rgba(255, 255, 255, 0)",
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      scale: 2,
      fill: hoverColor,
    },
  };

  return (
    <motion.button
      className="w-[28px] h-[28px] lg:w-[36px] lg:h-[36px]  md:w-[32px] md:h-[32px] flex items-center justify-center transition-all duration-300 z-10 transform"
      onClick={onClick}
      whileHover={{ scale: 1.15, transition: { duration: 0 } }}
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
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        className="item"
        style={{ transform: "translate(-7px, -7px)" }}
      >
        <motion.path
          key={hoverKey + "path1"}
          d={svgPath1}
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
        <motion.path
          key={hoverKey + "path2"}
          d={svgPath2}
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
        <motion.path
          key={hoverKey + "path3"}
          d={svgPath3}
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
        <motion.path
          key={hoverKey + "path4"}
          d={svgPath4}
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
        <motion.path
          key={hoverKey + "path5"}
          d={svgPath5}
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
        <motion.path
          key={hoverKey + "path6"}
          d={svgPath6}
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
        <motion.path
          key={hoverKey + "path7"}
          d={svgPath7}
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
        <motion.path
          key={hoverKey + "path8"}
          d={svgPath8}
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: duration, ease: "easeInOut" },
            fill: {
              duration: isHovered ? 0 : duration,
              ease: [0.85, 0, 0.15, 1],
            },
          }}
        />
      </motion.svg>
    </motion.button>
  );
};

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} pb-4 pt-4 py-8 sm:pb-8 sm:pt-6 fixed top-0 w-full z-50`}
    style={{ backdropFilter: "blur(8px)" }}
  >
    <div
      className={`${styles.innerWidth} mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center`}
    >
      <div className="flex justify-center sm:justify-start items-center gap-6">
        <TextButton href="#home" buttonText="Home" />
        <TextButton href="#about" buttonText="About" />
        <TextButton href="#explore" buttonText="Projects" />
        <TextButton href="#skills" buttonText="Skills" />
      </div>

      <div className="flex justify-center sm:justify-start items-center gap-6 pt-3 sm:pt-0">
        <NavButton
          onClick={redirectToEmail}
          color="#7289da"
          duration={2}
          svgPath1="M 405.070312 0.53125 L 106.59375 0.53125 C 47.753906 0.601562 0.0703125 52.480469 0 116.488281 L 0 394.789062 C 0.0703125 458.796875 47.753906 510.671875 106.59375 510.742188 L 405.070312 510.742188 C 463.914062 510.671875 511.59375 458.796875 511.667969 394.789062 L 511.667969 116.488281 C 511.59375 52.480469 463.914062 0.601562 405.070312 0.53125 Z M 106.59375 46.914062 L 405.070312 46.914062 C 431.183594 46.96875 454.648438 64.292969 464.335938 90.671875 L 301.074219 268.300781 C 276.0625 295.402344 235.605469 295.402344 210.59375 268.300781 L 47.332031 90.671875 C 57.019531 64.292969 80.480469 46.96875 106.59375 46.914062 Z M 405.070312 464.363281 L 106.59375 464.363281 C 71.277344 464.363281 42.636719 433.214844 42.636719 394.789062 L 42.636719 151.273438 L 180.449219 301.089844 C 222.117188 346.304688 289.550781 346.304688 331.21875 301.089844 L 469.03125 151.273438 L 469.03125 394.789062 C 469.03125 433.214844 440.390625 464.363281 405.070312 464.363281 Z M 405.070312 464.36328"
        />
        <NavButton
          onClick={redirectToResume}
          color="#7289da"
          duration={2}
          svgPath1="M 276.265625 252.15625 C 269.898438 254.3125 263.054688 255.476562 256 255.476562 C 248.945312 255.476562 242.101562 254.3125 235.734375 252.15625 C 189.476562 259.789062 165.265625 293.789062 165.265625 335.054688 L 346.734375 335.054688 C 346.734375 293.789062 322.523438 259.789062 276.265625 252.15625 Z M 276.265625 252.15625"
          svgPath2="M 256 240.789062 C 283.421875 240.789062 305.632812 218.523438 305.632812 191.101562 L 305.632812 177.054688 C 305.632812 149.632812 283.421875 127.367188 256 127.367188 C 228.578125 127.367188 206.367188 149.632812 206.367188 177.054688 L 206.367188 191.101562 C 206.367188 218.523438 228.578125 240.789062 256 240.789062 Z M 256 240.789062 "
          svgPath3="M 378.421875 0 L 133.578125 0 C 86.210938 0 47.6875 38.523438 47.6875 85.898438 L 47.6875 426.101562 C 47.6875 473.476562 86.210938 512 133.578125 512 L 352.476562 512 L 464.3125 400.15625 L 464.3125 85.898438 C 464.3125 38.523438 425.789062 0 378.421875 0 Z M 432.476562 387 L 384.367188 387 C 359.476562 387 339.265625 407.15625 339.265625 432.054688 L 339.265625 480.210938 L 133.578125 480.210938 C 103.734375 480.210938 79.523438 456 79.523438 426.101562 L 79.523438 85.898438 C 79.523438 56 103.734375 31.789062 133.578125 31.789062 L 378.421875 31.789062 C 408.265625 31.789062 432.476562 56 432.476562 85.898438 Z M 432.476562 387 "
        />
        {/* eslint-disable max-len */}
        <NavButton
          onClick={redirectToLinkedin}
          color="#7289da"
          duration={2}
          svgPath1="M 436.246094 436.253906 L 360.382812 436.253906 L 360.382812 317.449219 C 360.382812 289.117188 359.878906 252.648438 320.925781 252.648438 C 281.414062 252.648438 275.371094 283.515625 275.371094 315.386719 L 275.371094 436.246094 L 199.507812 436.246094 L 199.507812 191.933594 L 272.335938 191.933594 L 272.335938 225.320312 L 273.355469 225.320312 C 288.207031 199.929688 315.816406 184.765625 345.210938 185.855469 C 422.101562 185.855469 436.277344 236.433594 436.277344 302.226562 Z M 113.910156 158.535156 C 89.597656 158.542969 69.882812 138.835938 69.878906 114.519531 C 69.875 90.207031 89.582031 70.492188 113.894531 70.488281 C 138.207031 70.484375 157.921875 90.191406 157.925781 114.503906 C 157.929688 126.179688 153.292969 137.378906 145.039062 145.636719 C 136.78125 153.894531 125.585938 158.535156 113.910156 158.535156 M 151.839844 436.253906 + L 75.898438 436.253906 L 75.898438 191.933594 L 151.839844 191.933594 Z M 474.066406 0.0351562 L 37.777344 0.0351562 C 17.160156 -0.195312 0.25 16.320312 -0.00390625 36.941406 L -0.00390625 475.046875 C 0.242188 495.679688 17.148438 512.210938 37.777344 511.996094 L 474.066406 511.996094 C 494.738281 512.25 511.710938 495.71875 511.996094 475.046875 L 511.996094 36.910156 C 511.703125 16.25 494.726562 -0.269531 474.066406 0"
        />
        {/* eslint-disable max-len */}
        <NavButton
          onClick={redirectToGithub}
          color="#7289da"
          duration={2}
          svgPath1="M 256 0 C 114.632812 0 0 117.179688 0 261.726562 C 0 377.363281 73.351562 475.472656 175.070312 510.078125 C 187.867188 512.5 192.5625 504.402344 192.5625 497.492188 C 192.5625 491.246094 192.320312 470.632812 192.210938 448.761719 C 120.992188 464.59375 105.96875 417.882812 105.96875 417.882812 C 94.320312 387.628906 77.539062 379.585938 77.539062 379.585938 C 54.3125 363.339844 79.289062 363.675781 79.289062 363.675781 C 105 365.519531 118.53125 390.648438 118.53125 390.648438 C 141.367188 430.65625 178.421875 419.089844 193.03125 412.402344 C 195.328125 395.488281 201.960938 383.9375 209.289062 377.402344 C 152.421875 370.78125 92.648438 348.347656 92.648438 248.058594 C 92.648438 219.480469 102.648438 196.132812 119.023438 177.804688 C 116.367188 171.214844 107.609375 144.59375 121.507812 108.546875 C 121.507812 108.546875 143 101.507812 191.921875 135.367188 C 212.34375 129.570312 234.25 126.660156 256 126.566406 C 277.757812 126.660156 299.671875 129.570312 320.132812 135.367188 C 369 101.507812 390.460938 108.546875 390.460938 108.546875 C 404.398438 144.59375 395.632812 171.214844 392.976562 177.804688 C 409.390625 196.132812 419.320312 219.480469 419.320312 248.058594 C 419.320312 348.585938 359.429688 370.71875 302.429688 377.195312 C 311.609375 385.320312 319.789062 401.246094 319.789062 425.664062 C 319.789062 460.6875 319.492188 488.867188 319.492188 497.492188 C 319.492188 504.457031 324.101562 512.613281 337.078125 510.046875 C 438.742188 475.398438 512 377.324219 512 261.726562 C 512 117.179688 397.382812 0 256 0 Z M 95.882812 372.835938 C 95.320312 374.136719 93.3125 374.527344 91.492188 373.632812 C 89.632812 372.78125 88.59375 371.007812 89.195312 369.703125 C 89.75 368.363281 91.75 367.988281 93.601562 368.890625 C 95.46875 369.746094 96.523438 371.535156 95.882812 372.835938 Z M 108.476562 384.320312 C 107.25 385.480469 104.867188 384.945312 103.25 383.113281 C 101.570312 381.285156 101.257812 378.851562 102.5 377.675781 C 103.757812 376.515625 106.070312 377.0625 107.75 378.882812 C 109.421875 380.726562 109.75 383.15625 108.476562 384.320312 Z M 117.109375 399.015625 C 115.546875 400.136719 112.976562 399.089844 111.390625 396.765625 C 109.828125 394.433594 109.828125 391.644531 111.429688 390.527344 C 113.015625 389.410156 115.546875 390.414062 117.148438 392.722656 C 118.71875 395.085938 118.71875 397.882812 117.109375 399.015625 Z M 131.726562 416.046875 C 130.320312 417.628906 127.328125 417.203125 125.140625 415.039062 C 122.90625 412.929688 122.28125 409.9375 123.6875 408.355469 C 125.109375 406.765625 128.117188 407.210938 130.320312 409.351562 C 132.539062 411.460938 133.21875 414.480469 131.726562 416.046875 Z M 150.601562 421.789062 C 149.984375 423.84375 147.109375 424.769531 144.210938 423.898438 C 141.3125 423.003906 139.414062 420.597656 140 418.53125 C 140.601562 416.46875 143.492188 415.496094 146.414062 416.429688 C 149.304688 417.324219 151.203125 419.703125 150.601562 421.789062 Z M 172.09375 424.226562 C 172.164062 426.382812 169.710938 428.179688 166.664062 428.210938 C 163.601562 428.28125 161.125 426.535156 161.09375 424.417969 C 161.09375 422.238281 163.5 420.464844 166.554688 420.40625 C 169.601562 420.351562 172.09375 422.085938 172.09375 424.226562 Z M 193.203125 423.402344 C 193.570312 425.503906 191.453125 427.667969 188.429688 428.242188 C 185.460938 428.800781 182.710938 427.5 182.328125 425.40625 C 181.960938 423.25 184.117188 421.085938 187.085938 420.527344 C 190.109375 419.992188 192.820312 421.261719 193.203125 423.402344 Z M 193.203125 423.402344"
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
