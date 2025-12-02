import React from 'react';
import { motion } from 'framer-motion';

const SectionMechanical: React.FC = () => {
  return (
    <div className="w-full h-full bg-neutral-900 text-neutral-200 relative">
      
      {/* Background Noise Texture */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-0"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
           }}
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-30 md:opacity-50">
        {/* Giant Rotating Gear */}
        <motion.div
            className="text-neutral-100/10 md:text-neutral-100"
            animate={{ rotate: 360 }}
            transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
            }}
        >
            <svg
            width="600"
            height="600"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
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
      </div>

      {/* Decorative smaller gears */}
      <motion.div
        className="absolute bottom-[-100px] left-[-100px] text-neutral-600 opacity-20"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
         <svg width="400" height="400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            <circle cx="12" cy="12" r="3" />
         </svg>
      </motion.div>
    </div>
  );
};

export default SectionMechanical;