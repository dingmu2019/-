import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

// Define themes with translation keys
const themes = [
  { id: 'forest', nameKey: 'theme_forest', color: 'bg-green-950', accent: 'text-green-300' },
  { id: 'ocean', nameKey: 'theme_ocean', color: 'bg-blue-950', accent: 'text-blue-300' },
  { id: 'fire', nameKey: 'theme_fire', color: 'bg-red-950', accent: 'text-red-300' },
  { id: 'space', nameKey: 'theme_space', color: 'bg-indigo-950', accent: 'text-indigo-300' },
];

const SectionFuture: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % themes.length);
    }, 3000); // Switch every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const currentTheme = themes[currentIndex];

  return (
    <section className={`w-full h-screen relative flex flex-col items-center justify-center overflow-hidden transition-colors duration-[1500ms] ease-in-out ${currentTheme.color}`}>
      
      <div className="absolute inset-0 bg-black/30 z-0"></div>

      <div className="z-10 text-center px-4">
        <p className="text-white/60 mb-6 uppercase tracking-widest text-sm">{t('future_era')}</p>
        
        <h1 className="text-4xl md:text-6xl text-white font-bold leading-tight mb-8">
          {t('future_imagining')} <br />
          <AnimatePresence mode="wait">
            <motion.span
              key={currentTheme.id}
              className={`block mt-4 ${currentTheme.accent}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {t(currentTheme.nameKey)}
            </motion.span>
          </AnimatePresence>
        </h1>

        <motion.div 
            className="text-white/80 text-lg border-t border-white/20 pt-8 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
        >
            {t('future_generated')}
        </motion.div>
      </div>

      {/* Ambient background particles based on theme (simplified visual representation) */}
      <AnimatePresence>
        {currentTheme.id === 'forest' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[url('https://picsum.photos/seed/forest/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        )}
        {currentTheme.id === 'ocean' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[url('https://picsum.photos/seed/ocean/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        )}
        {currentTheme.id === 'fire' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[url('https://picsum.photos/seed/fire/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        )}
        {currentTheme.id === 'space' && (
           <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.3 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-[url('https://picsum.photos/seed/space/1920/1080')] bg-cover bg-center mix-blend-overlay" />
        )}
      </AnimatePresence>
      
    </section>
  );
};

export default SectionFuture;