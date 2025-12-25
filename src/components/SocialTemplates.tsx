'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const socialPosts = [
  { type: "Instagram Post", image: "https://placehold.co/400x500/291B4F/EDE3F0?text=IG+Post" },
  { type: "Story", image: "https://placehold.co/270x480/5E439B/EDE3F0?text=Story" },
  { type: "Instagram Post", image: "https://placehold.co/400x500/EDE3F0/291B4F?text=IG+Post" },
  { type: "Story", image: "https://placehold.co/270x480/291B4F/5E439B?text=Story" },
  { type: "Instagram Post", image: "https://placehold.co/400x500/5E439B/EDE3F0?text=IG+Post" },
];

const SocialTemplates = () => {
  return (
    <Section className="bg-deep-purple py-32 md:py-48 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">Digital</span>
          <h2 className="text-5xl md:text-7xl font-medium text-cream">
            Social Media <br />
            <span className="text-cream/30">Templates</span>
          </h2>
        </motion.div>

        {/* Floating Gallery */}
        <div className="flex justify-center items-end gap-4 md:gap-8 flex-wrap">
          {socialPosts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80, rotate: -5 + i * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 + i * 2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: 0, scale: 1.02 }}
              className="rounded-lg overflow-hidden shadow-2xl"
              style={{ 
                width: post.type === 'Story' ? '180px' : '240px',
              }}
              data-cursor="View"
            >
              <img 
                src={post.image}
                alt={post.type}
                className="w-full h-auto"
              />
            </motion.div>
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-cream/40 mt-16 text-sm"
        >
          Customizable templates for consistent brand presence
        </motion.p>
      </div>
    </Section>
  );
};

export default SocialTemplates;
