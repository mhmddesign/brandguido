'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const stationery = [
  { name: "Business Cards", image: "https://placehold.co/600x400/291B4F/5E439B?text=Business+Cards" },
  { name: "Letterhead", image: "https://placehold.co/600x800/EDE3F0/291B4F?text=Letterhead" },
  { name: "Envelope", image: "https://placehold.co/600x400/5E439B/EDE3F0?text=Envelope" },
  { name: "Notebook", image: "https://placehold.co/600x600/291B4F/EDE3F0?text=Notebook" },
];

const StationerySection = () => {
  return (
    <Section className="bg-light-lavender py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 flex flex-col md:flex-row md:justify-between md:items-end gap-8"
        >
          <div>
            <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Collateral</span>
            <h2 className="text-5xl md:text-7xl font-medium text-deep-purple">
              Stationery
            </h2>
          </div>
          <p className="text-deep-purple/50 max-w-sm text-lg">
            Cohesive brand touchpoints that extend the identity across all communications.
          </p>
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div className="flex gap-6 overflow-x-auto pb-8 -mx-6 px-6 scrollbar-hide">
          {stationery.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[400px] group"
              data-cursor="View"
            >
              <div className="overflow-hidden rounded-lg mb-4">
                <motion.img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-auto"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <h3 className="text-deep-purple font-medium group-hover:text-accent-purple transition-colors">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StationerySection;
