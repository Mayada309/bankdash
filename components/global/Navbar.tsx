'use client';
import { Search, Settings, Bell, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Sidebar from "./Sidebar";
import { useState } from "react";
import { Button } from '../ui/button';

export default function Navbar() {
	const pathname = usePathname();
	const page = pathname.split('/').pop() ? pathname.split('/').pop() : 'Overview';
	const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex flex-col bg-white border-b border-gray-100">
        <div className="flex items-center justify-between px-4 py-3 ">
          <div className="flex items-center gap-2">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button size={'icon'} variant={'ghost'} className="p-2 rounded-lg hidden sm:flex">
                  <Menu className="h-5 w-5 text-[#343C6A]" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 w-64">
                <Sidebar onClose={() => setOpen(false)} />
              </SheetContent>
            </Sheet>

            <h1 className="text-lg font-bold text-[#343C6A] capitalize flex-1 text-center">
              {page?.split('-').join(' ')}
            </h1>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative hidden">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#718EBF]" />
              <Input 
                type="text" 
                placeholder="Search for something" 
                className="pl-9 bg-[#F5F7FA] border-none rounded-full w-40 text-sm text-[#718EBF] placeholder:text-[#8BA3CB] h-9"
              />
            </div>

            <Button variant="ghost" size={'icon'} className="p-2 rounded-full text-[#718EBF] transition-colors hidden">
              <Settings className="h-5 w-5" />
            </Button>

            <Button variant="ghost" size={'icon'} className="p-2 bg-[#F5F7FA] rounded-full text-[#FE5C73] transition-colors hidden">
              <Bell className="h-5 w-5" />
            </Button>

            <Avatar className="h-9 w-9">
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </nav>
    </>
  )
}