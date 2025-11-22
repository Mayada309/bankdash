import { AddNewCard } from '@/components/credit-cards/AddNewCard';
import { CardExpenseStatistics } from '@/components/credit-cards/CardExpenseStatistics';
import { CardListTable } from '@/components/credit-cards/CardListTable';
import { CardSettings } from '@/components/credit-cards/CardSettings';
import { MyCard } from '@/components/credit-cards/MyCard';
import { creditCards } from '@/data/creditcards';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function CreditCards() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Row: My Cards */}
      <div className="flex flex-col gap-4">
        <h2 className="text-[22px] font-semibold text-[#343C6A]">My Cards</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full p-2"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {creditCards.map((card) => (
              <CarouselItem key={card.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <MyCard card={card} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Second Row: Card Expense Statistics and Card List */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="flex flex-col gap-4 lg:col-span-1">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card Expense Statistics</h2>
          <CardExpenseStatistics />
        </div>
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card List</h2>
          <CardListTable />
        </div>
      </div>

      {/* Third Row: Add New Card and Card Setting */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Add New Card</h2>
          <AddNewCard />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Card Setting</h2>
          <CardSettings />
        </div>
      </div>
    </div>
  );
}

