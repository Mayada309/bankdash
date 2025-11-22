"use client";

import { balanceHistoryData } from '@/data/balance_history';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function BalanceHistory() {
  return (
    <div className="h-[276px] rounded-[25px] bg-white p-6 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={balanceHistoryData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#2D60FF" stopOpacity={0.25}/>
              <stop offset="95%" stopColor="#2D60FF" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#DFEAF2" />
          <XAxis 
            dataKey="month" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 13 }}
            dy={10}
          />
          <YAxis 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#718EBF', fontSize: 13 }}
          />
          <Tooltip />
          <Area 
            type="monotone" 
            dataKey="balance" 
            stroke="#1814F3" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorBalance)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
