'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ArrowDown, Mail, Phone, ExternalLink, Linkedin, Youtube, Dribbble, Instagram } from 'lucide-react';

const LINKS = {
  whatsapp: "https://wa.me/212628657926",
  email: "mailto:me@mohelmaachi.com",
  portfolio: "https://mhmd.design",
  blog: "https://mhmd.blog",
  linkedin: "https://linkedin.com/in/mohelmaachi",
  youtube: "https://youtube.com/@mohelmaachi",
  behance: "https://behance.net/mohelmaachi",
  dribbble: "https://dribbble.com/mohelmaachi",
  contra: "https://contra.com/mohelmaachi",
};

const SocialIcon = ({ icon, href, label }: { icon: React.ReactNode, href: string, label: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-deep-purple/5 hover:bg-accent-purple hover:text-white flex items-center justify-center transition-all duration-300 text-deep-purple"
    title={label}
  >
    {icon}
  </a>
);

const FloatingDesigner = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
  const scrollToBottom = () => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      
      {/* Scroll Controls (Always visible but subtle) */}
      <div className="flex flex-col gap-2 pointer-events-auto">
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-deep-purple/10 flex items-center justify-center text-deep-purple hover:bg-accent-purple hover:text-white transition-all duration-300"
          title="Scroll to Top"
        >
          <ArrowUp size={18} />
        </button>
        <button
          onClick={scrollToBottom}
          className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-deep-purple/10 flex items-center justify-center text-deep-purple hover:bg-accent-purple hover:text-white transition-all duration-300"
          title="Scroll to Bottom"
        >
          <ArrowDown size={18} />
        </button>
      </div>

      {/* Main Designer Widget */}
      <div className="relative pointer-events-auto">
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-full right-0 mb-4 w-72 bg-white rounded-2xl shadow-2xl border border-deep-purple/10 overflow-hidden"
            >
              {/* Head */}
              <div className="p-6 bg-deep-purple text-cream relative overflow-hidden">
                <div className="absolute inset-0 copper-gradient opacity-20" />
                <h3 className="font-medium text-lg relative z-10">Mohammed El Maachi</h3>
                <p className="text-sm opacity-60 relative z-10">Brand & Visual Designer</p>
                <a 
                  href={LINKS.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-accent-purple hover:text-white transition-colors relative z-10"
                >
                  mhmd.design <ExternalLink size={10} />
                </a>
              </div>

              {/* Client Resources - Download Section */}
              <div className="p-4 bg-gray-50 border-b border-gray-100">
                <p className="text-[10px] uppercase tracking-wider opacity-50 mb-3 font-semibold">Client Resources</p>
                <div className="flex flex-col gap-2">
                  <a 
                    href="#" 
                    className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-accent-purple/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-deep-purple/5 text-accent-purple flex items-center justify-center">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="7 10 12 15 17 10"/>
                          <line x1="12" y1="15" x2="12" y2="3"/>
                        </svg>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Logo Kit (SVG)</span>
                    </div>
                    <ExternalLink size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a 
                    href="#" 
                    className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-accent-purple/30 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-deep-purple/5 text-accent-purple flex items-center justify-center">
                        <span className="text-[10px] font-bold">Ai</span>
                      </div>
                      <span className="text-sm font-medium text-gray-700">Project File (.AI)</span>
                    </div>
                    <ExternalLink size={12} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              {/* Contact Actions */}
              <div className="p-4 flex flex-col gap-2 border-b border-gray-100">
                <a 
                  href={LINKS.whatsapp} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-green-50 text-gray-700 hover:text-green-700 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <Phone size={14} />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">WhatsApp Me</span>
                    <span className="text-xs opacity-60">+212 628 657 926</span>
                  </div>
                </a>
                
                <a 
                  href={LINKS.email} 
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Mail size={14} />
                  </div>
                  <div>
                    <span className="block text-sm font-medium">Email Me</span>
                    <span className="text-xs opacity-60">me@mohelmaachi.com</span>
                  </div>
                </a>
              </div>

              {/* Social Grid */}
              <div className="p-4 bg-gray-50 flex justify-between">
                 <SocialIcon icon={<Linkedin size={18} />} href={LINKS.linkedin} label="LinkedIn" />
                 <SocialIcon icon={<Youtube size={18} />} href={LINKS.youtube} label="YouTube" />
                 <SocialIcon icon={<Dribbble size={18} />} href={LINKS.dribbble} label="Dribbble" />
                 
                 {/* Behance Icon SVG */}
                 <SocialIcon 
                   href={LINKS.behance} 
                   label="Behance"
                   icon={(
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22 7h-7V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0H5V5h8v2zm-4 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
                    </svg>
                   )}
                 />

                 {/* Contra Icon SVG */}
                 <SocialIcon 
                   href={LINKS.contra} 
                   label="Contra"
                   icon={(
                     <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                       <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                       <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2"/>
                     </svg>
                   )}
                 />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Button */}
        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-14 bg-deep-purple hover:bg-accent-purple text-white pl-4 pr-1 rounded-full shadow-2xl flex items-center gap-3 transition-colors duration-300 group overflow-hidden"
        >
          <div className="flex flex-col items-start leading-none">
            <span className="text-[10px] uppercase tracking-wider opacity-70">Designed by</span>
            <span className="font-medium">MHMD</span>
          </div>
          
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors relative">
            <img 
              src="https://i.ibb.co/bgC70NG0/Gemini-Generated-Image-8eg6b58eg6b58eg6.png" 
              alt="MHMD"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.button>
      </div>
    </div>
  );
};

export default FloatingDesigner;
