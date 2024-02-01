import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PageTitle = ({ title }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
    delay: 500,
  });

  return (
    <motion.h2
      ref={ref}
      className="text-gradient mt-[9.5rem] md:mt-[-2rem] lg:mt-[0rem] pb-[0.5rem]
        text-center text-3xl duration-1000 ease-in-out mini:text-4xl sm:text-5xl lg:text-7xl"
      initial={{ opacity: 0, y: '10%' }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? '-50%' : '10%' }}
      transition={{ duration: 0.4 }}
    >
      {title}
    </motion.h2>
  );
};

export default PageTitle;
