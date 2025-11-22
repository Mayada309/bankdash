import { LucideIcon } from 'lucide-react';

export type SidebarItem = {
	title: string;
	icon: LucideIcon;
	href: string;
	disabled: boolean;
};