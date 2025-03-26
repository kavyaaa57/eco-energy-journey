
import React from 'react';
import EnergyInput from './EnergyInput';
import EnergyChart from './EnergyChart';
import EnergyTips from './EnergyTips';
import HistoryView from './HistoryView';
import { useEnergyData } from '../hooks/useEnergyData';

const EnergySection = () => {
  const {
    energyData,
    currentType,
    setCurrentType,
    currentConsumption,
    setCurrentConsumption,
    currentRenewablePercentage,
    setCurrentRenewablePercentage,
    saveCurrentData,
    clearAllData
  } = useEnergyData();

  const handleSave = () => {
    saveCurrentData();
  };

  return (
    <div className="max-w-4xl mx-auto px-4 pb-16">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <EnergyInput
              consumption={currentConsumption}
              renewablePercentage={currentRenewablePercentage}
              onConsumptionChange={setCurrentConsumption}
              onRenewablePercentageChange={setCurrentRenewablePercentage}
              onSave={handleSave}
              type={currentType}
            />
          </div>
          <div className="flex-1">
            <EnergyChart 
              renewablePercentage={currentRenewablePercentage}
              type={currentType}
            />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <EnergyTips type={currentType} />
        </div>
        <div className="flex-1">
          <HistoryView 
            data={energyData[currentType]} 
            type={currentType}
            onClearData={clearAllData}
          />
        </div>
      </div>
    </div>
  );
};

export default EnergySection;
