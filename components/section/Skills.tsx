'use client';
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'PHP', 'HTML5', 'CSS3', 'React', 'Next.js', 'TailwindCSS',
  'Node.js', 'Express', 'CodeIgniter', 'MySQL', 'PostgreSQL', 'Git', 'GitHub',
  'Figma', 'Jira', 'Gitlab', 'Agile', 'Scrum', 'CI/CD'
];

const MarqueeItem = ({ text }: { text: string }) => {
  return (
    <div className="flex items-center mx-8 group cursor-default">
      <span className="text-[6vw] md:text-[8vw] font-bold uppercase leading-none text-transparent stroke-white stroke-2 hover:text-[#ccff00] hover:stroke-transparent transition-all duration-300 select-none"
            style={{ WebkitTextStroke: '1px rgba(255,255,255,0.2)' }}>
        {text}
      </span>
      <span className="text-2xl text-[#ccff00] ml-8 opacity-0 group-hover:opacity-100 transition-opacity">★</span>
    </div>
  );
};

const Skills: React.FC = () => {
  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return (
    <section className='py-32 bg-[#050505] overflow-hidden border-t border-gray-900 min-h-[500px]'>
       <div className="container mx-auto px-4 md:px-8 mb-16">
          <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest'>( Capabilities )</h2>
       </div>
    </section>
  );

  return (
    <section className='py-32 bg-[#050505] overflow-hidden border-t border-gray-900'>
       <div className="container mx-auto px-4 md:px-8 mb-16">
          <h2 className='text-xs font-mono text-[#ccff00] uppercase tracking-widest'>( Capabilities )</h2>
       </div>

      <div className="flex flex-col gap-4">
        {/* Row 1 - Left */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [0, -1000] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 20 
            }}
          >
            {[...skills, ...skills, ...skills].map((skill, i) => (
              <MarqueeItem key={`${skill}-${i}-1`} text={skill} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Right */}
        <div className="relative flex overflow-hidden">
          <motion.div 
            className="flex whitespace-nowrap"
            animate={{ x: [-1000, 0] }}
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: 25 
            }}
          >
            {[...skills.reverse(), ...skills, ...skills].map((skill, i) => (
              <MarqueeItem key={`${skill}-${i}-2`} text={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
