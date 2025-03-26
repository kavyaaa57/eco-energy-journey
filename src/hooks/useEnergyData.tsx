
import React, { useState, useEffect } from 'react';

export interface EnergyData {
  date: string;
  consumption: number;
  renewablePercentage: number;
  type: 'home' | 'vehicle';
}

export interface EnergyDataSet {
  home: EnergyData[];
  vehicle: EnergyData[];
}

const DEFAULT_ENERGY_DATA: EnergyDataSet = {
  home: [],
  vehicle: []
};

export function useEnergyData() {
  const [energyData, setEnergyData] = useState<EnergyDataSet>(DEFAULT_ENERGY_DATA);
  const [currentType, setCurrentType] = useState<'home' | 'vehicle'>('home');
  const [currentConsumption, setCurrentConsumption] = useState<number>(0);
  const [currentRenewablePercentage, setCurrentRenewablePercentage] = useState<number>(50);

  // Load data from localStorage on initial render
  useEffect(() => {
    const storedData = localStorage.getItem('energyData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setEnergyData(parsedData);
      } catch (error) {
        console.error('Failed to parse stored energy data:', error);
      }
    }
  }, []);

  // Save data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('energyData', JSON.stringify(energyData));
  }, [energyData]);

  const saveCurrentData = () => {
    if (currentConsumption <= 0) return;
    
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
    
    setEnergyData(prevData => {
      // Create a new entry
      const newEntry: EnergyData = {
        date: today,
        consumption: currentConsumption,
        renewablePercentage: currentRenewablePercentage,
        type: currentType
      };
      
      // Update the appropriate array
      return {
        ...prevData,
        [currentType]: [...prevData[currentType], newEntry]
      };
    });
    
    // Reset the form for new entry
    setCurrentConsumption(0);
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear all data?')) {
      setEnergyData(DEFAULT_ENERGY_DATA);
      localStorage.removeItem('energyData');
    }
  };

  return {
    energyData,
    currentType,
    setCurrentType,
    currentConsumption,
    setCurrentConsumption,
    currentRenewablePercentage,
    setCurrentRenewablePercentage,
    saveCurrentData,
    clearAllData
  };
}
