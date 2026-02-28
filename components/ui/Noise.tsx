'use client';
import { useEffect } from 'react';

export default function Noise() {
  return (
    <div className="noise-overlay fixed top-0 left-0 w-full h-full pointer-events-none z-[9998]" />
  );
}
