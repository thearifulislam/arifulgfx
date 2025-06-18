import React, { useState } from 'react';
import { Trash2, RefreshCw, FileText, Image, MessageSquare } from 'lucide-react';

const Trash: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  // Mock data - replace with actual data from your backend
  const deletedItems = [
    { id: '1', name: 'Project Alpha', type: 'project', deletedAt: '2024-03-15', size: '2.5 MB' },
    { id: '2', name: 'Profile Image', type: 'image', deletedAt: '2024-03-14', size: '1.2 MB' },
    { id: '3', name: 'Client Message', type: 'message', deletedAt: '2024-03-13', size: '0.1 MB' },
    { id: '4', name: 'Project Beta', type: 'project', deletedAt: '2024-03-12', size: '3.8 MB' },
  ];

  const handleSelectItem = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) 
        ? prev.filter(itemId => itemId !== id)
        : [...prev, id]
    );
  };

  const handleRestore = () => {
    // Implement restore functionality
    console.log('Restoring items:', selectedItems);
  };

  const handleDeletePermanently = () => {
    // Implement permanent delete functionality
    console.log('Permanently deleting items:', selectedItems);
  };

  const getItemIcon = (type: string) => {
    switch (type) {
      case 'project':
        return <FileText className="w-5 h-5 text-blue-500" />;
      case 'image':
        return <Image className="w-5 h-5 text-green-500" />;
      case 'message':
        return <MessageSquare className="w-5 h-5 text-orange-500" />;
      default:
        return <FileText className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Trash</h1>
        <p className="text-gray-600">Manage your deleted items</p>
      </div>

      {/* Actions */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={handleRestore}
          disabled={selectedItems.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className="w-4 h-4" />
          Restore Selected
        </button>
        <button
          onClick={handleDeletePermanently}
          disabled={selectedItems.length === 0}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Trash2 className="w-4 h-4" />
          Delete Permanently
        </button>
      </div>

      {/* Items Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input
                  type="checkbox"
                  className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedItems(deletedItems.map(item => item.id));
                    } else {
                      setSelectedItems([]);
                    }
                  }}
                />
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Deleted At</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Size</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {deletedItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => handleSelectItem(item.id)}
                    className="rounded border-gray-300 text-blue-500 focus:ring-blue-500"
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    {getItemIcon(item.type)}
                    <span className="text-sm font-medium text-gray-900">{item.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                    {item.type}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.deletedAt}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.size}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trash; 