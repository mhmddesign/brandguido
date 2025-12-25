'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './ui/Section';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit these paths!
// ===========================================
const IMAGES = {
  logoFull: "/images/logo-full.svg",
  logoHorizontal: "/images/logo-horizontal.svg",
  logoIcon: "/images/logo-icon.svg",
};

const stages = [
  {
    id: 1,
    title: "Logo Overview",
    subtitle: "Usage & Guidelines",
    content: "The Vitalora identity is an anchor of trust. It must always be treated with respect and given ample breathing room. The logo exists in a hierarchical system designed to maintain legibility across everything from 10-pixel favicons to large-scale retail displays. No elements should be altered, rotated, or recolored outside of the approved palette.",
    visual: "full"
  },
  {
    id: 2,
    title: "The Shape",
    subtitle: "The Lockup",
    content: "Our primary signature combines the 'Vitalora' editorial wordmark. This vertical alignment mimics the structure of a tree or a rising sun, creating a sense of stability and growth.",
    visual: "wordmark"
  },
  {
    id: 3,
    title: "The Symbol",
    subtitle: "The 'O' Mark",
    content: "A fine-line duality. The base of the icon represents a medicinal leaf (Nature/Science), which fans out at the top into a stylized sunburst or aura (Energy/Spirit). It visually narrates our promise: Natural ingredients fueling inner radiance.",
    visual: "symbol"
  },
  {
    id: 4,
    title: "The Style",
    subtitle: "Modern Apothecary",
    content: "The typography is a high-contrast Modern Serif that evokes the authority of high-fashion editorial headers. It is sharp, precise, and elegant, contrasting with the fluid, organic geometry of the symbol.",
    visual: "typography"
  },
  {
    id: 5,
    title: "Variations",
    subtitle: "Secondary Lockups",
    content: "The Horizontal Lockup is used for website headers and shallow print areas. The Icon Mark (standalone 'O') is used for social media avatars, favicon, and the embossed seal on packaging caps.",
    visual: "variations"
  }
];

const LogoVisual = ({ visual }: { visual: string }) => {
  switch (visual) {
    case 'full':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="text-center flex flex-col items-center"
        >
          <img 
            src={IMAGES.logoFull} 
            alt="Vitalora Full Logo"
            className="h-64 md:h-80 w-auto object-contain"
          />
          <p className="text-accent-purple text-sm uppercase tracking-[0.3em] mt-6">
            Primary Lockup
          </p>
        </motion.div>
      );
    case 'wordmark':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="text-center flex flex-col items-center"
        >
          <img 
            src={IMAGES.logoHorizontal} 
            alt="Vitalora Wordmark"
            className="h-24 md:h-32 w-auto object-contain"
          />
          <motion.div
            className="h-0.5 bg-accent-purple mt-6 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: '200px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-deep-purple/50 text-sm uppercase tracking-widest mt-4">
            Editorial Wordmark
          </p>
        </motion.div>
      );
    case 'symbol':
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="flex flex-col items-center"
        >
          <motion.div 
            className="w-40 h-40 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img 
              src={IMAGES.logoIcon} 
              alt="Vitalora Icon"
              className="w-32 h-32 object-contain"
            />
          </motion.div>
          <p className="text-deep-purple/50 text-sm uppercase tracking-widest mt-8">
            The Iconic Symbol
          </p>
        </motion.div>
      );
    case 'typography':
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="text-center"
        >
          <h3 className="text-7xl md:text-8xl font-medium text-deep-purple tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
            Aa
          </h3>
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <span className="text-deep-purple font-light">Light</span>
            <span className="text-deep-purple font-normal">Regular</span>
            <span className="text-deep-purple font-medium">Medium</span>
            <span className="text-deep-purple font-bold">Bold</span>
          </div>
          <p className="text-deep-purple/50 text-sm uppercase tracking-widest mt-6">
            High-Contrast Modern Serif
          </p>
        </motion.div>
      );
    case 'variations':
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col gap-12 items-center justify-center"
        >
          {/* Horizontal Lockup */}
          <div className="text-center">
            <img 
              src={IMAGES.logoHorizontal} 
              alt="Horizontal Lockup"
              className="h-16 md:h-20 w-auto object-contain mx-auto"
            />
            <p className="text-xs text-deep-purple/40 uppercase tracking-widest mt-3">Horizontal</p>
          </div>

          {/* Icon Only */}
          <div className="text-center">
            <img 
              src={IMAGES.logoIcon} 
              alt="Icon Mark"
              className="h-16 md:h-20 w-auto object-contain mx-auto"
            />
            <p className="text-xs text-deep-purple/40 uppercase tracking-widest mt-3">Icon Mark</p>
          </div>
        </motion.div>
      );
    default:
      return null;
  }
};

const LogoDeepDive = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <Section className="bg-cream py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Brand Identity
          </span>
          <h2 className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight">
            Logo
            <br />
            <span className="text-deep-purple/30">Deep Dive</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Left: Visual Display */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-light-lavender/50 rounded-2xl p-12 md:p-16 flex items-center justify-center min-h-[400px]"
          >
            <AnimatePresence mode="wait">
              <LogoVisual key={activeStage} visual={stages[activeStage].visual} />
            </AnimatePresence>
          </motion.div>

          {/* Right: Stage Navigation & Content */}
          <div className="flex flex-col justify-center">
            {/* Stage Tabs */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
              {stages.map((stage, i) => (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(i)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                    activeStage === i
                      ? 'bg-accent-purple text-cream'
                      : 'bg-deep-purple/5 text-deep-purple/60 hover:bg-deep-purple/10'
                  }`}
                >
                  {stage.title}
                </button>
              ))}
            </div>

            {/* Active Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
                  {stages[activeStage].subtitle}
                </span>
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-medium text-deep-purple mb-6">
                  {stages[activeStage].title}
                </h3>
                <p className="text-lg md:text-xl text-deep-purple/70 leading-relaxed">
                  {stages[activeStage].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Stage Progress */}
            <div className="flex gap-2 mt-12">
              {stages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStage(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeStage ? 'bg-accent-purple w-12' : 'bg-deep-purple/10 w-8 hover:bg-deep-purple/20'
                  }`}
                />
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setActiveStage(Math.max(0, activeStage - 1))}
                disabled={activeStage === 0}
                className="px-6 py-3 border border-deep-purple/20 rounded-full text-deep-purple/60 hover:border-accent-purple hover:text-accent-purple transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={() => setActiveStage(Math.min(stages.length - 1, activeStage + 1))}
                disabled={activeStage === stages.length - 1}
                className="px-6 py-3 border border-deep-purple/20 rounded-full text-deep-purple/60 hover:border-accent-purple hover:text-accent-purple transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default LogoDeepDive;
