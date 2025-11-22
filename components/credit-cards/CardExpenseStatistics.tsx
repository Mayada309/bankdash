"use client";

import { cardExpenses } from '@/data/card_expenses';
import { Pie, PieChart, ResponsiveContainer } from 'recharts';

export function CardExpenseStatistics() {
  return (
    <div className="rounded-2xl   ms:max-w-lg md:max-w-2xl  lg:max-w-7xl bg-white p-6 border-0 shadow-none">
      <div className="mb-6 flex items-center justify-center">
        <ResponsiveContainer width="100%" height={220}>
          <PieChart>
            {cardExpenses.map((entry, index) => (
              <Pie
                key={`pie-${index}`}
                data={[entry]}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={entry.outerRadius}
                fill={entry.color}
                dataKey="value"
                startAngle={cardExpenses.slice(0, index).reduce((sum, e) => sum + (e.value / cardExpenses.reduce((s, c) => s + c.value, 0)) * 360, 0)}
                endAngle={cardExpenses.slice(0, index + 1).reduce((sum, e) => sum + (e.value / cardExpenses.reduce((s, c) => s + c.value, 0)) * 360, 0)}
                paddingAngle={0}
                strokeWidth={0}
                cornerRadius={0}
              />
            ))}
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-x-8 gap-y-3">
        {cardExpenses.map((expense, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="h-[10px] w-[10px] rounded-full" style={{ backgroundColor: expense.color }} />
            <span className="text-[15px] font-normal text-[#718EBF]">{expense.bank}</span>
          </div>
        ))}
      </div>
    </div>
  );
}