import { cardList } from '@/data/card_expenses';
import { cn } from '@/lib/utils';
import { CreditCard } from 'lucide-react';

export function CardListTable() {
  return (
    <div className="rounded-[25px] bg-white p-6">
      <div className="space-y-4">
        {cardList.map((card) => (
          <div key={card.id} className="flex items-center justify-between rounded-xl p-3 hover:bg-gray-50">
            <div className="flex items-center gap-4">
              <div className={cn("flex h-[50px] w-[50px] items-center justify-center rounded-xl", card.bgColor)}>
                <CreditCard className={`h-6 w-6 ${card.cardColor}`} />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col">
                  <span className="text-sm  font-medium text-gray-900">Card Type</span>
                  <span className="text-xs text-[#718EBF]">{card.cardType}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 ml-8">
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-gray-900">Bank</span>
                  <span className="text-xst text-[#718EBF]">{card.bank}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 ml-8">
                <div className="flex flex-col">
                  <span className="text-sm  font-medium text-gray-900">Card Number</span>
                  <span className="text-xs  text-[#718EBF]">{card.cardNumber}</span>
                </div>
              </div>
              <div className="flex flex-col gap-3 ml-8">
                <div className="flex flex-col">
                  <span className="text-sm  font-medium text-gray-900">Namain Card</span>
                  <span className="text-xs  text-[#718EBF]">{card.namainCard}</span>
                </div>
              </div>
            </div>
            <button className="text-[15px] font-medium text-[#1814F3] hover:underline">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
