'use client';

import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './ui/MagneticButton';
import { Instagram, Linkedin, ArrowUpRight, ExternalLink } from 'lucide-react';

// ===========================================
// 🔗 LINKS CONFIGURATION - Edit these!
// ===========================================
const LINKS = {
  canva: "https://www.canva.com/brand/kAG8hgyZlHY",
  behance: "https://www.behance.net/", // Add your Behance URL
  contra: "https://contra.com/", // Add your Contra URL
  linkedin: "https://linkedin.com/in/", // Add your LinkedIn URL
  instagram: "https://instagram.com/", // Add your Instagram URL
  dribbble: "https://dribbble.com/", // Add your Dribbble URL
};

const Footer = () => {
  const socialLinks = [
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 7h-7V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0H5V5h8v2zm-4 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ), 
      label: "Behance", 
      href: LINKS.behance 
    },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
          <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
        </svg>
      ), 
      label: "Contra", 
      href: LINKS.contra 
    },
    { icon: <Linkedin size={20} />, label: "LinkedIn", href: LINKS.linkedin },
    { icon: <Instagram size={20} />, label: "Instagram", href: LINKS.instagram },
    { 
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zM15.77 19.73c-.153-.89-.758-4.024-2.24-7.78l-.067.02c-5.92 2.063-8.044 6.17-8.232 6.56 1.776 1.387 4.01 2.217 6.423 2.217 1.363 0 2.666-.282 3.86-.827-.045-.055-.096-.109-.15-.16zM3.95 17.106c.24-.43 3.15-5.36 8.6-7.177.135-.044.27-.086.41-.126-.26-.586-.542-1.17-.85-1.744-5.3 1.586-10.455 1.52-10.91 1.51-.003.183-.003.36-.003.538 0 2.73.88 5.255 2.37 7.31zM1.98 8.89c.47.01 4.87.04 9.83-1.23-1.76-3.13-3.66-5.76-3.93-6.13C4.57 3.2 2.13 5.73 1.98 8.89zm7.5-8.144c.29.4 2.23 3.03 3.96 6.24 3.8-1.42 5.4-3.58 5.6-3.88-2-1.77-4.56-2.84-7.4-2.84-.75 0-1.46.09-2.15.27zM19.7 4.566c-.22.34-2.01 2.64-5.97 4.24.26.52.5 1.053.72 1.593.08.18.15.36.22.53 3.38-.42 6.75.27 7.09.35-.02-2.5-.88-4.79-2.36-6.7z"/>
        </svg>
      ), 
      label: "Dribbble", 
      href: LINKS.dribbble 
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-deep-purple text-cream py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Top: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-cream/10 pb-20 mb-20 gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight mb-8">
              Start the <br /> <span className="text-accent-purple italic">Ritual.</span>
            </h2>
            <p className="text-cream/60 max-w-sm mb-8">
              Explore the complete brand guidelines and discover the full Vitalora identity system.
            </p>
            
            {/* Canva Brand Guidelines Button */}
            <motion.a
              href={LINKS.canva}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-accent-purple text-cream rounded-full text-sm uppercase tracking-widest hover:bg-accent-purple/80 transition-colors group"
            >
              <span>View Full Brand Guidelines</span>
              <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>

          <div className="relative group cursor-pointer">
            <a 
              href={LINKS.canva}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border border-accent-purple flex items-center justify-center p-4 relative overflow-hidden hover:bg-accent-purple/10 transition-colors">
                {/* Spinning text or effect */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border border-dashed border-accent-purple/30 rounded-full scale-90"
                />
                <span className="text-accent-purple font-medium text-lg uppercase tracking-widest group-hover:scale-110 transition-transform duration-500 text-center">
                  Brand<br/>Guidelines
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* Bottom: Links and Credits */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-medium tracking-widest uppercase mb-4">Vitalora</h3>
            <p className="text-cream/40 text-sm mb-4">Vitality is a Ritual</p>
            <p className="text-cream/30 text-xs">
              Brand identity by <span className="text-accent-purple">MHMD.DESIGN</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="text-accent-purple text-xs uppercase tracking-widest font-bold mb-6">Portfolio</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={LINKS.behance} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    Behance <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href={LINKS.contra} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    Contra <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href={LINKS.dribbble} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    Dribbble <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-accent-purple text-xs uppercase tracking-widest font-bold mb-6">Connect</h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    LinkedIn <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    Instagram <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
                <li>
                  <a href={LINKS.canva} target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-accent-purple transition-colors flex items-center gap-1 group">
                    Brand Guidelines <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all" />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-col items-center md:items-end md:col-span-1">
            <h4 className="text-accent-purple text-xs uppercase tracking-widest font-bold mb-6">Follow</h4>
            <div className="flex gap-3 flex-wrap justify-center md:justify-end">
              {socialLinks.map((social, i) => (
                <MagneticButton key={i} className="bg-cream/5 w-12 h-12 rounded-full border border-cream/10 hover:border-accent-purple/50 hover:text-accent-purple transition-colors flex items-center justify-center">
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    {social.icon}
                  </a>
                </MagneticButton>
              ))}
            </div>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between text-xs text-cream/30 uppercase tracking-widest gap-4">
          <p>© {currentYear} Vitalora International</p>
          <p>Designed by <a href={LINKS.behance} target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:text-cream transition-colors">MHMD.DESIGN</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
