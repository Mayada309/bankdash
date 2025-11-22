import { trendingStocks } from '@/data/investments_data';
import { cn } from '@/lib/utils';

export function TrendingStocks() {
  return (
    <div className="rounded-[25px] bg-white p-6 shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-[#F3F3F5]">
            <th className="pb-3 text-left text-[15px] font-medium text-[#718EBF]">SL No</th>
            <th className="pb-3 text-left text-[15px] font-medium text-[#718EBF]">Name</th>
            <th className="pb-3 text-left text-[15px] font-medium text-[#718EBF]">Price</th>
            <th className="pb-3 text-left text-[15px] font-medium text-[#718EBF]">Return</th>
          </tr>
        </thead>
        <tbody>
          {trendingStocks.map((stock) => (
            <tr key={stock.id} className="group">
              <td className="py-3 text-[15px] font-medium text-[#232323]">{stock.slNo}</td>
              <td className="py-3 text-[15px] font-medium text-[#232323]">{stock.name}</td>
              <td className="py-3 text-[15px] font-medium text-[#232323]">{stock.price}</td>
              <td className={cn("py-3 text-[15px] font-medium", stock.return.startsWith('+') ? "text-[#16DBCC]" : "text-[#FF4B4A]")}>
                {stock.return}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
