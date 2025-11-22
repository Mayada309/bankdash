import { CreditCard } from '@/data/creditcards';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { ChipCard } from '../global/icons';

interface MyCardProps {
  card: CreditCard;
}

export function MyCard({ card }: MyCardProps) {
  const isBlue = card.theme === 'blue';

  return (
    <div
      className={cn(
        'relative flex h-[235px] w-[350px] flex-col justify-between rounded-[25px] p-6 text-white shadow-lg transition-all hover:scale-105',
        isBlue
          ? 'bg-gradient-to-r from-[#4C49ED] to-[#0A06F4]'
          : 'border border-gray-100 bg-white text-slate-900'
      )}
    >
      {/* Top Row: Balance and Chip */}
      <div className="flex items-start justify-between">
        <div className="flex flex-col gap-1">
          <span className={cn("text-xs font-normal", isBlue ? "text-white/70" : "text-slate-500")}>Balance</span>
          <span className={cn("text-xl font-semibold", isBlue ? "text-white" : "text-slate-900")}>
            ${card.balance.toLocaleString()}
          </span>
        </div>
        <div>
           	<ChipCard dark={!isBlue} />	
        </div>
      </div>

      {/* Middle Row: Card Holder and Valid Thru */}
      <div className="flex gap-16">
        <div className="flex flex-col gap-1">
          <span className={cn("text-[10px] uppercase", isBlue ? "text-white/70" : "text-slate-500")}>Card Holder</span>
          <span className={cn("text-[15px] font-medium", isBlue ? "text-white" : "text-slate-900")}>{card.cardHolder}</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className={cn("text-[10px] uppercase", isBlue ? "text-white/70" : "text-slate-500")}>Valid Thru</span>
          <span className={cn("text-[15px] font-medium", isBlue ? "text-white" : "text-slate-900")}>{card.validThru}</span>
        </div>
      </div>

      {/* Bottom Row: Card Number and Logo */}
      <div className={cn("flex items-center justify-between pt-4", isBlue ? "border-t border-t-white/15" : "border-t border-t-slate-100")}>
        <span className={cn("text-xl font-semibold tracking-wider", isBlue ? "text-white" : "text-slate-900")}>
          {card.cardNumber}
        </span>
        <div className="flex items-center">
           {/* Mastercard Logo */}
           <svg width="44" height="30" viewBox="0 0 44 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="15" cy="15" r="15" fill={isBlue ? "white" : "#94a3b8"} fillOpacity="0.5"/>
                <circle cx="29" cy="15" r="15" fill={isBlue ? "white" : "#94a3b8"} fillOpacity="0.5"/>
            </svg>
        </div>
      </div>
    </div>
  );
}