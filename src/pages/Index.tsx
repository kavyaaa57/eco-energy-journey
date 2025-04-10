
import React, { useState } from 'react';
import Header from '../components/Header';
import EnergySection from '../components/EnergySection';

function Index() {
  const [currentType, setCurrentType] = useState<'home' | 'vehicle'>('home');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/50">
      <Header 
        currentType={currentType}
        onTypeChange={setCurrentType}
      />
      <EnergySection currentType={currentType} />
    </div>
  );
}

export default Index;
