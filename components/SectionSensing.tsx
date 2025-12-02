import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const SectionSensing: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const render = () => {
      time += 0.05;
      
      // Clear with transparency for trail effect? No, just clear for crisp siri look.
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerY = canvas.height / 2;
      const numberOfLines = 5;
      
      // Siri-like composite wave
      for (let i = 0; i < numberOfLines; i++) {
        ctx.beginPath();
        ctx.lineWidth = 2;
        
        // Varying colors and opacities
        const colors = [
            'rgba(50, 215, 75, 0.5)',  // Green
            'rgba(10, 132, 255, 0.5)', // Blue
            'rgba(191, 90, 242, 0.5)', // Purple
            'rgba(255, 55, 95, 0.5)',  // Red
            'rgba(255, 214, 10, 0.5)'  // Yellow
        ];
        ctx.strokeStyle = colors[i % colors.length];

        for (let x = 0; x < canvas.width; x += 5) {
            // Normalized X from -1 to 1 for bell curve envelope
            const nx = (x / canvas.width) * 2 - 1; 
            
            // Envelope to keep edges flat
            const envelope = Math.pow(1 - Math.abs(nx), 2); 
            
            // Complex sine wave summation
            const y = centerY + Math.sin(x * 0.01 + time + i) * 100 * envelope * Math.sin(time * 0.5 + i);

            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#111] to-[#050510]"></div>

      <div className="z-10 text-center absolute top-20 w-full">
        <h2 className="text-gray-400 tracking-[0.3em] uppercase text-sm">{t('sensing_era')}</h2>
        <h1 className="text-white text-4xl mt-4 font-light">{t('sensing_title')}</h1>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* Floating UI Elements simulating AI processing */}
      <div className="absolute bottom-24 flex gap-4">
         <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0s' }}></div>
         <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.2s' }}></div>
         <div className="w-2 h-2 rounded-full bg-white animate-bounce" style={{ animationDelay: '0.4s' }}></div>
      </div>

    </section>
  );
};

export default SectionSensing;