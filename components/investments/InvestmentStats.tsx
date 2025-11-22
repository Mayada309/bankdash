import { investmentStats } from '@/data/investments_data';
import { cn } from '@/lib/utils';
import { DollarSign, PieChart, RefreshCcw } from 'lucide-react';

export function InvestmentStats() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'dollar':
        return <DollarSign className="h-6 w-6 text-[#16DBCC]" />;
      case 'pie-chart':
        return <PieChart className="h-6 w-6 text-[#FF82AC]" />;
      case 'refresh':
        return <RefreshCcw className="h-6 w-6 text-[#396AFF]" />;
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {investmentStats.map((stat, index) => (
        <div key={index} className="flex items-center gap-4 rounded-[25px] bg-white p-6">
          <div className={cn("flex h-[70px] w-[70px] items-center justify-center rounded-full", stat.bgColor)}>
            {getIcon(stat.icon)}
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-base text-[#718EBF]">{stat.title}</span>
            <span className="text-xl font-semibold text-[#232323]">{stat.amount}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
