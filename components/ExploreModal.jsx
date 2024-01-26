'use client';

import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles';
import { getImageUrlByTitle, getProjectTextByTitle } from './query.js';


export const ExploreModal = ({ title }) => {
    return (
        <div className="flex flex-col lg:flex-row lg:justify-start glass-effect
                    p-6 lg:p-10 rounded-[24px] relative 
                    w-4/5 min-h-4/5 mini:w-3/4 mini:min-h-1/2 sm:h-2/3 lg:w-2/3 lg:min-h-2/3">
            <div className="flex-1 mr-4">
                <h2 className="text-white text-xl lg:text-2xl font-bold mb-4">{title}</h2>
                <p className="text-white mb-4 text-sm md:text-base lg:text-lg">
                    {getProjectTextByTitle(title)}
                </p>
            </div>

            <div className="flex-1">
                <img src={getImageUrlByTitle(title)} alt="Image" className="h-full w-full object-cover rounded-[24px]" />
            </div>

            <motion.div
                whileHover={{ backgroundColor: '#f7f8f8' }}
                transition={{ duration: 0}}
                className="rounded-[24px] hover:scale-110 absolute top-2 right-2 lg:top-3 lg:right-3 bg-off-white bg-opacity-80">
                <img src="/x.png" alt="Close Button" className="h-8 w-8" />
            </motion.div>
        </div>
    )
}

export default ExploreModal;