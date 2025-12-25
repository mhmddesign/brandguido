'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Section from './ui/Section';

const Conclusion = () => {
  return (
    <Section className="bg-deep-purple py-32 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent-purple/20 via-transparent to-transparent opacity-50" />

      <div className="relative z-10 max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-6 block">
            Ready to Launch
          </span>
          
          <h2 className="text-5xl md:text-8xl font-medium text-cream mb-8 leading-tight">
            Vitality is <br />
            <span className="text-accent-purple italic">Blooming.</span>
          </h2>
          
          <p className="text-cream/50 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            The Vitalora identity system is now complete. A harmonious blend of scientific precision and organic beauty, ready to define the future of luxury wellness.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
          className="mt-16 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-purple/50 to-transparent"
        />
      </div>
    </Section>
  );
};

export default Conclusion;
