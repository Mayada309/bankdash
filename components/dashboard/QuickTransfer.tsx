"use client";

import { quickTransferUsers } from '@/data/quick_transfer';
import { cn } from '@/lib/utils';
import { ChevronRight, Send } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export function QuickTransfer() {
  const [amount, setAmount] = useState('525.50');

  return (
    <div className="flex h-[276px] flex-col justify-between rounded-[25px] bg-white p-8 shadow-sm">
      <div className="flex items-center gap-8 overflow-x-auto pb-4">
        {quickTransferUsers.map((user, index) => (
          <div key={user.id} className="flex min-w-[80px] flex-col items-center gap-3 text-center">
            <div className="relative h-[70px] w-[70px] overflow-hidden rounded-full">
              <Image
                src={user.image}
                alt={user.name}
                fill
                className="object-cover"
                onError={(e) => {
                  // @ts-ignore
                  e.target.src = `https://ui-avatars.com/api/?name=${user.name}&background=random`;
                }}
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
        <button className="flex h-[50px] w-[50px] flex-shrink-0 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50">
          <ChevronRight className="h-6 w-6 text-[#718EBF]" />
        </button>
      </div>

      <div className="flex items-center justify-between gap-4">
        <span className="text-[15px] text-[#718EBF]">Write Amount</span>
        <div className="relative flex max-w-[265px] flex-1 items-center rounded-[50px] bg-[#EDF1F7]">
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full bg-transparent px-6 py-3.5 text-[#718EBF] outline-none"
          />
          <button className="absolute right-0 flex h-full items-center gap-2 rounded-[50px] bg-[#1814F3] px-6 text-white transition-colors hover:bg-[#1814F3]/90">
            <span className="text-base font-medium">Send</span>
            <Send className="h-5 w-5 -rotate-45" />
          </button>
        </div>
      </div>
    </div>
  );
}
