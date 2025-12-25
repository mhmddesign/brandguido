'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundMark = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 5000], [0, 360]);

  // SVG Paths
  const oPath = "M242.04,67.57c.05,1.5.19,2.98.39,4.44.55,3.87,1.55,7.77,3.08,11.37,1.56,3.7,3.78,7.2,6.85,9.82,2.45,2.1,5.43,3.58,8.64,4,3.03.4,6.11-.16,8.84-1.51,3.05-1.51,5.57-3.92,7.46-6.72,2.35-3.47,3.76-7.51,4.5-11.62.57-3.22.73-6.51.59-9.78-.71-16.6-13.14-34.38-28.7-25.91-.8.44-4.65,2.53-7.85,8.36-2.9,5.28-4.01,11.51-3.8,17.56ZM232.2,57.5c.36-1,.79-1.97,1.28-2.92,1.06-2.04,2.36-3.96,3.8-5.75,1.33-1.66,2.84-3.19,4.54-4.48,1.22-.92,7.92-5.98,17.97-6.62,31.02-1.98,41.68,30.12,29.4,47.82-1.64,2.36-3.58,4.51-5.79,6.35-2.09,1.74-4.41,3.21-6.89,4.34-2.41,1.11-4.96,1.91-7.57,2.4-2.58.48-5.22.66-7.85.55-2.61-.12-5.21-.52-7.73-1.21-2.5-.68-4.93-1.64-7.22-2.86s-4.4-2.7-6.31-4.42-3.61-3.71-5-5.89-2.55-4.7-3.3-7.26c-.81-2.77-1.2-5.65-1.2-8.53,0-3.9.51-7.85,1.85-11.52Z";
  const starPath = "M276.4,63.73c-7.51,2.61-11.85,10.5-10.03,18.24-2.61-7.51-10.5-11.85-18.24-10.02,7.51-2.61,11.85-10.5,10.03-18.25,2.61,7.51,10.5,11.85,18.25,10.03Z";

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex items-center justify-center overflow-hidden mix-blend-overlay">
      <motion.div 
        className="text-deep-purple/10"
        style={{ 
          rotate,
          scale: 1.5
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          className="w-[120vh] h-[120vh]"
          style={{ overflow: 'visible' }}
        >
          {/* Centered Paths */}
          <g transform="translate(-230, -50) scale(1)">
             <path d={oPath} fill="currentColor" />
             
             {/* Rotating Star */}
             <motion.g
               style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
               animate={{ rotate: 360 }}
               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             >
                <path d={starPath} fill="currentColor" />
             </motion.g>
          </g>
        </svg>
      </motion.div>
    </div>
  );
};

export default BackgroundMark;
