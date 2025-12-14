import { FileText, Image, Music, Video, MoreVertical, Download, Share2, Star } from 'lucide-react';

export function FilesTable() {
  const files = [
    {
      name: 'Q4 Financial Report.pdf',
      type: 'PDF Document',
      icon: FileText,
      color: 'text-red-500',
      bg: 'bg-red-50',
      size: '2.4 MB',
      modified: '2 hours ago',
      starred: true,
    },
    {
      name: 'Marketing Campaign.png',
      type: 'Image',
      icon: Image,
      color: 'text-pink-500',
      bg: 'bg-pink-50',
      size: '5.8 MB',
      modified: '5 hours ago',
      starred: false,
    },
    {
      name: 'Team Meeting Recording.mp4',
      type: 'Video',
      icon: Video,
      color: 'text-purple-500',
      bg: 'bg-purple-50',
      size: '124 MB',
      modified: 'Yesterday',
      starred: true,
    },
    {
      name: 'Presentation Deck.pptx',
      type: 'Presentation',
      icon: FileText,
      color: 'text-orange-500',
      bg: 'bg-orange-50',
      size: '8.2 MB',
      modified: '2 days ago',
      starred: false,
    },
    {
      name: 'Background Music.mp3',
      type: 'Audio',
      icon: Music,
      color: 'text-blue-500',
      bg: 'bg-blue-50',
      size: '4.1 MB',
      modified: '3 days ago',
      starred: false,
    },
    {
      name: 'Project Wireframes.fig',
      type: 'Figma File',
      icon: FileText,
      color: 'text-green-500',
      bg: 'bg-green-50',
      size: '1.9 MB',
      modified: '1 week ago',
      starred: true,
    },
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-gray-800">Recent Files</h2>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Sort by
          </button>
          <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
            Filter
          </button>
        </div>
      </div>

      <div className="bg-white rounded-[25px] shadow-lg shadow-black/5 border border-gray-100/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm text-gray-500">Name</th>
                <th className="text-left px-6 py-4 text-sm text-gray-500">Type</th>
                <th className="text-left px-6 py-4 text-sm text-gray-500">Size</th>
                <th className="text-left px-6 py-4 text-sm text-gray-500">Modified</th>
                <th className="text-left px-6 py-4 text-sm text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody>
              {files.map((file, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 ${file.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <file.icon className={`w-5 h-5 ${file.color}`} />
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-800">{file.name}</span>
                        {file.starred && (
                          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{file.type}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-600">{file.size}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">{file.modified}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <Share2 className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
