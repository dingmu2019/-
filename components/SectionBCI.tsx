import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const SectionBCI: React.FC = () => {
  const { t } = useLanguage();

  const signalFlowVariant = {
    animate: {
      pathLength: [0, 1],
      opacity: [0, 1, 0],
      transition: { duration: 1.5, repeat: Infinity, ease: "linear" }
    }
  };

  return (
    <div className="w-full h-full bg-[#02040a] flex flex-col items-center justify-center relative overflow-hidden text-cyan-500 font-mono">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,100,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,100,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Main Visual Positioned to Right */}
      <div className="absolute right-0 md:right-[10%] top-1/2 -translate-y-1/2 opacity-60 md:opacity-80 scale-75 md:scale-100">
        <div className="relative w-[300px] h-[500px]">
            
            {/* The Biological Human Silhouette (Base) */}
            <svg viewBox="0 0 200 400" className="absolute inset-0 w-full h-full drop-shadow-[0_0_15px_rgba(0,255,255,0.3)]">
                <defs>
                    <linearGradient id="bioGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#00f2ff" stopOpacity="0.1" />
                        <stop offset="100%" stopColor="#00f2ff" stopOpacity="0.05" />
                    </linearGradient>
                </defs>
                
                <path 
                    d="M100,30 C115,30 125,40 125,55 C125,70 115,80 100,80 C85,80 75,70 75,55 C75,40 85,30 100,30 Z 
                       M100,80 L100,180 
                       M100,85 L140,110 L150,190 
                       M100,85 L60,110 L50,190 
                       M100,180 L130,250 L130,380 
                       M100,180 L70,250 L70,380"
                    fill="url(#bioGradient)"
                    stroke="#0088ff"
                    strokeWidth="1"
                    strokeOpacity="0.3"
                />
                
                {/* Brain Node (The Source) */}
                <motion.circle cx="100" cy="55" r="4" fill="#fff" 
                    animate={{ opacity: [0.5, 1, 0.5], scale: [1, 1.2, 1] }} 
                    transition={{ duration: 1, repeat: Infinity }}
                />

                {/* Neural/Nervous System (Flowing Signals) */}
                <motion.path d="M100,55 L100,180" stroke="#fff" strokeWidth="2" fill="none" variants={signalFlowVariant} animate="animate" />
                <motion.path d="M100,90 L140,110 L150,190" stroke="#fff" strokeWidth="1.5" fill="none" variants={signalFlowVariant} animate="animate" />
                <motion.path d="M100,90 L60,110 L50,190" stroke="#fff" strokeWidth="1.5" fill="none" variants={signalFlowVariant} animate="animate" />

                {/* Scanning Effect */}
                 <motion.line x1="0" y1="0" x2="200" y2="0" stroke="rgba(255,255,255,0.5)" strokeWidth="2"
                    animate={{ y: [0, 400] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{ filter: "drop-shadow(0 0 5px #fff)" }}
                 />
            </svg>

            {/* Floating Data Rings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[60%] border border-cyan-500/30 rounded-full" style={{ transform: 'translate(-50%, -50%) rotateX(60deg)' }}></div>
            <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[70%] border-l-2 border-r-2 border-cyan-400/50 rounded-full" 
                style={{ transform: 'translate(-50%, -50%) rotateX(60deg)' }}
                animate={{ rotateZ: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
        </div>
      </div>
    </div>
  );
};

export default SectionBCI;