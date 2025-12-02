import React from 'react';
import { motion } from 'framer-motion';

const SectionVoice: React.FC = () => {
  return (
    <div className="w-full h-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-3/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] pointer-events-none transform -translate-x-1/2 -translate-y-1/2" />

      {/* Morphing Voice Orb - Positioned slightly to the right to balance text on left */}
      <div className="relative flex items-center justify-center transform md:translate-x-[20vw]">
        {/* Core */}
        <motion.div
          className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full mix-blend-screen shadow-[0_0_80px_rgba(255,255,255,0.4)]"
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
            className="absolute border border-white/20 w-80 h-80 rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Audio Visualizer Lines (Simulated) */}
        <div className="absolute -bottom-24 flex gap-2 h-16 items-center opacity-50">
            {[...Array(8)].map((_, i) => (
                <motion.div 
                    key={i}
                    className="w-2 bg-white rounded-full"
                    animate={{ height: [10, 40 + Math.random()*40, 10] }}
                    transition={{ 
                        duration: 0.5 + Math.random() * 0.5, 
                        repeat: Infinity, 
                        repeatType: "reverse",
                    }}
                />
            ))}
        </div>
      </div>
    </div>
  );
};

export default SectionVoice;