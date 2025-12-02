import React, { useState, useEffect } from 'react';
import { useLanguage } from '../LanguageContext';

const SectionDesktop: React.FC = () => {
  const { t } = useLanguage();
  const [text, setText] = useState('');
  const fullText = t('desktop_typing');

  useEffect(() => {
    let index = 0;
    setText('');
    const intervalId = setInterval(() => {
      setText((prev) => {
        if (index < fullText.length) {
            const char = fullText.charAt(index);
            index++;
            return prev + char;
        } else {
            index = 0;
            return '';
        }
      });
    }, 50);
    return () => clearInterval(intervalId);
  }, [fullText]);

  return (
    <div className="w-full h-full bg-[#000080] flex items-center justify-center font-['VT323',_monospace] relative overflow-hidden">
      
      {/* Scanline Effect */}
      <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))]" style={{ backgroundSize: "100% 2px, 3px 100%" }}></div>
      <div className="absolute inset-0 bg-black/20 z-0"></div>

      {/* Floating Terminal Windows */}
      <div className="absolute right-[-10%] md:right-[10%] top-[20%] w-[120%] md:w-[600px] border-2 border-gray-300 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] bg-[#0000AA] rotate-[-5deg] opacity-60 md:opacity-100 scale-75 md:scale-100 transform-gpu">
         <div className="bg-gray-300 text-black px-2 py-1 flex justify-between uppercase font-bold text-lg">
            <span>Terminal.exe</span>
            <div className="flex gap-1">
                <div className="w-4 h-4 bg-gray-400 border border-gray-500 shadow-inner"></div>
                <div className="w-4 h-4 bg-gray-400 border border-gray-500 shadow-inner"></div>
            </div>
        </div>
        <div className="p-4 text-green-400 text-xl leading-relaxed whitespace-pre-wrap h-[300px] overflow-hidden">
            {text}
            <span className="animate-pulse inline-block w-3 h-6 bg-green-400 ml-1 align-middle"></span>
        </div>
      </div>

    </div>
  );
};

export default SectionDesktop;