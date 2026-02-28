'use client';
import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const Philosophy: React.FC = () => {
  const container = useRef<HTMLDivElement>(null);
  
  return (
    <section ref={container} className='py-32 bg-[#050505] flex items-center justify-center border-t border-gray-900'>
      <div className='container mx-auto px-4 md:px-8 text-center'>
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <p className='font-mono text-xs text-[#ccff00] mb-8 uppercase tracking-widest'>( Philosophy )</p>
            <h2 className='text-[5vw] md:text-[4vw] font-bold leading-tight text-[#e0e0e0] uppercase max-w-5xl mx-auto'>
                "Simplicity is the ultimate sophistication."
            </h2>
            <p className="font-mono text-gray-500 mt-8">— Leonardo da Vinci</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
