export interface ExpenseStat {
  name: string;
  value: number;
  color: string;
}

export const expenseStatistics: ExpenseStat[] = [
  { name: 'Entertainment', value: 30, color: '#343C6A' },
  { name: 'Others', value: 35, color: '#1814F3' },
  { name: 'Investment', value: 20, color: '#FA00FF' },
  { name: 'Bill Expense', value: 15, color: '#FC7900' },
];
