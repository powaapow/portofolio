'use client';
import React from 'react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <section className='min-h-screen bg-[#050505] flex flex-col justify-between py-32 border-t border-gray-900'>
      <div className='container mx-auto px-4 md:px-8'>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           viewport={{ once: true }}
        >
           <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-16'>( Contact )</h2>
           
           <div className="relative group">
              <a href="mailto:mochapow@gmail.com" className="block relative z-10">
                 <h3 className="text-[10vw] font-bold leading-none text-[#e0e0e0] group-hover:text-[#ccff00] transition-colors duration-500">
                    LET'S WORK <br /> TOGETHER
                 </h3>
              </a>
              <motion.div 
                 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-[#ccff00]/0 via-[#ccff00]/10 to-[#ccff00]/0 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              />
           </div>
        </motion.div>
      </div>

      <div className='container mx-auto px-4 md:px-8 mt-32'>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-t border-gray-800 pt-12">
            <div>
               <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Socials</h4>
               <ul className="space-y-2">
                  {['LinkedIn', 'GitHub', 'Instagram', 'Twitter'].map(social => (
                     <li key={social}>
                        <a href="#" className="text-lg text-[#e0e0e0] hover:text-[#ccff00] transition-colors">{social}</a>
                     </li>
                  ))}
               </ul>
            </div>
            
            <div>
               <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Contact</h4>
               <ul className="space-y-2">
                  <li><a href="mailto:mochapow@gmail.com" className="text-lg text-[#e0e0e0] hover:text-[#ccff00] transition-colors">mochapow@gmail.com</a></li>
                  <li><span className="text-lg text-gray-400">+62 812-1413-5856</span></li>
               </ul>
            </div>

            <div>
               <h4 className="font-mono text-xs text-gray-500 uppercase mb-4">Location</h4>
               <p className="text-lg text-gray-400">Bandung, Indonesia</p>
               <p className="text-lg text-gray-400">GMT+7</p>
            </div>

            <div className="md:text-right">
               <p className="font-mono text-xs text-gray-600 uppercase mt-2">© 2025 Mochammad Fauzan</p>
               <p className="font-mono text-xs text-gray-700 uppercase mt-1">All Rights Reserved</p>
            </div>
         </div>
      </div>
    </section>
  );
};

export default Contact;
