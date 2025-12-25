'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { LightboxImage } from './ui/Lightbox';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit this path!
// ===========================================
const IMAGES = {
  moodboard: "https://i.ibb.co/MrPWvyh/Mood-boardpng.png",
};

const MoodGrid = () => {
  return (
    <Section className="bg-light-lavender py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20"
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Visual Language
          </span>
          <h2 className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight">
            The Mood
            <br />
            <span className="text-deep-purple/30">Board</span>
          </h2>
          <p className="text-deep-purple/50 mt-6 max-w-xl text-lg">
            A curated collection of textures, personas, and elements that define the Vitalora visual universe.
          </p>
        </motion.div>

        {/* Single Moodboard Image */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="group relative overflow-hidden rounded-2xl shadow-2xl"
        >
          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 bg-accent-purple/0 group-hover:bg-accent-purple/5 transition-colors duration-500 z-10 pointer-events-none"
          />
          
          {/* Shadow glow */}
          <motion.div
            className="absolute inset-0 shadow-none group-hover:shadow-[0_0_80px_rgba(94,67,155,0.4)] transition-shadow duration-500 rounded-2xl z-0"
          />

          <LightboxImage
            src={IMAGES.moodboard}
            alt="Vitalora Mood Board"
            layoutId="moodboard-main"
            className="w-full h-auto rounded-2xl"
          />
        </motion.div>

        {/* Click instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-deep-purple/30 text-sm mt-8 uppercase tracking-widest"
        >
          Click to expand
        </motion.p>
      </div>
    </Section>
  );
};

export default MoodGrid;
