import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const SectionDesktop: React.FC = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  
  // Fetch the translated string
  const fullText = t('desktop_typing');

  useEffect(() => {
    let index = 0;
    setText(''); // Reset text when language changes
    
    const intervalId = setInterval(() => {
      setText((prev) => {
        if (index < fullText.length) {
            const char = fullText.charAt(index);
            index++;
            return prev + char;
        } else {
            // Reset loop for endless effect
            index = 0;
            return '';
        }
      });
    }, 100); // Typing speed

    return () => clearInterval(intervalId);
  }, [fullText]); // Add fullText dependency to restart animation on language switch

  return (
    <section className="w-full h-screen bg-[#0000AA] flex flex-col items-center justify-center font-['VT323',_monospace] text-white p-8 overflow-hidden relative border-t-4 border-gray-400 box-border">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }}></div>

      <div className="w-full max-w-3xl border-2 border-white p-1 min-h-[50vh] shadow-[10px_10px_0px_rgba(0,0,0,0.5)] bg-[#0000AA] z-20">
        <div className="bg-white text-[#0000AA] px-2 py-1 mb-4 flex justify-between uppercase font-bold text-xl">
            <span>{t('desktop_cmd')}</span>
            <span>[X]</span>
        </div>
        
        <div className="text-2xl md:text-3xl leading-relaxed whitespace-pre-wrap">
          {text}
          <span className="animate-pulse inline-block w-3 h-8 bg-white ml-1 align-middle"></span>
        </div>
      </div>

      <div className="mt-8 text-center opacity-70 z-20">
        <p className="text-xl">{t('desktop_era')}</p>
        <p className="text-sm">{t('desktop_sub')}</p>
      </div>
    </section>
  );
};

export default SectionDesktop;