import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const SectionVoice: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full h-screen bg-[#101010] flex flex-col items-center justify-center relative overflow-hidden text-white">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="z-10 text-center mb-16">
        <h2 className="text-gray-400 tracking-[0.3em] uppercase text-sm mb-2">{t('voice_era')}</h2>
        <h1 className="text-3xl md:text-5xl font-medium tracking-tight">{t('voice_title')}</h1>
      </div>

      {/* Morphing Voice Orb */}
      <div className="relative flex items-center justify-center">
        {/* Core */}
        <motion.div
          className="w-48 h-48 bg-white rounded-full mix-blend-screen shadow-[0_0_50px_rgba(255,255,255,0.5)]"
          animate={{
            scale: [1, 1.1, 0.95, 1.2, 1],
            borderRadius: [
                "50% 50% 50% 50% / 50% 50% 50% 50%", 
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "30% 60% 70% 40% / 50% 60% 30% 60%",
                "50% 50% 50% 50% / 50% 50% 50% 50%" 
            ]
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        />
        
        {/* Outer Ring 1 */}
        <motion.div
            className="absolute border border-white/20 w-64 h-64 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Outer Ring 2 */}
        <motion.div
            className="absolute border border-white/10 w-80 h-80 rounded-full"
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 4, delay: 0.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="mt-12 space-y-2 text-center opacity-80 font-mono text-sm">
        <p className="animate-pulse">{t('voice_sub')}</p>
        <div className="flex justify-center gap-1 h-4 items-end">
            {[...Array(5)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="w-1 bg-white"
                    animate={{ height: [4, 16, 8, 24, 4] }}
                    transition={{ 
                        duration: 0.5, 
                        repeat: Infinity, 
                        repeatType: "reverse",
                        delay: i * 0.1 
                    }}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default SectionVoice;