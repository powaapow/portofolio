'use client';
import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: 'Best Performance Team, MSIB Batch 6',
    issuer: 'PT Baracipta Esa Engineering',
    date: 'Jun 2024',
    description: 'Awarded for outstanding performance as a Full stack Developer during internship.'
  },
  {
    title: 'Agile Execution',
    issuer: 'PT Baracipta Esa Engineering',
    date: 'Jun 2024',
    description: 'Applied Agile methodologies to streamline project delivery.'
  },
  {
    title: 'Effective Communication',
    issuer: 'PT Baracipta Esa Engineering',
    date: 'Jun 2024',
    description: 'Enhanced collaboration with technical and non technical stakeholders.'
  },
  {
    title: 'Powerful Delivery',
    issuer: 'PT Baracipta Esa Engineering',
    date: 'Jun 2024',
    description: 'Developed skills for effective project execution and presentation.'
  }
];

const Certification: React.FC = () => {
  return (
    <section className='py-32 bg-[#050505] border-t border-gray-900'>
      <div className='container mx-auto px-4 md:px-8'>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
           className='mb-16'
        >
          <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-8'>( Certifications )</h2>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='p-6 md:p-8 border border-gray-800 hover:border-[#ccff00]/30 transition-colors group'
            >
              <div className='flex justify-between items-start mb-4'>
                <span className='text-[10px] md:text-xs font-mono text-[#ccff00]'>{cert.date}</span>
                <span className='text-[10px] md:text-xs font-mono text-gray-500 text-right ml-2'>{cert.issuer}</span>
              </div>
              <h3 className='text-lg md:text-xl font-bold text-[#e0e0e0] mb-3 group-hover:text-[#ccff00] transition-colors'>{cert.title}</h3>
              <p className='text-xs md:text-sm text-gray-400 leading-relaxed'>{cert.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
