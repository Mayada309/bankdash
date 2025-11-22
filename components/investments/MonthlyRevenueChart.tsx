"use client";

import { monthlyRevenueData } from '@/data/investments_data';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function MonthlyRevenueChart() {
  return (
    <div className="h-[300px] rounded-[25px] bg-white p-6 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={monthlyRevenueData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F3F5" />
          <XAxis 
            dataKey="year" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 13 }}
            dy={10}
            ticks={['2016', '2017', '2018', '2019', '2020', '2021']}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 13 }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip 
             contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 14px rgba(0,0,0,0.05)' }}
          />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#16DBCC" 
            strokeWidth={3} 
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
