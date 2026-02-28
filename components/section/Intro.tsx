'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Intro: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0vh', '50vh']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div
      ref={container}
      className='h-screen overflow-hidden relative flex items-center justify-center bg-[#050505]'>
      
      {/* Background Elements */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ccff00]/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[128px]" />
      </motion.div>

      {/* Hero Content */}
      <div className='relative z-10 w-full container mx-auto px-4 md:px-8'>
        <div className='flex flex-col items-center justify-center'>
          
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="overflow-hidden"
          >
            <h1 className='text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-white mix-blend-difference hover:text-transparent hover:text-outline-hover transition-colors duration-500'>
              MOCHAMMAD
            </h1>
          </motion.div>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="overflow-hidden"
          >
            <h1 className='text-[12vw] md:text-[10vw] font-bold leading-[0.85] tracking-tighter text-white mix-blend-difference text-right self-end ml-auto hover:text-transparent hover:text-outline-hover transition-colors duration-500'>
              FAUZAN
            </h1>
          </motion.div>

          <div className='flex flex-col md:flex-row justify-between w-full mt-12 md:mt-24 px-2'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='text-sm md:text-base font-mono text-gray-400 max-w-xs'
            >
              <p>FULL STACK DEVELOPER</p>
              <p className='mt-2 text-[#ccff00]'>BASED IN BANDUNG, ID</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className='text-sm md:text-base font-mono text-gray-400 text-right mt-8 md:mt-0'
            >
              <p>SCROLL TO EXPLORE</p>
              <motion.div 
                className='h-12 w-[1px] bg-[#ccff00] mx-auto mt-4'
                animate={{ scaleY: [0, 1, 0], originY: 0 }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Intro;
