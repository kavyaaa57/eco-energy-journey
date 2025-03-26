
import React from 'react';
import { Lightbulb, Zap } from 'lucide-react';

interface HeaderProps {
  currentType: 'home' | 'vehicle';
  onTypeChange: (type: 'home' | 'vehicle') => void;
}

const Header = ({ currentType, onTypeChange }: HeaderProps) => {
  return (
    <header className="w-full py-6 px-4 flex flex-col items-center justify-center animate-fade-in">
      <div className="mb-4">
        <h1 className="text-2xl md:text-3xl font-medium text-center tracking-tight">
          Clean Energy Tracker
        </h1>
        <p className="text-sm text-muted-foreground text-center mt-1">
          Monitor and optimize your energy consumption
        </p>
      </div>
      
      <div className="flex gap-2 p-1 bg-gray-100 rounded-full mt-4">
        <button
          onClick={() => onTypeChange('home')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentType === 'home' 
              ? 'bg-white text-energy-home shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Lightbulb size={18} className="shrink-0" />
          <span className="font-medium">Home</span>
        </button>
        
        <button
          onClick={() => onTypeChange('vehicle')}
          className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
            currentType === 'vehicle' 
              ? 'bg-white text-energy-vehicle shadow-sm' 
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Zap size={18} className="shrink-0" />
          <span className="font-medium">Vehicle</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
