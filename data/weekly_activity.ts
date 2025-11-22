export interface WeeklyActivityData {
  day: string;
  deposit: number;
  withdraw: number;
}

export const weeklyActivityData: WeeklyActivityData[] = [
  { day: 'Sat', deposit: 480, withdraw: 240 },
  { day: 'Sun', deposit: 350, withdraw: 130 },
  { day: 'Mon', deposit: 320, withdraw: 260 },
  { day: 'Tue', deposit: 480, withdraw: 370 },
  { day: 'Wed', deposit: 150, withdraw: 240 },
  { day: 'Thu', deposit: 390, withdraw: 240 },
  { day: 'Fri', deposit: 400, withdraw: 340 },
];
