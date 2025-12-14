import { Clock, Upload, Download, Share2, Trash2 } from 'lucide-react';
import { UploadProgress } from './UploadProgress';

export function ActivityPanel() {
  const activities = [
    {
      type: 'upload',
      icon: Upload,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      title: 'Uploaded file',
      description: 'Q4 Financial Report.pdf',
      time: '2 minutes ago',
    },
    {
      type: 'share',
      icon: Share2,
      color: 'text-green-500',
      bg: 'bg-green-50',
      title: 'Shared with team',
      description: 'Marketing Campaign folder',
      time: '1 hour ago',
    },
    {
      type: 'download',
      icon: Download,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      title: 'Downloaded',
      description: 'Team Meeting Recording.mp4',
      time: '3 hours ago',
    },
    {
      type: 'upload',
      icon: Upload,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      title: 'Uploaded file',
      description: 'Presentation Deck.pptx',
      time: '5 hours ago',
    },
    {
      type: 'delete',
      icon: Trash2,
      color: 'text-red-500',
      bg: 'bg-red-50',
      title: 'Deleted file',
      description: 'Old Project Files.zip',
      time: 'Yesterday',
    },
  ];

  return (
    <div className="w-80 bg-white border-l border-gray-200/50 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-1">
          <Clock className="w-5 h-5 text-gray-600" />
          <h2 className="text-gray-800">Activity</h2>
        </div>
        <p className="text-sm text-gray-500">Recent uploads and changes</p>
      </div>

      {/* Upload Progress */}
      <UploadProgress />

      {/* Activity Timeline */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={index} className="relative">
              {index !== activities.length - 1 && (
                <div className="absolute left-5 top-12 bottom-0 w-px bg-gray-100" />
              )}
              
              <div className="flex gap-3">
                <div className={`w-10 h-10 ${activity.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <activity.icon className={`w-5 h-5 ${activity.color}`} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-800 mb-1">{activity.title}</p>
                  <p className="text-xs text-gray-600 mb-1 truncate">{activity.description}</p>
                  <p className="text-xs text-gray-400">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Storage Summary */}
      <div className="p-6 border-t border-gray-100">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[20px] p-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-700">Storage Usage</p>
            <p className="text-sm text-gray-800">82.5%</p>
          </div>
          <div className="w-full bg-white/50 rounded-full h-2 mb-2">
            <div className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: '82.5%' }} />
          </div>
          <p className="text-xs text-gray-600">165 GB of 200 GB used</p>
        </div>
      </div>
    </div>
  );
}
