import { SidebarItem } from '@/types/sidebar';
import {
  User,
  CreditCard,
  HandCoins,
  Wrench,
  Lightbulb,
  Settings,
	Home,
	Receipt,
	ChartColumnIncreasing,
} from "lucide-react";

export const sidebarItems: SidebarItem[] = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/",
		disabled: false,
  },
  {
    title: "Transactions",
    icon: Receipt,
    href: "/transactions",
		disabled: true,
  },
  {
    title: "Accounts",
    icon: User,
    href: "/accounts",
		disabled: true,
  },
  {
    title: "Investments",
    icon: ChartColumnIncreasing,
    href: "/investments",
		disabled: false,
  },
  {
    title: "Credit Cards",
    icon: CreditCard,
    href: "/credit-cards",
		disabled: false,
  },
  {
    title: "Loans",
    icon: HandCoins,
    href: "/loans",	
		disabled: true,
  },
  {
    title: "Services",
    icon: Wrench,
    href: "/services",
		disabled: true,
  },
  {
    title: "My Privileges",
    icon: Lightbulb,
    href: "/privileges",
		disabled: true,
  },
  {
    title: "Setting",
    icon: Settings,
    href: "/settings",
		disabled: true,
  },
];