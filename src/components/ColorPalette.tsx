'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const colors = [
  { name: "Deep Purple", hex: "#291B4F", rgb: "41, 27, 79", text: "cream", description: "The anchor of trust" },
  { name: "Light Lavender", hex: "#EDE3F0", rgb: "237, 227, 240", text: "deep-purple", description: "Breathing space" },
  { name: "Accent Purple", hex: "#5E439B", rgb: "94, 67, 155", text: "cream", description: "Energy and vibrancy" },
];

const contrastCombinations = [
  {
    name: "Dark Mode",
    subtitle: "Primary Contrast",
    bg: "#291B4F",
    text: "#EDE3F0",
    accent: "#5E439B",
    wcag: "AAA",
    ratio: "12.5:1"
  },
  {
    name: "Light Mode",
    subtitle: "Secondary Contrast",
    bg: "#EDE3F0",
    text: "#291B4F",
    accent: "#5E439B",
    wcag: "AAA",
    ratio: "12.5:1"
  },
  {
    name: "Accent on Dark",
    subtitle: "Highlight Usage",
    bg: "#291B4F",
    text: "#5E439B",
    accent: "#EDE3F0",
    wcag: "AA",
    ratio: "4.8:1"
  }
];

const ColorPalette = () => {
  const [selectedColor, setSelectedColor] = useState<number | null>(null);

  return (
    <Section className="bg-light-lavender py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">Palette</span>
          <h2 className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight">
            Color <br />
            <span className="text-deep-purple/30">System</span>
          </h2>
        </motion.div>

        {/* Color Swatches - Interactive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {colors.map((color, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="group cursor-pointer"
              onClick={() => setSelectedColor(selectedColor === i ? null : i)}
            >
              <motion.div 
                className="h-64 md:h-80 rounded-lg mb-6 flex flex-col justify-between p-6 transition-all duration-500 shadow-lg"
                style={{ backgroundColor: color.hex }}
                whileHover={{ scale: 1.02, y: -8 }}
                animate={{ 
                  boxShadow: selectedColor === i 
                    ? `0 25px 50px -12px ${color.hex}80` 
                    : '0 10px 40px -10px rgba(0,0,0,0.2)'
                }}
              >
                {/* Selection indicator */}
                <div className="flex justify-end">
                  <motion.div
                    animate={{ scale: selectedColor === i ? 1 : 0 }}
                    className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center"
                  >
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </motion.div>
                </div>

                <div className={`text-${color.text}`}>
                  <h3 className="text-2xl font-medium mb-1">{color.name}</h3>
                  <p className="text-sm opacity-70 uppercase tracking-widest">{color.hex}</p>
                </div>
              </motion.div>

              {/* Expanded Info */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: selectedColor === i ? 'auto' : 0,
                  opacity: selectedColor === i ? 1 : 0
                }}
                className="overflow-hidden"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-deep-purple/40 uppercase tracking-widest text-xs">HEX</span>
                      <p className="text-deep-purple font-mono mt-1">{color.hex}</p>
                    </div>
                    <div>
                      <span className="text-deep-purple/40 uppercase tracking-widest text-xs">RGB</span>
                      <p className="text-deep-purple font-mono mt-1">{color.rgb}</p>
                    </div>
                  </div>
                  <p className="text-deep-purple/60 mt-4 text-sm">{color.description}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Accessibility Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-12">
            <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">
              Accessibility
            </span>
            <h3 className="text-3xl md:text-4xl font-medium text-deep-purple mb-4">
              Color Combinations & Contrast
            </h3>
            <p className="text-deep-purple/60 max-w-2xl">
              Legibility is a core tenet of our &apos;Transparency&apos; value. We adhere to WCAG AA standards for all text.
            </p>
          </div>

          {/* Contrast Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contrastCombinations.map((combo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="rounded-xl overflow-hidden shadow-lg"
              >
                {/* Preview */}
                <div 
                  className="p-8 min-h-[200px] flex flex-col justify-between"
                  style={{ backgroundColor: combo.bg }}
                >
                  <span 
                    className="text-xs uppercase tracking-widest opacity-60"
                    style={{ color: combo.accent }}
                  >
                    {combo.subtitle}
                  </span>
                  <div>
                    <h4 
                      className="text-3xl font-medium mb-2"
                      style={{ color: combo.text }}
                    >
                      {combo.name}
                    </h4>
                    <p 
                      className="text-sm opacity-70"
                      style={{ color: combo.text }}
                    >
                      Sample body text for contrast testing
                    </p>
                  </div>
                </div>

                {/* Metrics */}
                <div className="bg-white p-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span 
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        combo.wcag === 'AAA' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      WCAG {combo.wcag}
                    </span>
                    <span className="text-deep-purple/40 text-sm">
                      Contrast Ratio
                    </span>
                  </div>
                  <span className="text-deep-purple font-mono font-medium">
                    {combo.ratio}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 p-8 bg-deep-purple/5 rounded-xl"
        >
          <h4 className="text-lg font-medium text-deep-purple mb-4">Usage Guidelines</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-deep-purple/70">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
              Deep Purple is the primary brand color for backgrounds and headlines
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
              Light Lavender provides breathing room and is the default light background
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
              Accent Purple is used sparingly for CTAs, highlights, and interactive elements
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 bg-accent-purple rounded-full mt-2 flex-shrink-0" />
              Never place Accent Purple text directly on Light Lavender at small sizes
            </li>
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

export default ColorPalette;
