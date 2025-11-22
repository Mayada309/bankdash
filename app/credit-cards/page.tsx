import { AddNewCard } from '@/components/credit-cards/AddNewCard';
import { CardExpenseStatistics } from '@/components/credit-cards/CardExpenseStatistics';
import { CardListTable } from '@/components/credit-cards/CardListTable';
import { CardSettings } from '@/components/credit-cards/CardSettings';
import { MyCard } from '@/components/credit-cards/MyCard';
import { creditCards } from '@/data/creditcards';
export default function CreditCards() {
  return (
    <div className="flex flex-col gap-6">

      <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
          </div>
          <div className="flex items-center max-w-svw gap-2 overflow-x-auto overflow-hidden hide-scrollbar pb-2">
                {creditCards.map((card) => (
                <div key={card.id} className="pl-2 md:pl-4 md:basis-1/2">
                  <MyCard card={card} />
                </div>
                 ))}
          </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card Expense Statistics</h2>
          <CardExpenseStatistics />
        </div>
        <div className="flex flex-col gap-4 md:col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card List</h2>
          <CardListTable />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
        <div className="flex flex-col gap-4 md:col-span-8">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Add New Card</h2>
          <AddNewCard />
        </div>
        <div className="flex flex-col gap-4 md:col-span-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card Setting</h2>
          <CardSettings />
        </div>
      </div>
    </div>
  );
}
