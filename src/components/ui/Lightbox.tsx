'use client';

import React, { createContext, useContext, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxContextType {
  openLightbox: (imageUrl: string, alt: string, layoutId?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | null>(null);

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within LightboxProvider');
  }
  return context;
};

interface LightboxProviderProps {
  children: React.ReactNode;
}

export const LightboxProvider: React.FC<LightboxProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<{ url: string; alt: string; layoutId?: string } | null>(null);

  const openLightbox = useCallback((imageUrl: string, alt: string, layoutId?: string) => {
    setCurrentImage({ url: imageUrl, alt, layoutId });
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
    setTimeout(() => setCurrentImage(null), 300);
  }, []);

  // Handle ESC key
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      
      <AnimatePresence>
        {isOpen && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Backdrop with blur */}
            <motion.div 
              className="absolute inset-0 bg-deep-purple/90 backdrop-blur-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: 0.2 }}
              className="absolute top-8 right-8 text-cream/80 hover:text-cream transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={32} />
            </motion.button>

            {/* Image container */}
            <motion.div
              layoutId={currentImage.layoutId}
              className="relative max-w-[90vw] max-h-[90vh] z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                src={currentImage.url}
                alt={currentImage.alt}
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Caption */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.2 }}
                className="text-center text-cream/60 text-sm mt-4 uppercase tracking-widest"
              >
                {currentImage.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
};

// Clickable image component that integrates with lightbox
interface LightboxImageProps {
  src: string;
  alt: string;
  className?: string;
  layoutId?: string;
}

export const LightboxImage: React.FC<LightboxImageProps> = ({ src, alt, className = '', layoutId }) => {
  const { openLightbox } = useLightbox();
  const imageLayoutId = layoutId || `lightbox-${src}`;

  return (
    <motion.div
      layoutId={imageLayoutId}
      className={`cursor-zoom-in overflow-hidden ${className}`}
      onClick={() => openLightbox(src, alt, imageLayoutId)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export default LightboxProvider;
