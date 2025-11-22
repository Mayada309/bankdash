export interface CreditCard {
  id: number;
  balance: number;
  cardHolder: string;
  validThru: string;
  cardNumber: string; // Last 4 digits or full masked string
  theme: 'blue' | 'white';
}

export const creditCards: CreditCard[] = [
  {
    id: 1,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    theme: 'blue',
  },
  {
    id: 2,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    theme: 'white',
  },
  {
    id: 3,
    balance: 5756,
    cardHolder: 'Eddy Cusuma',
    validThru: '12/22',
    cardNumber: '3778 **** **** 1234',
    theme: 'blue',
  },
];
