'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';
import { LightboxImage } from './ui/Lightbox';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit these paths!
// ===========================================
const IMAGES = {
  mockup1: "https://i.ibb.co/zTs9nSQR/Amber-Jar-Mockup-4.png",
  mockup2: "https://i.ibb.co/RTzwsRXg/Amber-Jar-Mockup-3.png",
  mockup3: "https://i.ibb.co/TqntvTSp/Mockupv23.png",
  mockup4: "https://i.ibb.co/Sw6mtFWp/Gemini-Generated-Image-ij5s95ij5s95ij5s.png",
  mockup5: "https://i.ibb.co/q3pM73dG/Gemini-Generated-Image-b158fgb158fgb158.png",
  mockup6: "https://i.ibb.co/7tJ2fR42/Gemini-Generated-Image-rwpnz0rwpnz0rwpn.png",
};

const mockups = [
  {
    title: "Amber Jar - Front",
    description: "Elegant amber glass with refined detailing",
    image: IMAGES.mockup1,
    span: "md:col-span-2 md:row-span-2"
  },
  {
    title: "Amber Jar - Side",
    description: "Side view with label detail",
    image: IMAGES.mockup2,
    span: "md:col-span-1"
  },
  {
    title: "Product Display",
    description: "Full product presentation",
    image: IMAGES.mockup3,
    span: "md:col-span-1"
  },
  {
    title: "Lifestyle Shot",
    description: "Product in context",
    image: IMAGES.mockup4,
    span: "md:col-span-1"
  },
  {
    title: "Brand Application",
    description: "Complete branding showcase",
    image: IMAGES.mockup5,
    span: "md:col-span-1"
  },
  {
    title: "Product Line",
    description: "Complete collection display",
    image: IMAGES.mockup6,
    span: "md:col-span-2"
  }
];

const MockupGallery = () => {
  return (
    <Section className="bg-cream py-32 md:py-48">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Applications</span>
          <h2 className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight">
            Packaging <br />
            <span className="text-deep-purple/30">& Product</span>
          </h2>
        </motion.div>

        {/* Mockup Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {mockups.map((mockup, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-lg ${mockup.span}`}
              data-cursor="View"
            >
              <div className="aspect-square md:aspect-auto md:h-full w-full overflow-hidden">
                <LightboxImage
                  src={mockup.image}
                  alt={mockup.title}
                  layoutId={`mockup-${i}`}
                  className="w-full h-full"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-purple/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8 pointer-events-none">
                <h3 className="text-cream text-xl font-medium mb-1">{mockup.title}</h3>
                <p className="text-cream/60 text-sm">{mockup.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Click instruction */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-deep-purple/30 text-sm mt-8 uppercase tracking-widest"
        >
          Click any image to expand
        </motion.p>
      </div>
    </Section>
  );
};

export default MockupGallery;
