
import React from 'react';

interface EnergyInputProps {
  consumption: number;
  renewablePercentage: number;
  onConsumptionChange: (value: number) => void;
  onRenewablePercentageChange: (value: number) => void;
  onSave: () => void;
  type: 'home' | 'vehicle';
}

const EnergyInput = ({
  consumption,
  renewablePercentage,
  onConsumptionChange,
  onRenewablePercentageChange,
  onSave,
  type
}: EnergyInputProps) => {
  const label = type === 'home' ? 'Energy Usage (kWh)' : 'Energy Recovery (kWh)';

  return (
    <div className="w-full p-6 glass-card rounded-2xl animate-fade-in animation-delay-100">
      <h2 className="text-lg font-medium mb-4">Record Daily {type === 'home' ? 'Consumption' : 'Recovery'}</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="consumption">
            {label}
          </label>
          <input
            id="consumption"
            type="number"
            value={consumption || ''}
            onChange={(e) => onConsumptionChange(Number(e.target.value))}
            min="0"
            step="0.1"
            className="energy-input w-full"
            placeholder="Enter amount"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="renewable">
            <span>Renewable Percentage</span>
            <span className="text-lg ml-2 font-medium">{renewablePercentage}%</span>
          </label>
          <input
            id="renewable"
            type="range"
            min="0"
            max="100"
            value={renewablePercentage}
            onChange={(e) => onRenewablePercentageChange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
        
        <button
          onClick={onSave}
          disabled={consumption <= 0}
          className={`w-full py-3 px-4 rounded-xl font-medium text-white transition-all duration-300 ${
            consumption > 0 
              ? type === 'home' 
                ? 'bg-energy-home hover:bg-energy-home/90 active:scale-[0.98]'
                : 'bg-energy-vehicle hover:bg-energy-vehicle/90 active:scale-[0.98]'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          Save Today's Data
        </button>
      </div>
    </div>
  );
};

export default EnergyInput;
