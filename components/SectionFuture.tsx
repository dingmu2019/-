import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  { id: 'forest', color: 'bg-green-950' },
  { id: 'ocean', color: 'bg-blue-950' },
  { id: 'fire', color: 'bg-red-950' },
  { id: 'space', color: 'bg-indigo-950' },
];

const SectionFuture: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % themes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const currentTheme = themes[currentIndex];

  return (
    <div className={`w-full h-full relative flex items-center justify-center overflow-hidden transition-colors duration-[2000ms] ease-in-out ${currentTheme.color}`}>
      
      {/* Particle Effects (CSS Based) */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(20)].map((_, i) => (
             <motion.div
                key={i}
                className="absolute bg-white rounded-full blur-xl"
                style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 100 + 50}px`,
                    height: `${Math.random() * 100 + 50}px`,
                }}
                animate={{
                    opacity: [0.1, 0.3, 0.1],
                    scale: [1, 1.2, 1],
                    x: [0, Math.random() * 50 - 25],
                    y: [0, Math.random() * 50 - 25]
                }}
                transition={{
                    duration: 5 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
             />
        ))}
      </div>

    </div>
  );
};

export default SectionFuture;