import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const SectionMechanical: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden bg-neutral-900 text-neutral-200">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      <div className="z-10 text-center space-y-8">
        <h2 className="text-xl tracking-[0.5em] uppercase font-light text-neutral-400">{t('mech_era')}</h2>
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">{t('mech_title')}</h1>
      </div>

      {/* Giant Rotating Gear */}
      <motion.div
        className="mt-12 text-neutral-100"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
      >
        <svg
          width="240"
          height="240"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-90 drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
        </svg>
      </motion.div>

      {/* Smaller Counter-Rotating Gears for atmosphere */}
      <motion.div
        className="absolute bottom-20 left-20 text-neutral-600 opacity-50"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M10.3 2.1a1.98 1.98 0 0 0-2.5 2 2 2 0 0 0-1.5 1.1l-1 1.7a2 2 0 0 0-1.6.4A2 2 0 0 0 3 8a2 2 0 0 0-.7 1.9l-1.8.6a1.98 1.98 0 0 0-1.3 2.3 2 2 0 0 0 .5 2 2 2 0 0 0-.2 2.1l1 1.7a2 2 0 0 0 1.6.8 2 2 0 0 0 1.1 1.9l1.8.6a1.98 1.98 0 0 0 2.5-2 2 2 0 0 0 1.5-1.1l1-1.7a2 2 0 0 0 1.6-.4 2 2 0 0 0 .7.3 2 2 0 0 0 .7-1.9l1.8-.6a1.98 1.98 0 0 0 1.3-2.3 2 2 0 0 0-.5-2 2 2 0 0 0 .2-2.1l-1-1.7a2 2 0 0 0-1.6-.8 2 2 0 0 0-1.1-1.9l-1.8-.6a2 2 0 0 0-.7.3Z" />
           <circle cx="12" cy="12" r="3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default SectionMechanical;