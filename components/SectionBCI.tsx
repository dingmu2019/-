import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';

const SectionBCI: React.FC = () => {
  const { t } = useLanguage();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let tick = 0;

    // Hexagon configuration
    const hexRadius = 30;
    const hexHeight = Math.sqrt(3) * hexRadius;
    const hexWidth = 2 * hexRadius;
    const hexSide = (3 / 2) * hexRadius;

    // Grid state to simulate "nanotech spread"
    let cells: { x: number, y: number, cx: number, cy: number, active: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initGrid();
    };

    const initGrid = () => {
      cells = [];
      const cols = Math.ceil(canvas.width / hexSide) + 2;
      const rows = Math.ceil(canvas.height / hexHeight) + 2;

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * hexSide;
          const y = j * hexHeight + (i % 2 === 0 ? 0 : hexHeight / 2);
          
          cells.push({
            x: i,
            y: j,
            cx: x,
            cy: y,
            active: Math.random() // Random initial offset for pulsing
          });
        }
      }
    };

    const drawHex = (cx: number, cy: number, radius: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = (Math.PI / 3) * i;
        const x = cx + radius * Math.cos(angle);
        const y = cy + radius * Math.sin(angle);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
    };

    const render = () => {
      // Dark metallic background
      ctx.fillStyle = '#050510'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      tick += 0.02;

      cells.forEach(cell => {
        // Calculate "activation" based on distance from mouse or center
        // Here we simulate a wave passing through
        const distFromCenter = Math.sqrt(Math.pow(cell.cx - canvas.width/2, 2) + Math.pow(cell.cy - canvas.height/2, 2));
        
        // Complex wave pattern
        const wave = Math.sin(distFromCenter * 0.01 - tick * 2) + Math.sin(cell.cx * 0.02 + tick) + Math.sin(cell.cy * 0.03);
        const isActive = wave > 0.5;
        const opacity = isActive ? (wave - 0.5) * 0.8 : 0.05;

        // Draw the mesh lines
        ctx.strokeStyle = `rgba(30, 60, 100, 0.2)`;
        ctx.lineWidth = 1;
        drawHex(cell.cx, cell.cy, hexRadius);
        ctx.stroke();

        // Draw filled "Nanotech" cells
        if (opacity > 0.1) {
            // Gradient fill for that metallic suit look
            const gradient = ctx.createRadialGradient(cell.cx, cell.cy, 0, cell.cx, cell.cy, hexRadius);
            gradient.addColorStop(0, `rgba(100, 200, 255, ${opacity})`);
            gradient.addColorStop(1, `rgba(20, 40, 100, ${opacity * 0.5})`);
            
            ctx.fillStyle = gradient;
            ctx.fill();

            // Inner highlight
            ctx.strokeStyle = `rgba(150, 230, 255, ${opacity * 1.5})`;
            ctx.lineWidth = 2;
            ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    resize();
    render();
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full h-screen bg-[#050510] flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* Overlay Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_90%)] z-10 pointer-events-none"></div>

      <div className="z-20 text-center relative max-w-2xl px-6">
        <h2 className="text-blue-400 tracking-widest uppercase text-xs mb-4 font-bold">{t('bci_era')}</h2>
        
        {/* Glitchy Tech Title */}
        <h1 className="text-white text-5xl font-bold tracking-tight mb-6 drop-shadow-[0_0_15px_rgba(0,200,255,0.5)]">
           {t('bci_title')}
        </h1>
        
        <p className="text-blue-200/70 text-lg font-light tracking-wide">
          {t('bci_sub')}
        </p>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      
      {/* Decorative HUD Elements for Suit UI */}
      <div className="absolute z-10 w-full h-full pointer-events-none">
          <div className="absolute top-1/2 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
          <div className="absolute top-1/2 right-10 w-1 h-32 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-50"></div>
          
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-30"></div>
      </div>

    </section>
  );
};

export default SectionBCI;