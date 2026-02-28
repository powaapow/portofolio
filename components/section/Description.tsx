'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Description: React.FC = () => {
  return (
    <section className='min-h-screen flex items-center justify-center bg-[#0a0a0a] py-32 relative'>
      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start'>
          <div className='lg:col-span-4'>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='sticky top-32'>
              <div className='w-full aspect-[3/4] bg-gray-900 overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 ease-out'>
                {/* Placeholder for portrait if available, otherwise abstract */}
                <div className='absolute inset-0 bg-gradient-to-tr from-[#1a1a1a] to-[#050505]'></div>
                <div className='absolute inset-0 flex items-center justify-center'>
                  <span className='text-8xl font-bold text-[#151515]'>MF</span>
                </div>
              </div>
              <div className='mt-8 flex justify-between font-mono text-xs text-gray-500 uppercase'>
                <span>Est. 2022</span>
                <span>Bandung, ID</span>
              </div>
            </motion.div>
          </div>

          <div className='lg:col-span-8'>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='text-xs font-mono text-[#ccff00] mb-8 uppercase tracking-widest'>
              ( About )
            </motion.h2>

            <div className='text-3xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-[#e0e0e0] space-y-12'>
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}>
                FullStack Developer and <span className='text-[#ccff00]'>QA Specialist</span> with strong
                command of core web technologies (PHP, JavaScript) and modern frameworks.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className='text-xl md:text-2xl lg:text-3xl text-gray-400 font-light leading-relaxed'>
                Focused on building functional, scalable applications while ensuring software reliability
                through rigorous testing. Experienced in optimizing system performance and delivering clean
                code in Agile environments.
              </motion.p>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-gray-800'>
              {[
                { label: 'Experience', value: '3+ Years' },
                { label: 'Projects', value: '10+' },
                { label: 'Stack', value: 'Full' },
                { label: 'Satisfaction', value: '90%' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  viewport={{ once: true }}>
                  <h4 className='text-3xl md:text-4xl font-bold text-white mb-2'>{item.value}</h4>
                  <p className='text-xs font-mono text-gray-500 uppercase'>{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
