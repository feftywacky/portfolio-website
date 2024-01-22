'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';
import { NavButton, redirectToGithub } from './Navbar.jsx';
import { useState, useEffect } from 'react';
import { ExploreModal } from './ExploreModal.jsx';

const redirectToSpaceship = () => {
  window.open('https://github.com/feftywacky/spaceship-shoot-game', '_blank');
}

const redirectToChessEngine = () => {
  window.open('https://github.com/feftywacky/Thrawn', '_blank');
}

const redirectToKmap = () => {
  window.open('https://github.com/michaelhum28/kmap-solver', '_blank');
}

const redirectToMedihub = () => {
  window.open('https://github.com/uOttawaSEGA2023/Medihub', '_blank');
}

const redirectToGenerativeAI = () => {
  window.open('https://github.com/feftywacky', '_blank');
}

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <motion.div
        variants={fadeIn('up', 'easeOut', index * 0.5, 0.75)}
        className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
          } flex items-center justify-center min-w-[170px] xl:h-[550px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer overflow-hidden`}
        whileHover={() => handleClick(id)}
        onClick={() => handleClick(id)}
      >
        <img
          src={imgUrl}
          alt="project"
          className="absolute w-full h-full object-cover rounded-[24px]"
        />
        {active !== id ? (
          <h3
            className="font-semibold text-[18px] sm:text-[20px] md:text-[26px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
            {title}
          </h3>
        ) : (
          <div className={`absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]`}>
            <div className={`flex flex-row space-x-3`}>
              <div
                className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism hover:scale-110`}
              >
                <img
                  src="/github.svg"
                  alt="github"
                  className="w-full h-full object-contain hover:scale-110"
                  onClick={() => {
                    if (title === "Space Invaders") {
                      redirectToSpaceship();
                    } else if (title === "Chess Engine") {
                      redirectToChessEngine();
                    }
                    else if (title === "Karnaugh Map Solver") {
                      redirectToKmap();
                    }
                    else if (title === "Healthcare Management App") {
                      redirectToMedihub();
                    }
                    else if (title === "Generative AI Fullstack App") {
                      redirectToGenerativeAI();
                    }
                  }}
                  style={{ transform: 'scale(1.1)' }}
                />

              </div>

              <div
                className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism hover:scale-110`}
              >
                <img
                  src="/expand.png"
                  alt="expand"
                  className="w-[60%] h-[60%] object-contain"
                  onClick={() => toggleModal()}
                />
              </div>
            </div>

            <h2 className="mt-[12px] font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
          </div>
        )}
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (<motion.div
          initial={{ opacity: 0, scale: 0.7, y: "10vh" }}
          animate={{ opacity: 1, scale: 1, y: "0vh" }}
          exit={{ opacity: 0, scale: 0.7, y: "-10vh" }}
          transition={{
            opacity: { duration: 0.3 },
            scale: { duration: 0.3 }

          }}
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50`}
          onClick={toggleModal}
          style={{ backdropFilter: 'blur(10px)' }}
        >
          {isModalOpen && <ExploreModal title={title} isModalOpen={isModalOpen} toggleModal={toggleModal} />}
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExploreCard;

