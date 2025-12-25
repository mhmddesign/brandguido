'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Instagram, Dribbble, Linkedin } from 'lucide-react';
import MagneticButton from './ui/MagneticButton';

const DesignerFooter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] text-cream py-20 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-medium mb-8 leading-tight">
            Let&apos;s create something <br />
            <span className="text-accent-purple italic">extraordinary</span> together.
          </h2>
          
          <motion.a
            href="mailto:hello@mhmd.design"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent-purple text-cream rounded-full text-lg font-medium mt-8 group"
            data-cursor="Email"
          >
            <Mail size={20} />
            Get in Touch
            <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-cream/10 mb-16" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Designer Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-medium tracking-wide mb-2">MHMD.DESIGN</h3>
            <p className="text-cream/40 text-sm">Brand & Digital Designer</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {[
              { icon: <Instagram size={20} />, label: "Instagram", href: "#" },
              { icon: <Dribbble size={20} />, label: "Dribbble", href: "#" },
              { icon: <Linkedin size={20} />, label: "LinkedIn", href: "#" },
            ].map((social, i) => (
              <MagneticButton 
                key={i}
                className="w-12 h-12 rounded-full border border-cream/20 hover:border-accent-purple hover:text-accent-purple transition-colors flex items-center justify-center"
              >
                <a href={social.href} aria-label={social.label}>
                  {social.icon}
                </a>
              </MagneticButton>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-cream/30 text-xs uppercase tracking-widest text-center md:text-right">
            <p>© {currentYear} MHMD.DESIGN</p>
            <p className="mt-1">All rights reserved</p>
          </div>
        </div>

        {/* Project Info */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-cream/5 text-center"
        >
          <p className="text-cream/20 text-xs uppercase tracking-[0.3em]">
            Vitalora Brand Identity Project • {currentYear}
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default DesignerFooter;
