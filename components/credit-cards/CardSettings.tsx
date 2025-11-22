import { Apple, CreditCard, Lock, Smartphone } from 'lucide-react';

export function CardSettings() {
  const settings = [
    {
      id: 1,
      icon: <CreditCard className="h-6 w-6 text-[#FFBB38]" />,
      title: 'Block Card',
      description: 'Instantly block your card',
      bgColor: 'bg-[#FFF5D9]',
    },
    {
      id: 2,
      icon: <Lock className="h-6 w-6 text-[#396AFF]" />,
      title: 'Change Pin Code',
      description: 'Choose another pin code',
      bgColor: 'bg-[#E7EDFF]',
    },
    {
      id: 3,
      icon: <Smartphone className="h-6 w-6 text-[#FF82AC]" />,
      title: 'Add to Google Pay',
      description: 'Withdraw without any card',
      bgColor: 'bg-[#FFE2E5]',
    },
    {
      id: 4,
      icon: <Apple className="h-6 w-6 text-[#16DBCC]" />,
      title: 'Add to Apple Pay',
      description: 'Withdraw without any card',
      bgColor: 'bg-[#DCFAF8]',
    },
    {
      id: 5,
      icon: <Apple className="h-6 w-6 text-[#16DBCC]" />,
      title: 'Add to Apple Store',
      description: 'Withdraw without any card',
      bgColor: 'bg-[#DCFAF8]',
    },
  ];

  return (
    <div className="rounded-[25px] bg-white p-4 border-0 shadow-none  ms:max-w-lg md:max-w-2xl  lg:max-w-7xl ">
      <div className="space-y-2">
        {settings.map((setting) => (
          <div key={setting.id} className="flex items-center gap-4 rounded-xl p-2 hover:bg-gray-50">
            <div className={`flex h-[50px] w-[50px] items-center justify-center rounded-xl ${setting.bgColor}`}>
              {setting.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-base font-medium text-[#232323]">{setting.title}</span>
              <span className="text-[15px] text-[#718EBF]">{setting.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
