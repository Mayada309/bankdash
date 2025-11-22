import { InvestmentStats } from '@/components/investments/InvestmentStats';
import { MonthlyRevenueChart } from '@/components/investments/MonthlyRevenueChart';
import { MyInvestments } from '@/components/investments/MyInvestments';
import { TrendingStocks } from '@/components/investments/TrendingStocks';
import { YearlyInvestmentChart } from '@/components/investments/YearlyInvestmentChart';

export default function Investments() {
  return (
    <div className="flex flex-col gap-6">
      {/* Top Row: Stats */}
      <InvestmentStats />

      {/* Middle Row: Charts */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Yearly Total Investment</h2>
          <YearlyInvestmentChart />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Monthly Revenue</h2>
          <MonthlyRevenueChart />
        </div>
      </div>

      {/* Bottom Row: Lists */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">
        <div className="flex flex-col gap-4 xl:col-span-7">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">My Investment</h2>
          <MyInvestments />
        </div>
        <div className="flex flex-col gap-4 xl:col-span-5">
          <h2 className="text-[22px] font-semibold text-[#343C6A]">Trending Stock</h2>
          <TrendingStocks />
        </div>
      </div>
    </div>
  );
}