import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const SectionBCI: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 40;
    const connectionDistance = 150;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5, // Slow float velocity
          vy: (Math.random() - 0.5) * 0.5
        });
      }
    };

    const updateParticles = () => {
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw Connections (Synapses)
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            // Opacity based on proximity
            const alpha = 1 - dist / connectionDistance;
            ctx.strokeStyle = `rgba(100, 255, 218, ${alpha * 0.6})`; // Teal/Cyan Cyan
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw Particles (Neurons)
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = '#64ffda';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#64ffda';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });
    };

    const loop = () => {
      updateParticles();
      drawParticles();
      animationFrameId = requestAnimationFrame(loop);
    };

    resize();
    window.addEventListener('resize', resize);
    loop();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,40,70,0.5)_0%,rgba(10,25,47,1)_100%)] pointer-events-none"></div>
      
      <div className="z-10 text-center pointer-events-none">
        <h2 className="text-[#64ffda] tracking-widest uppercase text-xs mb-4">Era 5: Neural Integration</h2>
        <h1 className="text-white text-5xl font-bold tracking-tight">Direct Link.</h1>
        <p className="text-slate-400 mt-4 max-w-md mx-auto">Thought becomes action. No intermediary.</p>
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
    </section>
  );
};

export default SectionBCI;