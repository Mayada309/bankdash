import { DollarSign, CreditCard, User } from 'lucide-react';

export interface Transaction {
  id: number;
  title: string;
  date: string;
  amount: number;
  type: 'deposit' | 'withdrawal';
  icon: 'card' | 'paypal' | 'dollar';
}

export const recentTransactions: Transaction[] = [
  {
    id: 1,
    title: 'Deposit from my Card',
    date: '28 January 2021',
    amount: -850,
    type: 'withdrawal',
    icon: 'card',
  },
  {
    id: 2,
    title: 'Deposit Paypal',
    date: '25 January 2021',
    amount: 2500,
    type: 'deposit',
    icon: 'paypal',
  },
  {
    id: 3,
    title: 'Jemi Wilson',
    date: '21 January 2021',
    amount: 5400,
    type: 'deposit',
    icon: 'dollar',
  },
];
