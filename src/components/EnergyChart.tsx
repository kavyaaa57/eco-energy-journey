
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

interface EnergyChartProps {
  renewablePercentage: number;
  type: 'home' | 'vehicle';
}

const EnergyChart = ({ renewablePercentage, type }: EnergyChartProps) => {
  const nonRenewablePercentage = 100 - renewablePercentage;
  
  const data = [
    { name: 'Renewable', value: renewablePercentage, color: '#34d399' },
    { name: 'Non-Renewable', value: nonRenewablePercentage, color: '#3b82f6' }
  ];
  
  const iconStyle = type === 'home' ? 'text-energy-home' : 'text-energy-vehicle';
  
  return (
    <div className="w-full p-6 glass-card rounded-2xl animate-fade-in animation-delay-200">
      <h2 className="text-lg font-medium mb-4">Energy Distribution</h2>
      
      <div className="h-52 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
              animationDuration={1000}
              animationBegin={300}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={entry.color} 
                  stroke="none"
                />
              ))}
            </Pie>
            <Tooltip 
              formatter={(value: number) => [`${value}%`, '']}
              contentStyle={{ 
                background: 'rgba(255, 255, 255, 0.95)',
                border: 'none',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                padding: '0.5rem 1rem'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      
      <div className="flex justify-center gap-6 mt-2">
        {data.map((entry, index) => (
          <div key={index} className="flex items-center gap-2">
            <div 
              className="w-3 h-3 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-sm font-medium">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnergyChart;
