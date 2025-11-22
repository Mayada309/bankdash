"use client";

import { expenseStatistics } from '@/data/statistics';
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';

export function ExpenseStatistics() {
  return (
    <div className="h-[322px] rounded-[25px] bg-white p-4 shadow-sm">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={expenseStatistics}
            cx="50%"
            cy="50%"
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            paddingAngle={4}
            label={({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
              const RADIAN = Math.PI / 180;
              const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
              const x = cx + radius * Math.cos(-midAngle * RADIAN);
              const y = cy + radius * Math.sin(-midAngle * RADIAN);

              return (
                <text x={x} y={y} fill="white" textAnchor="middle" dominantBaseline="central">
                  <tspan x={x} dy="-6" className="text-[14px] font-bold">
                    {`${(percent * 100).toFixed(0)}%`}
                  </tspan>
                  <tspan x={x} dy="18" dx={12} className="text-[10px] font-medium">
                    {expenseStatistics[index].name}
                  </tspan>
                </text>
              );
            }}
            labelLine={false}
          >
            {expenseStatistics.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
