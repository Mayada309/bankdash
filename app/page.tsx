import { MyCard } from '@/components/credit-cards/MyCard';
import { BalanceHistory } from '@/components/dashboard/BalanceHistory';
import { ExpenseStatistics } from '@/components/dashboard/ExpenseStatistics';
import { QuickTransfer } from '@/components/dashboard/QuickTransfer';
import { RecentTransactions } from '@/components/dashboard/RecentTransactions';
import { WeeklyActivity } from '@/components/dashboard/WeeklyActivity';
import { creditCards } from '@/data/creditcards';
import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="flex flex-col gap-4  md:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
            <Link href="/credit-cards" className="text-[17px] font-semibold text-[#343C6A] hover:text-[#2D60FF]">
              See All
            </Link>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2">
                {creditCards.map((card) => (
                <div key={card.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <MyCard card={card} />
                </div>
                 ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 md:col-span-1 justify-between">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Recent Transaction</h2>
          <RecentTransactions />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        <div className="flex flex-col gap-4 md:col-span-2">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Weekly Activity</h2>
          <WeeklyActivity />
        </div>

        <div className="flex flex-col gap-4 md:col-span-1">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Expense Statistics</h2>
          <ExpenseStatistics />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
 
        <div className="flex flex-col gap-4 md:col-span-5">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Quick Transfer</h2>
          <QuickTransfer />
        </div>

        <div className="flex flex-col gap-4 md:col-span-7">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Balance History</h2>
          <BalanceHistory />
        </div>
      </div>
    </div>
  );
}
