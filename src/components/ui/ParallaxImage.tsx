'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number; // Higher is more movement
}

const ParallaxImage = ({
  src,
  alt,
  className = '',
  containerClassName = '',
  speed = 0.2
}: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);

  return (
    <div 
      ref={ref} 
      className={`parallax-container overflow-hidden relative ${containerClassName}`}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y, scale: 1.2 }}
        className={`w-full h-full object-cover rounded-sm ${className}`}
      />
    </div>
  );
};

export default ParallaxImage;
