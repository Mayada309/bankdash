import { cardList } from '@/data/card_expenses';
import { cn } from '@/lib/utils';
import { CreditCard } from 'lucide-react';

export function CardListTable() {
return (
    <div className="flex flex-col gap-4  ms:max-w-lg md:max-w-2xl  lg:max-w-7xl">
      {cardList.map((card) => (
        <div key={card.id} className="rounded-[25px] bg-white ps-5 py-5 border-0 shadow-none  ">
          <table className="w-full">
            <tbody>
              <tr>
                <td className="py-0 min-w-48 max-w-48">
                  <div className="flex items-center gap-4">
                    <div className={cn("flex h-[55px] w-[55px] items-center justify-center rounded-[15px]", card.bgColor)}>
                      <CreditCard className={`h-6 w-6 ${card.cardColor}`} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[15px] font-semibold text-[#343C6A]">Card Type</span>
                      <span className="text-base text-[#718EBF]">{card.cardType}</span>
                    </div>
                  </div>
                </td>
                <td className="hidden py-0 md:table-cell">
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-semibold text-[#343C6A]">Bank</span>
                    <span className="text-base text-[#718EBF]">{card.bank}</span>
                  </div>
                </td>
                <td className="hidden py-0 lg:table-cell">
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-semibold text-[#343C6A]">Card Number</span>
                    <span className="text-base text-[#718EBF]">{card.cardNumber}</span>
                  </div>
                </td>
                <td className="py-0">
                  <div className="flex flex-col items-start">
                    <span className="text-[15px] font-semibold text-[#343C6A]">Namain Card</span>
                    <span className="text-base text-[#718EBF]">{card.namainCard}</span>
                  </div>
                </td>
                <td className="py-0 text-right pe-5">
                  <button className="text-[15px] font-medium text-[#1814F3] hover:underline">
                    View Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
