'use client';
import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    role: 'Full Stack Developer',
    company: 'PT GITS.ID',
    period: 'Nov 2025 – Feb 2026',
    location: 'Bandung, Indonesia',
    type: 'Internship',
    description: [
      'Developed inventory management features including auto generated warehouse, zone based validation, and stock verification.',
      'Streamlined checkout process by integrating NicePay and implementing strict validation logic.',
      'Enhanced UI for mobile toolbars, OTP verification, and address management.',
      'Implemented activity logging and reinforced system security.',
      'Refactored order detail views and shipping calculation logic.',
    ],
  },
  {
    id: 2,
    role: 'Software Quality Assurance',
    company: 'Fortacs Digital Edge',
    period: 'Jan 2025 – Aug 2025',
    location: 'Bandung, Indonesia',
    type: 'Freelance',
    description: [
      'Executed comprehensive manual testing on web applications to ensure 100% functional adherence.',
      'Designed and maintained detailed test cases covering positive, negative, and edge scenarios.',
      'Identified and documented critical bugs, reducing production regression issues.',
      'Conducted thorough UI/UX reviews across multiple devices.',
    ],
  },
  {
    id: 3,
    role: 'Full Stack Developer',
    company: 'PT. Baracipta Esa Engineering',
    period: 'Feb 2024 – Jul 2024',
    location: 'Yogyakarta, Indonesia',
    type: 'Internship',
    description: [
      'Built and deployed "Attendify," serving 500+ users and improving data accuracy by 90%.',
      'Developed automated geolocation features saving HR 20 hours/month.',
      'Optimized ERP backend queries reducing latency by 40%.',
      'Collaborated within a cross functional Agile team.',
    ],
  },
  {
    id: 4,
    role: 'Web Developer',
    company: 'Freelance',
    period: 'Feb 2024 – Jul 2024',
    location: 'Bandung, Indonesia',
    type: 'Freelance',
    description: [
      'Developed and optimized 5+ responsive websites, achieving 35% increase in engagement.',
      'Managed end to end project lifecycles with 90% client satisfaction rate.',
    ],
  },
];

const Experience: React.FC = () => {
  return (
    <section className='py-32 bg-[#050505] border-t border-gray-900'>
      <div className='container mx-auto px-4 md:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16'>
          <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest mb-8'>
            ( Work Experience )
          </h2>
        </motion.div>

        <div className='space-y-16'>
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className='grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-l-0 md:border-l border-gray-800 pl-0 md:pl-0 md:border-l-0'>
              <div className='md:col-span-4 pl-6 md:pl-0 border-l border-gray-800 md:border-l-0 relative'>
                {/* Mobile timeline connector */}
                <div className='absolute left-[-1px] top-0 bottom-0 w-[1px] bg-gray-800 md:hidden'></div>
                {/* Mobile timeline dot */}
                <div className='absolute left-[-5px] top-1.5 w-2.5 h-2.5 bg-[#ccff00] rounded-full md:hidden' />

                <span className='text-[10px] md:text-xs font-mono text-gray-500 mb-2 block uppercase tracking-wider'>
                  {exp.period}
                </span>
                <h3 className='text-lg md:text-xl font-bold text-[#e0e0e0]'>{exp.company}</h3>
                <p className='text-xs md:text-sm text-gray-400 mt-1'>{exp.location}</p>
                <span className='inline-block mt-3 text-[10px] md:text-xs border border-gray-800 rounded-full px-3 py-1 text-[#ccff00]'>
                  {exp.type}
                </span>
              </div>

              <div className='md:col-span-8 relative pl-6 md:pl-0 border-l border-gray-800 md:border-l-0'>
                {/* Timeline dot for mobile */}
                <div className='absolute left-[-5px] top-2 w-2.5 h-2.5 bg-[#ccff00] rounded-full md:hidden' />

                <h4 className='text-xl md:text-2xl font-bold text-[#e0e0e0] mb-4 md:mb-6'>{exp.role}</h4>
                <ul className='space-y-4'>
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className='flex items-start text-gray-400 text-xs md:text-sm leading-relaxed'>
                      <span className='mr-3 md:mr-4 mt-1.5 text-[#ccff00] text-[10px] md:text-xs'>●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
