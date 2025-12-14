import { Search, Bell, Plus } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200/50 px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex-1 max-w-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search files, folders..."
              className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl border border-gray-200/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-300 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 ml-6">
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            Upload
          </button>
          
          <button className="relative p-3 hover:bg-gray-50 rounded-xl transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-blue-500 rounded-full"></span>
          </button>

          <div className="flex items-center gap-3 pl-3 ml-3 border-l border-gray-200">
            <div className="text-right">
              <p className="text-sm text-gray-800">Harsha</p>
              <p className="text-xs text-gray-500">Premium User</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center text-white">
              H
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}