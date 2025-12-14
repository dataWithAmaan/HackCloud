import { FileText, X } from 'lucide-react';

export function UploadProgress() {
  const uploads = [
    { name: 'Design Assets.zip', progress: 65, size: '45 MB' },
    { name: 'Project Photos.zip', progress: 32, size: '128 MB' },
  ];

  return (
    <div className="p-6 border-b border-gray-100 bg-blue-50/30">
      <p className="text-sm text-gray-700 mb-4">Uploading {uploads.length} files</p>
      
      <div className="space-y-3">
        {uploads.map((upload, index) => (
          <div key={index} className="bg-white rounded-xl p-3 shadow-sm">
            <div className="flex items-start gap-3 mb-2">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="w-4 h-4 text-blue-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-gray-800 truncate mb-1">{upload.name}</p>
                <p className="text-xs text-gray-500">{upload.size}</p>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded transition-colors">
                <X className="w-4 h-4 text-gray-400" />
              </button>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-100 rounded-full h-1.5">
                <div
                  className="h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600"
                  style={{ width: `${upload.progress}%` }}
                />
              </div>
              <span className="text-xs text-gray-500">{upload.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
