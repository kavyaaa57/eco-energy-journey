
import React from 'react';
import { Lightbulb, Zap } from 'lucide-react';

interface EnergyTipsProps {
  type: 'home' | 'vehicle';
}

const EnergyTips = ({ type }: EnergyTipsProps) => {
  const homeTips = [
    "Install smart thermostats to optimize heating and cooling",
    "Switch to LED lighting throughout your home",
    "Consider solar panels for renewable energy generation",
    "Unplug devices when not in use to reduce phantom energy",
    "Use Energy Star certified appliances"
  ];

  const vehicleTips = [
    "Maintain proper tire pressure for optimal energy efficiency",
    "Use regenerative braking when possible",
    "Plan routes to minimize energy consumption",
    "Avoid rapid acceleration and hard braking",
    "Consider charging during off-peak hours"
  ];

  const tips = type === 'home' ? homeTips : vehicleTips;
  const Icon = type === 'home' ? Lightbulb : Zap;
  const iconColor = type === 'home' ? 'text-energy-home' : 'text-energy-vehicle';

  return (
    <div className="w-full p-6 glass-card rounded-2xl animate-fade-in animation-delay-300">
      <h2 className="text-lg font-medium mb-4">Energy Saving Tips</h2>
      
      <ul className="space-y-3">
        {tips.map((tip, index) => (
          <li key={index} className="flex gap-3 items-start">
            <Icon size={18} className={`mt-0.5 shrink-0 ${iconColor}`} />
            <span className="text-sm">{tip}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EnergyTips;
