'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './ui/Section';

const missionText = "To simplify the complexity of natural health by engineering targeted, high-potency formulas that integrate seamlessly into the modern woman's lifestyle. We exist to provide transparency in an opaque industry, delivering solutions that refuse to compromise between scientific efficacy and sensory pleasure.";

const visionText = "To create a future where preserving vitality is a celebrated, beautiful, and effortless daily ritual. We aspire to be the trusted lifelong partner for women, setting a new global standard for how natural supplements are formulated, presented, and experienced.";

const MissionVision = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <Section className="bg-deep-purple py-32 md:py-48 overflow-hidden">
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto"
      >
        {/* Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32 md:mb-48">
          {/* Left: Header */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Our Purpose
            </span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-cream leading-none">
              Mission
            </h2>

            {/* Progress bar */}
            <motion.div 
              className="h-1 bg-cream/10 rounded-full w-32 mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="h-full bg-accent-purple rounded-full"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-cream/80 leading-relaxed font-light">
              {missionText}
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-cream/10 mb-32 md:mb-48 origin-left"
        />

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Left: Content (reversed order for visual interest) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center order-2 md:order-1"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-cream/80 leading-relaxed font-light">
              {visionText}
            </p>
          </motion.div>

          {/* Right: Header */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center md:items-end md:text-right order-1 md:order-2"
          >
            <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
              Our Aspiration
            </span>
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-medium text-cream leading-none">
              Vision
            </h2>

            {/* Progress bar */}
            <motion.div 
              className="h-1 bg-cream/10 rounded-full w-32 mt-8 overflow-hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="h-full bg-accent-purple rounded-full"
                initial={{ scaleX: 0, transformOrigin: 'left' }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex justify-center mt-32"
        >
          <div className="w-20 h-20 border border-accent-purple/40 rounded-full flex items-center justify-center">
            <div className="w-10 h-10 border border-accent-purple/60 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-accent-purple rounded-full" />
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default MissionVision;
