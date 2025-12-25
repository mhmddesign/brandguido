'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const sentences = [
  "We bridge the gap between scientific precision",
  "and the sacred art of feminine ritual.",
  "Our approach is meticulously crafted,",
  "blending organic wisdom with clinical excellence.",
  "Because vitality is not just a health goal,",
  "it is a daily ceremony of self-care."
];

const Manifesto = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="manifesto-section bg-cream py-32 md:py-48 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        {/* Left: Sticky Tagline */}
        <div className="md:col-span-4 lg:col-span-3">
          <div className="sticky top-32">
            <span className="text-accent-purple uppercase tracking-widest text-xs font-semibold mb-4 block">Our Vision</span>
            <h2 className="text-deep-purple text-3xl font-medium leading-tight">
              A New Era of <br /> Wellness
            </h2>
          </div>
        </div>

        {/* Right: Scrolling Manifesto sentences */}
        <div className="md:col-span-8 lg:col-span-9" ref={containerRef}>
          <div className="flex flex-col gap-8 md:gap-12">
            {sentences.map((text, i) => (
              <ManifestoSentence key={i} text={text} index={i} total={sentences.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ManifestoSentence = ({ text }: { text: string; index: number; total: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.p
      ref={ref}
      style={{ opacity }}
      className="text-4xl md:text-5xl lg:text-6xl font-medium text-deep-purple leading-[1.1]"
    >
      {text}
    </motion.p>
  );
};

export default Manifesto;
