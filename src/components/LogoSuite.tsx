'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import TextReveal from './ui/TextReveal';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit these paths!
// ===========================================
const IMAGES = {
  logoHorizontal: "/images/logo-horizontal.svg",
  logoFull: "/images/logo-full.svg",
  logoIcon: "/images/logo-icon.svg",
};

const logos = [
  { 
    name: "Primary Logo", 
    description: "Horizontal wordmark for main applications.", 
    type: "wide",
    image: IMAGES.logoHorizontal 
  },
  { 
    name: "The Badge", 
    description: "Stacked composition for restricted spaces.", 
    type: "stacked",
    image: IMAGES.logoFull 
  },
  { 
    name: "The Halo", 
    description: "Iconic symbol representing the ritual of light.", 
    type: "icon",
    image: IMAGES.logoIcon 
  }
];

const LogoSuite = () => {
  return (
    <Section className="bg-deep-purple text-cream py-32">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">Identity</span>
          <TextReveal 
            text="The Logo Suite" 
            className="text-4xl md:text-5xl font-medium"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-cream/10 border border-cream/10 overflow-hidden">
          {logos.map((logo, i) => (
            <motion.div
              key={i}
              whileHover="hover"
              initial="initial"
              className="relative group bg-deep-purple p-12 md:p-16 flex flex-col items-center justify-center min-h-[400px] transition-colors duration-500"
            >
              {/* Background Hover Effect */}
              <motion.div 
                variants={{
                  initial: { opacity: 0 },
                  hover: { opacity: 1 }
                }}
                className="absolute inset-0 copper-gradient pointer-events-none"
              />

              {/* Logo Image Display */}
              <motion.div 
                className="mb-12 relative z-10"
                variants={{
                  initial: { scale: 1 },
                  hover: { scale: 1.05 }
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={logo.image} 
                  alt={logo.name}
                  className={`object-contain ${
                    logo.type === 'wide' ? 'h-16 md:h-20 w-auto' :
                    logo.type === 'stacked' ? 'h-32 md:h-40 w-auto' :
                    'h-24 md:h-28 w-auto'
                  }`}
                  style={{ filter: 'brightness(0) invert(1)' }} // Makes SVG white on dark bg
                />
              </motion.div>

              <div className="text-center relative z-10 mt-auto">
                <h4 className="text-accent-purple text-sm font-semibold uppercase tracking-widest mb-2">{logo.name}</h4>
                <p className="text-cream/50 text-sm max-w-[200px]">{logo.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LogoSuite;
