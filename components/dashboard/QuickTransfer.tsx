"use client";

import { quickTransferUsers } from '@/data/quick_transfer';
import { cn } from '@/lib/utils';
import { ChevronRight, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';

export function QuickTransfer() {
  const [amount, setAmount] = useState('');

  return (
    <div className="flex h-[276px] flex-col justify-between rounded-[25px] bg-white p-4 hide-scrollbar">
      <div className="flex items-center gap-4 overflow-x-auto hide-scrollbar pb-4">
        {quickTransferUsers.map((user, index) => (
          <div key={user.id} className="flex min-w-[80px] flex-col items-center justify-between text-center h-full">
            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className={cn("text-base font-normal", index === 0 ? "font-bold text-[#232323]" : "text-[#232323]")}>
                {user.name}
              </span>
              <span className={cn("text-[15px]", index === 0 ? "font-bold text-[#718EBF]" : "text-[#718EBF]")}>
                {user.role}
              </span>
            </div>
          </div>
        ))}
        <Button size={'icon'} className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50">
          <ChevronRight className="h-6 w-6 text-[#718EBF]" />
        </Button>
      </div>

      <div className="flex flex-col items-start justify-between gap-4">
        <span className="text-xs text-[#718EBF]">Write Amount</span>
        <div className="relative w-full flex max-w-[265px] flex-1 items-center rounded-full bg-[#EDF1F7]">
          <Input
            type="text"
            value={amount}
            placeholder='525.50'
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-full px-3 py-2 text-[#718EBF] border-none"
          />
          <Button  className="absolute right-0 flex h-full items-center gap-2 rounded-full bg-[#1814F3] px-6 text-white transition-colors hover:bg-[#1814F3]/90">
            <span className="text-base font-medium">Send</span>
            <Send className="h-5 w-5 -rotate-45" />
          </Button>
        </div>
      </div>
    </div>
  );
}
