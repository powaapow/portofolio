'use client';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Intro from '@/components/section/Intro';
import Description from '@/components/section/Description';
import Skills from '@/components/section/Skills';
import Projects from '@/components/section/Projects';
import Experience from '@/components/section/Experience';
import Certification from '@/components/section/Certification';
import Philosophy from '@/components/section/Philosophy';
import Contact from '@/components/section/Contact';

const Home: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="bg-[#050505] min-h-screen text-[#e0e0e0]">
      <Intro />
      <Description />
      <Philosophy />
      <Skills />
      <Experience />
      <Projects />
      <Certification />
      <Contact />
    </main>
  );
};

export default Home;
