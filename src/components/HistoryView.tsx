
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { EnergyData } from '../hooks/useEnergyData';

interface HistoryViewProps {
  data: EnergyData[];
  type: 'home' | 'vehicle';
  onClearData: () => void;
}

const HistoryView = ({ data, type, onClearData }: HistoryViewProps) => {
  const chartData = data.map(item => ({
    date: item.date.split('-').slice(1).join('/'), // Convert YYYY-MM-DD to MM/DD
    Renewable: (item.consumption * item.renewablePercentage) / 100,
    'Non-Renewable': (item.consumption * (100 - item.renewablePercentage)) / 100,
    consumption: item.consumption
  }));

  // Show only the last 7 entries
  const recentData = chartData.slice(-7);

  const title = type === 'home' ? 'Home Energy Consumption' : 'Vehicle Energy Recovery';
  const emptyMessage = type === 'home' 
    ? 'No home energy consumption data recorded yet.' 
    : 'No vehicle energy recovery data recorded yet.';

  return (
    <div className="w-full p-6 glass-card rounded-2xl animate-fade-in animation-delay-400">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">{title} History</h2>
        {data.length > 0 && (
          <button 
            onClick={onClearData}
            className="text-xs text-red-500 hover:text-red-700 transition-colors"
          >
            Clear All Data
          </button>
        )}
      </div>
      
      {data.length === 0 ? (
        <div className="h-52 flex items-center justify-center text-gray-400 text-sm">
          {emptyMessage}
        </div>
      ) : (
        <div className="h-52 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={recentData} margin={{ top: 5, right: 5, bottom: 5, left: 0 }}>
              <XAxis 
                dataKey="date" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10 }}
                width={30}
              />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `${value.toFixed(1)} kWh`, name
                ]}
                contentStyle={{ 
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: 'none',
                  borderRadius: '0.5rem',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
                  padding: '0.5rem 1rem',
                  fontSize: '0.75rem'
                }}
              />
              <Legend wrapperStyle={{ fontSize: '0.75rem', paddingTop: '0.5rem' }}/>
              <Bar 
                dataKey="Renewable" 
                stackId="a" 
                fill="#34d399" 
                radius={[4, 4, 0, 0]} 
                animationDuration={1000}
                animationBegin={300}
              />
              <Bar 
                dataKey="Non-Renewable" 
                stackId="a" 
                fill="#3b82f6" 
                radius={[4, 4, 0, 0]} 
                animationDuration={1000}
                animationBegin={600}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default HistoryView;
