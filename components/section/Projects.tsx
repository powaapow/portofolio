'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'Studio 360',
    category: 'Company Profile',
    year: '2024',
    image: '/projects/studio360.jpeg',
    url: 'https://studio-360.vercel.app',
    role: 'Full Stack',
    tags: ['Next.js', 'Tailwind', 'Shadcn'],
  },
  {
    id: 2,
    title: 'At-Tajdid School',
    category: 'Management System',
    year: '2024',
    image: '/projects/attajdid.jpeg',
    url: 'https://attajdid.sch.id/id',
    role: 'Full Stack',
    tags: ['TypeScript', 'GraphQL', 'Postgres'],
  },
  {
    id: 3,
    title: 'Attendify',
    category: 'SaaS Platform',
    year: '2024',
    image: '/projects/attendify.jpeg',
    url: 'https://attendify.id/',
    role: 'Frontend',
    tags: ['Vue.js', 'Laravel', 'Redis'],
  },
  {
    id: 4,
    title: 'Shanum Cosmindo',
    category: 'Corporate Identity',
    year: '2023',
    image: '/projects/sac.jpeg',
    url: 'https://shanumaditamacosmindo.com/',
    role: 'Developer',
    tags: ['Next.js', 'React', 'Motion'],
  },
  {
    id: 5,
    title: 'Fortacs',
    category: 'Corporate Site',
    year: '2024',
    image: '/projects/fortacs.jpeg',
    url: 'https://www.fortacsde.com/id',
    role: 'Developer',
    tags: ['Next.js', 'Tailwind'],
  },
  {
    id: 6,
    title: 'Tria',
    category: 'E-Commerce',
    year: '2024',
    image: '/projects/tria.jpeg',
    url: '#',
    role: 'Full Stack',
    tags: ['Laravel', 'Vue.js'],
  },
];

const Projects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);

  return (
    <section className='min-h-screen bg-[#050505] py-32 relative overflow-hidden'>
      <div className='container mx-auto px-4 md:px-8 relative z-10'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='mb-16 flex items-end justify-between border-b border-gray-800 pb-8'>
          <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest'>( Selected Works )</h2>
          <span className='text-xs font-mono text-gray-500'>2023 — 2024</span>
        </motion.div>

        <div className='flex flex-col'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='group relative border-b border-gray-800 py-12 md:py-16 transition-colors hover:border-[#ccff00]/30'
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}>
              <a
                href={project.url}
                target='_blank'
                rel='noopener noreferrer'
                className='block'>
                <div className='flex flex-col md:flex-row md:items-center justify-between relative z-10'>
                  <h3 className='text-4xl md:text-6xl lg:text-7xl font-bold text-[#e0e0e0] group-hover:text-[#ccff00] transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <div className='flex flex-col md:items-end mt-4 md:mt-0'>
                    <span className='text-sm font-mono text-gray-500 mb-1 group-hover:text-white transition-colors'>
                      {project.category}
                    </span>
                    <div className='flex gap-2'>
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className='text-xs border border-gray-800 rounded-full px-2 py-1 text-gray-600 group-hover:border-[#ccff00] group-hover:text-[#ccff00] transition-all'>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>

        <div className='mt-24 text-center'>
          <a
            href='#'
            className='inline-block px-8 py-4 border border-gray-800 rounded-full text-sm font-mono text-gray-400 hover:bg-[#ccff00] hover:text-black hover:border-[#ccff00] transition-all duration-300'>
            VIEW ALL ARCHIVES
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
