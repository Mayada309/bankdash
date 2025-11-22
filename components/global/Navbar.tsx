'use client';
import { Search, Settings, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { usePathname } from "next/navigation";

export default function Navbar() {
	const pathname = usePathname();
	const page = pathname.split('/').pop() ? pathname.split('/').pop() : 'Overview';
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100">
      <h1 className="text-2xl font-bold text-[#343C6A] capitalize">{page?.split('-').join(' ')}</h1>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-[#718EBF]" />
            <Input 
                type="text" 
                placeholder="Search for something" 
                className="pl-12 bg-[#F5F7FA] border-none rounded-full w-64 text-[#718EBF] placeholder:text-[#8BA3CB] h-12"
            />
        </div>

        <button className="p-3 bg-[#F5F7FA] rounded-full text-[#718EBF] hover:bg-gray-200 transition-colors">
            <Settings className="h-6 w-6" />
        </button>

        <button className="p-3 bg-[#F5F7FA] rounded-full text-[#FE5C73] hover:bg-gray-200 transition-colors">
            <Bell className="h-6 w-6" />
        </button>

        <Avatar className="h-12 w-12">
            <AvatarImage src="https://github.com/shadcn.png" alt="User" />
            <AvatarFallback>US</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  )
}