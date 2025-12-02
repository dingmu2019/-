import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const BoundingBox = ({ text, initialX, initialY, delay }: { text: string, initialX: number, initialY: number, delay: number }) => (
    <motion.div
        className="absolute w-48 h-32 border-2 border-cyan-400/60 rounded-lg flex flex-col justify-between p-2"
        initial={{ x: initialX, y: initialY, opacity: 0 }}
        animate={{ 
            x: [initialX, initialX + 30, initialX - 20, initialX],
            y: [initialY, initialY - 20, initialY + 10, initialY],
            opacity: 1
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear", delay: delay }}
    >
        {/* Corners */}
        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyan-400"></div>
        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyan-400"></div>
        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyan-400"></div>
        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyan-400"></div>

        <div className="bg-cyan-900/80 text-cyan-100 text-xs px-2 py-1 self-start font-mono uppercase tracking-wider">
            {text}
        </div>
        <div className="text-[10px] text-cyan-300 font-mono self-end">
            {(Math.random() * 0.5 + 2.1).toFixed(2)}m
        </div>
    </motion.div>
);

const SectionVision: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="w-full h-screen bg-neutral-900 relative overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background 'Video' Feed Simulation */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center filter grayscale contrast-125" />
      <div className="absolute inset-0 bg-cyan-900/10 z-0 mix-blend-overlay"></div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>

      <div className="z-20 text-center relative mb-20">
        <h2 className="text-cyan-400/80 tracking-[0.3em] uppercase text-sm mb-2 shadow-black drop-shadow-md">{t('vision_era')}</h2>
        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">{t('vision_title')}</h1>
      </div>

      {/* HUD Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
          {/* Top Bar */}
          <div className="absolute top-10 left-10 flex gap-4 text-cyan-400/60 font-mono text-xs">
              <span>REC ●</span>
              <span>12:42 PM</span>
              <span>BAT 84%</span>
          </div>

          {/* Center Crosshair */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 border border-cyan-400/30 rounded-full flex items-center justify-center">
              <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>

          {/* Moving Objects */}
          <div className="absolute inset-0 overflow-hidden">
             <BoundingBox text={t('vision_obj_1')} initialX={100} initialY={200} delay={0} />
             <BoundingBox text={t('vision_obj_2')} initialX={800} initialY={150} delay={2} />
             <BoundingBox text={t('vision_obj_3')} initialX={400} initialY={500} delay={4} />
          </div>

          {/* Bottom Data Stream */}
          <div className="absolute bottom-10 left-10 right-10 flex justify-between text-cyan-500/40 font-mono text-[10px] uppercase">
             <span>sys_opt: normal</span>
             <span>{t('vision_sub')}</span>
             <span>net_speed: 1.2gbps</span>
          </div>
      </div>

    </section>
  );
};

export default SectionVision;