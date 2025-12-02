import React from 'react';
import { motion } from 'framer-motion';

const SectionTouch: React.FC = () => {
  // Generate a few random "touch points"
  const touchPoints = [
    { id: 1, x: -100, y: -50, delay: 0, color: 'bg-blue-400' },
    { id: 2, x: 100, y: 80, delay: 1, color: 'bg-purple-400' },
    { id: 3, x: -50, y: 150, delay: 2, color: 'bg-pink-400' },
    { id: 4, x: 120, y: -120, delay: 0.5, color: 'bg-cyan-400' },
  ];

  return (
    <section className="w-full h-screen bg-gray-50 overflow-hidden relative flex flex-col items-center justify-center font-sans">
      
      {/* Dynamic colorful blobs in background for that iOS blurry feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-blue-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[50vh] h-[50vh] bg-purple-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vh] h-[50vh] bg-pink-200 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="z-10 text-center mb-10">
        <h2 className="text-lg font-semibold text-gray-500 tracking-wide uppercase mb-2">Era 3: Touch Interface</h2>
        <h1 className="text-6xl font-thin text-gray-800 tracking-tight">Fluidity.</h1>
      </div>

      <div className="relative w-full h-full max-w-4xl mx-auto flex items-center justify-center">
        {touchPoints.map((point) => (
          <motion.div
            key={point.id}
            className={`absolute w-24 h-24 rounded-full ${point.color} opacity-40 blur-md`}
            initial={{ 
                x: point.x, 
                y: point.y, 
                scale: 1 
            }}
            animate={{
              x: [point.x, point.x + 40, point.x - 20, point.x], // Meander horizontally
              y: [point.y, point.y - 40, point.y + 30, point.y], // Meander vertically
              scale: [1, 1.5, 0.9, 1], // Breathe
            }}
            transition={{
              duration: 8,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
             {/* Inner solid core to represent the finger contact point */}
             <div className="w-full h-full rounded-full bg-white opacity-30 scale-50" />
          </motion.div>
        ))}

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-xl bg-white/30 border border-white/40 p-12 rounded-3xl shadow-2xl z-20 max-w-md text-center">
           <p className="text-gray-600 font-medium">Swipe to unlock the world.</p>
        </div>
      </div>
    </section>
  );
};

export default SectionTouch;