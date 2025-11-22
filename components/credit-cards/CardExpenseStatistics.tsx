"use client";

import { cardExpenses } from '@/data/card_expenses';
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts';

export function CardExpenseStatistics() {
  return (
    <div className="rounded-[25px] bg-white p-6">
      <div className="mb-4 flex items-center justify-center">
        <ResponsiveContainer width={180} height={180}>
          <PieChart>
            <Pie
              data={cardExpenses}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              paddingAngle={0}
              strokeWidth={0}
            >
              {cardExpenses.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {cardExpenses.map((expense, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full" style={{ backgroundColor: expense.color }} />
            <span className="text-[15px] text-[#718EBF]">{expense.bank}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
