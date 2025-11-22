"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { CreditCards } from './icons';
import { sidebarItems	 } from '@/data/sidebar-links';	

interface SidebarProps {
  onClose?: () => void;
}

function Sidebar({ onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white py-8 px-6 overflow-hidden">
      <div className="mb-10 flex items-center gap-2 px-2">
        <CreditCards />
        <span className="text-2xl font-bold text-[#343C6A]">BankDash.</span>
      </div>

      <nav className="flex flex-col gap-2">
        {sidebarItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.title}
              href={item.disabled ? '#' : item.href}
              onClick={onClose}
              className={cn(
                "flex items-center gap-4 rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                isActive
                  ? "text-blue-600"
                  : "text-gray-400 hover:bg-gray-50 hover:text-gray-600",
								item.disabled && "opacity-50 cursor-not-allowed"
              )}
            >
              <div className={cn("relative", isActive && "before:absolute before:-left-10 before:top-1/2 before:h-12 before:w-1.5 before:-translate-y-1/2 before:rounded-r-md before:bg-blue-600")}>
                 <item.icon
                    className={cn("h-6 w-6", isActive ? "text-blue-600" : "text-gray-300")}
                  />
              </div>
             
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

export default Sidebar;