import { myInvestments } from '@/data/investments_data';
import { cn } from '@/lib/utils';
import { Apple, Smartphone, Zap } from 'lucide-react'; // Using icons as placeholders

export function MyInvestments() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'apple':
        return <Apple className="h-6 w-6 text-[#FF82AC]" />;
      case 'google':
        return <Smartphone className="h-6 w-6 text-[#396AFF]" />;
      case 'tesla':
        return <Zap className="h-6 w-6 text-[#FFBB38]" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {myInvestments.map((investment) => (
        <div key={investment.id} className="flex items-center justify-between rounded-[20px] bg-white p-4 shadow-sm transition-colors hover:bg-gray-50">
          <div className="flex items-center gap-4">
            <div className={cn("flex h-[55px] w-[55px] items-center justify-center rounded-[15px]", investment.bgColor)}>
              {getIcon(investment.icon)}
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-[#232323]">{investment.name}</span>
              <span className="text-[15px] text-[#718EBF]">{investment.category}</span>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-base font-semibold text-[#232323]">{investment.value}</span>
            <span className="text-[13px] text-[#718EBF]">Investment Value</span>
          </div>
          <div className="flex flex-col items-end">
            <span className={cn("text-base font-semibold", investment.return.startsWith('+') ? "text-[#16DBCC]" : "text-[#FF4B4A]")}>
              {investment.return}
            </span>
            <span className="text-[13px] text-[#718EBF]">Return Value</span>
          </div>
        </div>
      ))}
    </div>
  );
}
