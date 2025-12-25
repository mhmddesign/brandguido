'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
  text: string | string[];
  className?: string;
  stagger?: number;
  delay?: number;
}

const TextReveal = ({ text, className = '', stagger = 0.1, delay = 0 }: TextRevealProps) => {
  const lines = Array.isArray(text) ? text : text.split('\n');

  return (
    <div className={`text-reveal-container ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="overflow-hidden">
          <motion.span
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: delay + (index * stagger),
              ease: [0.33, 1, 0.68, 1]
            }}
            className="text-reveal-line"
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
};

export default TextReveal;
