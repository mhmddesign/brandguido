'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit these paths!
// ===========================================
const IMAGES = {
  logoFull: "/images/logo-full.svg",
};

// ===========================================
// 🔗 LINKS CONFIGURATION - Edit these!
// ===========================================
const LINKS = {
  canva: "https://www.canva.com/brand/kAG8hgyZlHY",
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-deep-purple">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-deep-purple via-[#1a1040] to-black" />
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, #5E439B 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, #5E439B 0%, transparent 50%)',
              'radial-gradient(circle at 50% 80%, #5E439B 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, #5E439B 0%, transparent 50%)',
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Project Label */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 left-8 z-20"
      >
        <span className="text-cream/40 text-xs uppercase tracking-[0.3em]">Brand Identity Project</span>
      </motion.div>

      {/* Designer Credit */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-8 right-8 z-20"
      >
        <span className="text-accent-purple text-xs uppercase tracking-[0.3em] font-medium">MHMD.DESIGN</span>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          {/* Logo SVG */}
          <img 
            src={IMAGES.logoFull} 
            alt="Vitalora"
            className="h-[40vh] md:h-[50vh] w-auto object-contain"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-accent-purple italic text-xl md:text-2xl font-light tracking-wide">
            Vitality is a ritual
          </p>
          <p className="text-cream/40 text-sm max-w-md mt-4">
            A luxury wellness brand identity crafted with scientific precision and organic sensibility.
          </p>

          {/* Canva Brand Guidelines Button */}
          <motion.a
            href={LINKS.canva}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-4 border border-accent-purple/50 rounded-full text-accent-purple text-sm uppercase tracking-widest hover:bg-accent-purple hover:text-cream transition-all duration-300 flex items-center gap-3 group"
          >
            <span>View Full Brand Guidelines</span>
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        data-cursor="Explore"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-cream/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-accent-purple rounded-full" />
        </motion.div>
      </motion.div>

      {/* Year Badge */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 right-8 z-20"
      >
        <span className="text-cream/30 text-xs uppercase tracking-widest">© 2024</span>
      </motion.div>
    </section>
  );
};

export default Hero;
