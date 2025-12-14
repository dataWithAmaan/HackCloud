import { HardDrive, TrendingUp, Users, Cloud } from 'lucide-react';

export function StorageCards() {
  const cards = [
    {
      title: 'Total Storage',
      value: '165 GB',
      total: '200 GB',
      icon: HardDrive,
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-600',
      percentage: 82.5,
    },
    {
      title: 'Used This Month',
      value: '24.8 GB',
      subtitle: '+12% from last month',
      icon: TrendingUp,
      color: 'from-green-400 to-green-600',
      bgColor: 'bg-green-50',
      textColor: 'text-green-600',
    },
    {
      title: 'Shared Files',
      value: '156',
      subtitle: 'With 23 people',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-600',
    },
    {
      title: 'Cloud Sync',
      value: 'Active',
      subtitle: 'All services connected',
      icon: Cloud,
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-cyan-50',
      textColor: 'text-cyan-600',
    },
  ];

  return (
    <div className="mb-8">
      <div className="mb-6">
        <h1 className="text-gray-800 mb-1">Dashboard</h1>
        <p className="text-gray-500">Welcome back! Here's your storage overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-white rounded-[25px] p-6 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-black/10 transition-all cursor-pointer border border-gray-100/50"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 ${card.bgColor} rounded-xl`}>
                <card.icon className={`w-6 h-6 ${card.textColor}`} />
              </div>
            </div>
            
            <p className="text-gray-500 text-sm mb-2">{card.title}</p>
            <p className="text-gray-800 mb-1">{card.value}</p>
            
            {card.percentage && (
              <div className="mt-3">
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${card.color}`}
                    style={{ width: `${card.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-2">{card.total}</p>
              </div>
            )}
            
            {card.subtitle && (
              <p className="text-xs text-gray-500 mt-1">{card.subtitle}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
