import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PageTitle = ({title}) => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.4, 
  });

  return (
    <div ref={ref} className={`relative before:absolute before:inset-0 before:bg-[radial-gradient(ellipse_50%_50%_at_center,rgba(var(--feature-color),0.1),transparent)] max-w-[90%] text-center`}>
      <motion.h2 
        className="text-gradient mb-11 pt-[12rem] text-center text-2xl duration-1000 ease-in-out md:pt-0 sm:text-4xl lg:text-7xl"
        initial={{ opacity: 0, y: "10%" }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? "-50%" : "10%" }} 
        transition={{ duration: 0.4 }} 
      >
        {title}
      </motion.h2>
    </div>
  );
};

export default PageTitle;