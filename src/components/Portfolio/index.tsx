// src/components/Portfolio/index.tsx
"use client";
import React from 'react';
import { Hero } from './sections/Hero';
import { MainContent } from './sections/MainContent';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-900 via-neutral-900 to-zinc-900">
      <Hero />
      <MainContent />
    </div>
  );
};

export default Portfolio;