export interface QuickTransferUser {
  id: number;
  name: string;
  role: string;
  image: string;
}

export const quickTransferUsers: QuickTransferUser[] = [
  {
    id: 1,
    name: 'Livia Bator',
    role: 'CEO',
    image: '/avatars/livia.png', 
  },
  {
    id: 2,
    name: 'Randy Press',
    role: 'Director',
    image: '/avatars/randy.png',
  },
  {
    id: 3,
    name: 'Workman',
    role: 'Designer',
    image: '/avatars/workman.png',
  },
];
