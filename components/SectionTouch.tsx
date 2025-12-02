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
    <div className="w-full h-full bg-gray-50 overflow-hidden relative flex items-center justify-center">
      
      {/* Dynamic colorful blobs in background for that iOS blurry feel */}
      <div className="absolute top-[-10%] left-[-10%] w-[60vw] h-[60vw] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-purple-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-blob animation-delay-4000"></div>

      <div className="relative w-full h-full flex items-center justify-center opacity-60">
        {touchPoints.map((point) => (
          <motion.div
            key={point.id}
            className={`absolute w-32 h-32 rounded-full ${point.color} opacity-40 blur-md`}
            initial={{ 
                x: point.x, 
                y: point.y, 
                scale: 1 
            }}
            animate={{
              x: [point.x, point.x + 50, point.x - 30, point.x], 
              y: [point.y, point.y - 50, point.y + 40, point.y], 
              scale: [1, 1.5, 0.9, 1],
            }}
            transition={{
              duration: 10,
              delay: point.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
             <div className="w-full h-full rounded-full bg-white opacity-30 scale-50" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SectionTouch;