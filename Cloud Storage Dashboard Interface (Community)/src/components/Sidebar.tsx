import { Cloud, HardDrive, Folder, Star, Clock, Trash2, Settings, Users, Crown } from 'lucide-react';
import logo from 'figma:asset/ee46f60a0e5312f98c9ebfeab74548a0c5a906ba.png';

export function Sidebar() {
  const storageServices = [
    { name: 'Dropbox', icon: '📦', color: 'bg-blue-500', storage: '15 GB', used: '12.5 GB' },
    { name: 'Google Drive', icon: '🔷', color: 'bg-yellow-500', storage: '100 GB', used: '78.3 GB' },
    { name: 'OneDrive', icon: '☁️', color: 'bg-blue-600', storage: '50 GB', used: '23.1 GB' },
  ];

  const navigation = [
    { name: 'All Files', icon: HardDrive, active: true },
    { name: 'Folders', icon: Folder, active: false },
    { name: 'Starred', icon: Star, active: false },
    { name: 'Recent', icon: Clock, active: false },
    { name: 'Trash', icon: Trash2, active: false },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200/50 flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 flex items-center justify-center">
            <img src={logo} alt="Hack Cloud Logo" className="w-10 h-10" />
          </div>
          <span className="text-gray-800">Hack Cloud</span>
        </div>
      </div>

      {/* Storage Services */}
      <div className="px-4 py-6 border-b border-gray-100">
        <p className="px-2 mb-3 text-gray-500 text-xs uppercase tracking-wide">Storage Services</p>
        <div className="space-y-2">
          {storageServices.map((service) => (
            <div
              key={service.name}
              className="p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">{service.icon}</span>
                <div className="flex-1">
                  <p className="text-gray-800 text-sm">{service.name}</p>
                  <p className="text-xs text-gray-500">{service.used} / {service.storage}</p>
                </div>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full ${service.color}`}
                  style={{ width: `${(parseFloat(service.used) / parseFloat(service.storage)) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="px-4 py-6 flex-1">
        <p className="px-2 mb-3 text-gray-500 text-xs uppercase tracking-wide">Navigation</p>
        <div className="space-y-1">
          {navigation.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                item.active
                  ? 'bg-gradient-to-r from-blue-50 to-blue-100/50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="text-sm">{item.name}</span>
            </button>
          ))}
        </div>

        <div className="mt-6 space-y-1">
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
            <Users className="w-5 h-5" />
            <span className="text-sm">Shared</span>
          </button>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-600 hover:bg-gray-50 transition-colors">
            <Settings className="w-5 h-5" />
            <span className="text-sm">Settings</span>
          </button>
        </div>
      </div>

      {/* Upgrade Prompt */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-[25px] p-5 text-white shadow-lg shadow-blue-500/20">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
            <Crown className="w-6 h-6" />
          </div>
          <p className="mb-1">Upgrade to Pro</p>
          <p className="text-xs text-blue-100 mb-4">Get 1TB storage & premium features</p>
          <button className="w-full bg-white text-blue-600 py-2.5 rounded-xl text-sm hover:bg-blue-50 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
}