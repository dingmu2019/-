import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const BoundingBox = ({ text, initialX, initialY, delay }: { text: string, initialX: string, initialY: string, delay: number }) => (
    <motion.div
        className="absolute w-40 h-28 border border-cyan-400/60 rounded-sm flex flex-col justify-between p-1 backdrop-blur-sm bg-cyan-900/10"
        style={{ left: initialX, top: initialY }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [0.95, 1, 0.95]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: delay }}
    >
        {/* Corners */}
        <div className="absolute -top-px -left-px w-2 h-2 border-t border-l border-cyan-400"></div>
        <div className="absolute -top-px -right-px w-2 h-2 border-t border-r border-cyan-400"></div>
        <div className="absolute -bottom-px -left-px w-2 h-2 border-b border-l border-cyan-400"></div>
        <div className="absolute -bottom-px -right-px w-2 h-2 border-b border-r border-cyan-400"></div>

        <div className="bg-cyan-500/80 text-black text-[9px] px-1 self-start font-mono font-bold tracking-wider">
            {text}
        </div>
    </motion.div>
);

const SectionVision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full h-full bg-neutral-900 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background 'Video' Feed Simulation */}
      <div className="absolute inset-0 z-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125 saturate-0" />
      <div className="absolute inset-0 bg-cyan-900/20 z-0 mix-blend-overlay"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Moving Objects */}
          <div className="absolute inset-0 overflow-hidden transform md:scale-100 scale-75 origin-top-left">
             <BoundingBox text="ID: HUMAN_01" initialX="60%" initialY="30%" delay={0} />
             <BoundingBox text="ID: DEVICE_MOB" initialX="75%" initialY="60%" delay={2} />
             <BoundingBox text="ID: STRUC_WALL" initialX="20%" initialY="40%" delay={1} />
          </div>
      </div>

    </div>
  );
};

export default SectionVision;