'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { getImageUrlByTitle, getProjectTextByTitle } from './query.js';


export const ExploreModal = ({ title }) => {
    return (

        <div className="flex flex-col lg:flex-row lg:justify-start glass-effect
                        p-6 lg:p-10 rounded-[24px] relative 
                        w-4/5 mini:w-3/4 xl:w-2/3
                        mt-[2rem] lg:mt-0">
            <div className="flex-1 mr-4">
                <h2 className="text-gradient text-xl lg:text-2xl font-bold mb-4">{title}</h2>
                <p className="text-white mb-4 text-[10px] mini:text-[14px] md:text-[18px] 2xl:text-[22px]">
                    {getProjectTextByTitle(title)}
                </p>
            </div>

            <div className="flex-1">
                <img src={getImageUrlByTitle(title)} alt="Image" className="h-full w-full object-cover rounded-[24px]" />
            </div>

            <motion.div
                whileHover={{ backgroundColor: '#f7f8f8' }}
                transition={{ duration: 0 }}
                className="rounded-[24px] hover:scale-110 absolute top-2 right-2 lg:top-3 lg:right-3 bg-off-white bg-opacity-80">
                <img src="/x.png" alt="Close Button" className="h-8 w-8" />
            </motion.div>
        </div>
    )
}

export default ExploreModal;