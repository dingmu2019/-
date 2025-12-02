import React from 'react';
import SectionMechanical from './components/SectionMechanical';
import SectionDesktop from './components/SectionDesktop';
import SectionTouch from './components/SectionTouch';
import SectionSensing from './components/SectionSensing';
import SectionBCI from './components/SectionBCI';
import SectionFuture from './components/SectionFuture';

const App: React.FC = () => {
  return (
    <main className="w-full bg-black">
      {/* 
        Each section is 100vh. 
        We use a simple vertical stacking layout.
      */}
      
      {/* 1. Mechanical Era */}
      <SectionMechanical />

      {/* 2. Desktop Era */}
      <SectionDesktop />

      {/* 3. Touch Era */}
      <SectionTouch />

      {/* 4. Sensing Era */}
      <SectionSensing />

      {/* 5. Brain-Computer Interface */}
      <SectionBCI />

      {/* 6. Future / Manifestation */}
      <SectionFuture />
      
    </main>
  );
};

export default App;