'use client';

import React from 'react';
import Section from './ui/Section';
import ParallaxImage from './ui/ParallaxImage';
import TextReveal from './ui/TextReveal';

const bottles = [
  { 
    name: "Balance", 
    image: "https://images.unsplash.com/photo-1620916566398-39f114387c9b?q=80&w=800&auto=format&fit=crop", 
    speed: 0.1,
    height: "h-[500px] md:h-[600px]"
  },
  { 
    name: "Glow", 
    image: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=800&auto=format&fit=crop", 
    speed: 0.3,
    height: "h-[600px] md:h-[800px]"
  },
  { 
    name: "Energy", 
    image: "https://images.unsplash.com/photo-1556228578-8ef7bc2fbb6d?q=80&w=800&auto=format&fit=crop", 
    speed: 0.1,
    height: "h-[500px] md:h-[600px]"
  }
];

const PackagingReveal = () => {
  return (
    <Section className="bg-cream py-32 md:py-64 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-32">
          <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">Collection</span>
          <TextReveal 
            text="The Ritual Objects" 
            className="text-5xl md:text-7xl font-medium text-deep-purple"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
          {bottles.map((bottle, i) => (
            <div key={i} className="flex flex-col">
              <ParallaxImage
                src={bottle.image}
                alt={bottle.name}
                speed={bottle.speed}
                containerClassName={`${bottle.height} w-full`}
              />
              <div className="mt-8 text-center md:text-left">
                <span className="text-deep-purple/40 text-xs font-mono mb-2 block">0{i+1}</span>
                <h3 className="text-2xl font-medium text-deep-purple uppercase tracking-widest">{bottle.name}</h3>
                <p className="text-deep-purple/60 mt-2 italic">Essential nourishment</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <p className="text-deep-purple/60 text-lg max-w-xl mx-auto leading-relaxed">
            Meticulously designed containers that honor the precious formulas within. A synthesis of clinical purity and organic beauty.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default PackagingReveal;
