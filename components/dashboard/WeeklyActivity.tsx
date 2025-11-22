"use client";

import { weeklyActivityData } from '@/data/weekly_activity';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export function WeeklyActivity() {
  return (
    <div className="h-[322px] rounded-[25px] bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-end gap-8">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#16DBCC]" />
          <span className="text-[15px] text-[#718EBF]">Deposit</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-[#1814F3]" />
          <span className="text-[15px] text-[#718EBF]">Withdraw</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="85%">
        <BarChart
          data={weeklyActivityData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={12}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F3F3F5" />
          <XAxis 
            dataKey="day" 
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
          <Tooltip 
            cursor={{ fill: 'transparent' }}
            contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0px 4px 14px rgba(0,0,0,0.05)' }}
          />
          <Bar dataKey="withdraw" fill="#1814F3" radius={[10, 10, 10, 10]} barSize={15} />
          <Bar dataKey="deposit" fill="#16DBCC" radius={[10, 10, 10, 10]} barSize={15} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
