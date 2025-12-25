'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './ui/Section';

const purposeText = "This Brand Guideline serves as the strategic compass for Vitalora. It is more than a set of rules; it is the blueprint for translating our philosophy—'Vitality as a Ritual'—into a coherent visual and sensory experience. By adhering to these standards, we ensure that every touchpoint, from a digital pixel to a physical package, resonates with the same frequency of trust, elegance, and natural science. This document empowers our team to build brand recognition that is not just seen, but felt.";

const aboutText = "Vitalora was born from a quiet rebellion against the clinical, sterile world of traditional supplements. We recognized that for the modern woman—whether she is navigating the shifts of menopause or the fast pace of city life—health is not a medical transaction; it is a daily act of self-love. Bridging the gap between European pharmaceutical standards and the ancient wisdom of botany, Vitalora transforms the routine of taking vitamins into a moment of luxury. We are the intersection where scientific precision meets the 'Art of the Ritual.'";

// Key phrases to highlight
const purposeHighlights = ["strategic compass", "blueprint", "Vitality as a Ritual", "trust, elegance, and natural science", "not just seen, but felt"];
const aboutHighlights = ["quiet rebellion", "daily act of self-love", "European pharmaceutical standards", "ancient wisdom of botany", "moment of luxury", "Art of the Ritual"];

const HighlightedText: React.FC<{ text: string; highlights: string[] }> = ({ text, highlights }) => {
  let result = text;
  
  // Create a regex pattern for all highlights
  const pattern = new RegExp(`(${highlights.map(h => h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  
  const parts = result.split(pattern);
  
  return (
    <>
      {parts.map((part, index) => {
        const isHighlight = highlights.some(h => h.toLowerCase() === part.toLowerCase());
        if (isHighlight) {
          return (
            <motion.span
              key={index}
              initial={{ color: 'inherit' }}
              whileInView={{ color: '#5e439b' }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="font-medium"
            >
              {part}
            </motion.span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
};

const NarrativeBlock = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <Section className="bg-cream py-32 md:py-48 overflow-hidden">
      <motion.div 
        ref={containerRef}
        style={{ opacity }}
        className="max-w-5xl mx-auto"
      >
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-accent-purple uppercase tracking-[0.4em] text-xs font-semibold">
            Brand Guidelines
          </span>
        </motion.div>

        {/* Purpose Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-deep-purple mb-12 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Introduction:
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-deep-purple/30"
            >
              Purpose
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-deep-purple/80 leading-relaxed font-light"
          >
            <HighlightedText text={purposeText} highlights={purposeHighlights} />
          </motion.p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-px bg-deep-purple/10 mb-24 origin-left"
        />

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-deep-purple mb-12 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-deep-purple/30"
            >
              the Brand
            </motion.span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-deep-purple/80 leading-relaxed font-light"
          >
            <HighlightedText text={aboutText} highlights={aboutHighlights} />
          </motion.p>
        </motion.div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center mt-24"
        >
          <div className="w-16 h-16 border border-accent-purple/30 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-accent-purple rounded-full" />
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
};

export default NarrativeBlock;
