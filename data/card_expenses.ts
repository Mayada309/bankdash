export interface CardExpense {
  bank: string;
  value: number;
  color: string;
}

export const cardExpenses: CardExpense[] = [
  { bank: 'DBL Bank', value: 30, color: '#1814F3' },
  { bank: 'BRC Bank', value: 25, color: '#FF82AC' },
  { bank: 'ABM Bank', value: 20, color: '#16DBCC' },
  { bank: 'MCP Bank', value: 25, color: '#FFBB38' },
];

export interface CardListItem {
  id: number;
  cardType: string;
  bank: string;
  cardNumber: string;
  namainCard: string;
  icon: string;
  bgColor: string;
  cardColor: string;
}

export const cardList: CardListItem[] = [
  {
    id: 1,
    cardType: 'Secondary',
    bank: 'DBL Bank',
    cardNumber: '**** **** 5600',
    namainCard: 'William',
    icon: 'card-blue',
    bgColor: 'bg-[#E7EDFF]',
    cardColor: 'text-[#396AFF]'
  },
  {
    id: 2,
    cardType: 'Secondary',
    bank: 'BRC Bank',
    cardNumber: '**** **** 4300',
    namainCard: 'Michel',
    icon: 'card-pink',
    bgColor: 'bg-[#FFE2E5]',
    cardColor: 'text-[#FF82AC]'
  },
  {
    id: 3,
    cardType: 'Secondary',
    bank: 'ABM Bank',
    cardNumber: '**** **** 7560',
    namainCard: 'Edward',
    icon: 'card-yellow',
    bgColor: 'bg-[#FFF5D9]',
    cardColor: 'text-[#FFBB38]'
  },
];
