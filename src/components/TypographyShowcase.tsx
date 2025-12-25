'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import TextReveal from './ui/TextReveal';

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const TypographyShowcase = () => {
  return (
    <Section className="bg-cream overflow-hidden py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end mb-24">
          <div>
            <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">Typography</span>
            <TextReveal 
              text={["The Ritual", "Voice"]} 
              className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight"
            />
          </div>
          <div>
            <p className="text-deep-purple/60 text-xl max-w-sm">
              Our typography is set in Poppins. A typeface that balances geometric precision with human warmth.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-12 md:gap-y-16">
          {alphabet.map((letter, i) => (
            <motion.div
              key={i}
              whileHover={{ 
                scale: 1.2, 
                fontWeight: 700,
                color: "#5E439B",
                rotate: [0, -5, 5, 0],
              }}
              className="text-7xl md:text-9xl font-light text-deep-purple/20 cursor-default transition-all duration-300 ease-out flex items-center justify-center min-w-[80px]"
            >
              {letter}
            </motion.div>
          ))}
        </div>

        <div className="mt-32 pt-16 border-t border-deep-purple/5">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-8">
            <p className="text-9xl md:text-[200px] font-medium text-deep-purple/5 leading-none select-none">
              Poppins
            </p>
            <div className="flex flex-col gap-2">
              <span className="text-sm uppercase tracking-widest text-deep-purple/40">Weights</span>
              <div className="flex gap-4">
                <span className="font-light">Light</span>
                <span className="font-normal">Regular</span>
                <span className="font-medium">Medium</span>
                <span className="font-semibold">SemiBold</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TypographyShowcase;
