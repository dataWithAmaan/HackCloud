import { FileText, Image, Music, Video, Archive, File } from 'lucide-react';

export function QuickAccess() {
  const items = [
    { name: 'Documents', icon: FileText, count: 245, color: 'from-blue-400 to-blue-600', bg: 'bg-blue-50' },
    { name: 'Images', icon: Image, count: 892, color: 'from-pink-400 to-pink-600', bg: 'bg-pink-50' },
    { name: 'Music', icon: Music, count: 156, color: 'from-purple-400 to-purple-600', bg: 'bg-purple-50' },
    { name: 'Videos', icon: Video, count: 64, color: 'from-red-400 to-red-600', bg: 'bg-red-50' },
    { name: 'Archives', icon: Archive, count: 28, color: 'from-yellow-400 to-yellow-600', bg: 'bg-yellow-50' },
    { name: 'Other', icon: File, count: 132, color: 'from-gray-400 to-gray-600', bg: 'bg-gray-50' },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-800">Quick Access</h2>
        <button className="text-sm text-blue-600 hover:text-blue-700">View all</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {items.map((item) => (
          <div
            key={item.name}
            className="bg-white rounded-xl p-5 shadow-md shadow-black/5 hover:shadow-lg hover:shadow-black/10 transition-all cursor-pointer border border-gray-100/50 group"
          >
            <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
              <item.icon className={`w-6 h-6 bg-gradient-to-br ${item.color} bg-clip-text text-transparent`} style={{ WebkitTextFillColor: 'transparent' }} />
            </div>
            <p className="text-sm text-gray-800 mb-1">{item.name}</p>
            <p className="text-xs text-gray-500">{item.count} files</p>
          </div>
        ))}
      </div>
    </div>
  );
}
