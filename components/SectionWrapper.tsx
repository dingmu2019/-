import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

interface SectionWrapperProps {
  children: ReactNode;
  eraPrefix: string;
  index: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, eraPrefix, index }) => {
  const { getEra } = useLanguage();
  const data = getEra(eraPrefix);

  return (
    <section className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row">
      
      {/* 1. Visual Layer (The Background Component) */}
      <div className="absolute inset-0 w-full h-full z-0">
        {children}
      </div>

      {/* 2. Content Overlay Layer */}
      <div className="relative z-10 w-full h-full pointer-events-none flex flex-col justify-end md:justify-center p-6 md:p-12 lg:p-24">
        
        <div className="md:max-w-xl">
             {/* Year Badge */}
             <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-block px-3 py-1 mb-4 border border-white/30 rounded-full bg-black/40 backdrop-blur-md text-white/90 font-mono text-xs md:text-sm tracking-wider"
             >
                {data.year}
             </motion.div>

             {/* Title */}
             <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-lg"
             >
                {data.title}
             </motion.h2>

             {/* Interaction Type Highlight */}
             <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }} 
                className="text-lg md:text-xl text-cyan-400 font-mono mb-6 font-medium"
             >
                {`> ${data.type}`}
             </motion.div>

             {/* Description Card */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="bg-black/50 backdrop-blur-xl border-l-2 border-white/20 p-6 md:p-8 rounded-r-xl max-w-md shadow-2xl"
             >
                <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                    {data.desc}
                </p>
             </motion.div>
        </div>

      </div>

      {/* 3. Timeline Indicator (Right Side) */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 z-20">
          {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all duration-500 ${index === i ? 'bg-white scale-150' : 'bg-white/20'}`}
              />
          ))}
      </div>

    </section>
  );
};

export default SectionWrapper;