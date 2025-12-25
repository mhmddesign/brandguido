'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Section from './ui/Section';
import { LightboxImage } from './ui/Lightbox';
import { Play } from 'lucide-react';

// ===========================================
// 📸 IMAGE CONFIGURATION - Edit these paths!
// ===========================================
const IMAGES = {
  // Sketch images
  sketch1: "https://i.ibb.co/fz8r5nR1/Gemini-Generated-Image-ol77oaol77oaol77.png",
  sketch2: "https://i.ibb.co/p6QC15PS/Gemini-Generated-Image-832jsi832jsi832j.png",
  sketch3: "https://i.ibb.co/F4cYjRfk/unnamed.jpg",
  sketch4: "https://i.ibb.co/7J6hNPWp/unnamed-1.jpg",
  sketch5: "https://i.ibb.co/rGKGyLgk/unnamed-2.jpg",
  sketch6: "https://i.ibb.co/CKGvnRh1/unnamed-3.jpg",
  sketchFinal: "https://i.ibb.co/0y8xB8vK/Gemini-Generated-Image-80du4q80du4q80du.png",
  
  // Video cover image (placeholder)
  videoCover: "https://placehold.co/1920x1080/291B4F/5E439B?text=Brand+Film+Cover",
  
  // Video embed URL
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
};

const sketches = [
  { id: 1, image: IMAGES.sketch1, label: "Initial Concepts" },
  { id: 2, image: IMAGES.sketch2, label: "Symbol Studies" },
  { id: 3, image: IMAGES.sketch3, label: "Typography Tests" },
  { id: 4, image: IMAGES.sketch4, label: "Layout Exploration" },
  { id: 5, image: IMAGES.sketch5, label: "Color Studies" },
  { id: 6, image: IMAGES.sketch6, label: "Refinement" },
  { id: 7, image: IMAGES.sketchFinal, label: "Final Direction" },
];

const ProcessStudio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  return (
    <Section className="bg-light-lavender py-32 md:py-48 overflow-hidden relative">
      {/* Paper/Desk texture background */}
      <motion.div 
        style={{ y: bgY }}
        className="absolute inset-0 opacity-5"
      >
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23291B4F' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>

      <div ref={containerRef} className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-accent-purple uppercase tracking-[0.3em] text-xs font-semibold mb-4 block">
            Behind the Scenes
          </span>
          <h2 className="text-5xl md:text-7xl font-medium text-deep-purple leading-tight">
            The Process
            <br />
            <span className="text-deep-purple/30">Studio</span>
          </h2>
          <p className="text-deep-purple/50 mt-6 max-w-xl text-lg">
            A glimpse into the creative journey—from rough sketches to refined identity.
          </p>
        </motion.div>

        {/* Sketches Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-2xl font-medium text-deep-purple mb-8">Design Sketches</h3>
          
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto pb-6 cursor-grab active:cursor-grabbing scrollbar-hide -mx-6 px-6"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {sketches.map((sketch, i) => (
              <motion.div
                key={sketch.id}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex-shrink-0 w-[320px] md:w-[400px] group"
                style={{ scrollSnapAlign: 'start' }}
                data-cursor="View"
              >
                <div className="relative overflow-hidden rounded-lg bg-white shadow-lg">
                  {/* Tape decoration */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-cream/80 rotate-[-2deg] z-10" />
                  
                  <LightboxImage
                    src={sketch.image}
                    alt={sketch.label}
                    layoutId={`sketch-${sketch.id}`}
                    className="w-full aspect-[4/3]"
                  />
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-deep-purple font-medium">{sketch.label}</span>
                  <span className="text-deep-purple/30 text-sm">0{sketch.id}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-deep-purple/30 text-sm mt-4">
            ← Drag to explore →
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-medium text-deep-purple mb-8">Brand Film</h3>
          
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-deep-purple shadow-2xl">
            {/* Video Cover */}
            {!isVideoPlaying && (
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-deep-purple to-[#1a1040] flex items-center justify-center cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.3 }}
              >
                {/* Cover image */}
                <div className="absolute inset-0 opacity-30">
                  <img 
                    src={IMAGES.videoCover}
                    alt="Brand Film Cover"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Logo watermark */}
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <span className="text-[20vw] font-medium text-cream tracking-widest uppercase">
                    V
                  </span>
                </div>

                {/* Play button */}
                <motion.div 
                  className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-cream/50 flex items-center justify-center group-hover:border-accent-purple group-hover:bg-accent-purple/20 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play size={40} className="text-cream ml-2" fill="currentColor" />
                </motion.div>

                {/* Corner labels */}
                <span className="absolute top-6 left-6 text-cream/40 text-xs uppercase tracking-widest">
                  Vitalora
                </span>
                <span className="absolute bottom-6 right-6 text-cream/40 text-xs uppercase tracking-widest">
                  Brand Reveal
                </span>
              </motion.div>
            )}

            {/* Video iframe */}
            {isVideoPlaying && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0"
              >
                <iframe
                  src={IMAGES.videoUrl}
                  title="Brand Film"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            )}
          </div>

          <p className="text-deep-purple/30 text-sm mt-6 text-center uppercase tracking-widest">
            Click to play the brand reveal video
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default ProcessStudio;
