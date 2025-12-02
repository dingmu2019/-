import React from 'react';
import SectionMechanical from './components/SectionMechanical';
import SectionDesktop from './components/SectionDesktop';
import SectionTouch from './components/SectionTouch';
import SectionVoice from './components/SectionVoice';
import SectionVision from './components/SectionVision';
import SectionBCI from './components/SectionBCI';
import SectionFuture from './components/SectionFuture';
import { LanguageProvider, useLanguage } from './LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full backdrop-blur-md bg-white/10 border border-white/20 text-white font-mono hover:bg-white/20 transition-all cursor-pointer shadow-lg"
    >
      {language === 'en' ? 'CN / 英文' : 'EN / 中文'}
    </button>
  );
};

const AppContent: React.FC = () => {
  return (
    <main className="w-full bg-black">
      <LanguageSwitcher />
      
      {/* 1. Mechanical Era */}
      <SectionMechanical />

      {/* 2. Desktop Era */}
      <SectionDesktop />

      {/* 3. Touch Era */}
      <SectionTouch />

      {/* 4. Generative Voice Era (Split Part 1) */}
      <SectionVoice />

      {/* 5. Spatial Vision Era (Split Part 2) */}
      <SectionVision />

      {/* 6. Brain-Computer Interface (Renumbered) */}
      <SectionBCI />

      {/* 7. Future / Manifestation (Renumbered) */}
      <SectionFuture />
      
    </main>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
};

export default App;