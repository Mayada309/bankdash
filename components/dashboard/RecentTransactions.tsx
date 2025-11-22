import { recentTransactions } from '@/data/transactions';
import { cn } from '@/lib/utils';
import { CreditCard, DollarSign, Wallet } from 'lucide-react'; 

export function RecentTransactions() {
  const getIcon = (type: string) => {
    switch (type) {
      case 'card':
        return <CreditCard className="h-6 w-6 text-[#FFBB38]" />;
      case 'paypal':
        return <Wallet className="h-6 w-6 text-[#396AFF]" />;
      case 'dollar':
        return <DollarSign className="h-6 w-6 text-[#16DBCC]" />;
      default:
        return <DollarSign className="h-6 w-6" />;
    }
  };

  const getBgColor = (type: string) => {
    switch (type) {
      case 'card':
        return 'bg-[#FFF5D9]';
      case 'paypal':
        return 'bg-[#E7EDFF]';
      case 'dollar':
        return 'bg-[#DCFAF8]';
      default:
        return 'bg-gray-100';
    }
  };

  return (
    <div className="flex flex-col gap-4 rounded-[25px] bg-white p-4">
      {recentTransactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between flex-wrap">
          <div className="flex items-center gap-4">
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-full", getBgColor(transaction.icon))}>
              {getIcon(transaction.icon)}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-[#232323]">{transaction.title}</span>
              <span className="text-xs text-[#718EBF]">{transaction.date}</span>
            </div>
          </div>
          <span className={cn("md:text-base text-sm font-medium", transaction.amount > 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]")}>
            {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount).toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
