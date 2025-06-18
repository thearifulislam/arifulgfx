import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  FileText,
  Trash2,
  Settings,
  BarChart2,
  TrendingUp,
  Eye,
  MessageSquare
} from 'lucide-react';

const DashboardIndex: React.FC = () => {
  // Mock data - replace with actual data from your backend
  const stats = [
    { title: 'Total Projects', value: '24', icon: FileText, color: 'text-blue-500' },
    { title: 'Active Users', value: '12', icon: Users, color: 'text-green-500' },
    { title: 'Total Views', value: '1,234', icon: Eye, color: 'text-purple-500' },
    { title: 'Messages', value: '8', icon: MessageSquare, color: 'text-orange-500' }
  ];

  const recentActivities = [
    { id: 1, action: 'New project created', time: '2 hours ago', type: 'project' },
    { id: 2, action: 'User registration', time: '3 hours ago', type: 'user' },
    { id: 3, action: 'Project updated', time: '5 hours ago', type: 'project' },
    { id: 4, action: 'New message received', time: '1 day ago', type: 'message' }
  ];

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">Welcome back! Here's what's happening with your projects.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-lg bg-${stat.color.split('-')[1]}-50`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Link to="/dashboard/projects" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-blue-50">
              <FileText className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Manage Projects</h3>
              <p className="text-sm text-gray-600">View and edit your projects</p>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/trash" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-red-50">
              <Trash2 className="w-6 h-6 text-red-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Trash</h3>
              <p className="text-sm text-gray-600">View deleted items</p>
            </div>
          </div>
        </Link>

        <Link to="/dashboard/settings" className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-gray-50">
              <Settings className="w-6 h-6 text-gray-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Settings</h3>
              <p className="text-sm text-gray-600">Manage your preferences</p>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl shadow-sm p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between py-3 border-b last:border-0">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gray-50">
                  {activity.type === 'project' && <FileText className="w-4 h-4 text-blue-500" />}
                  {activity.type === 'user' && <Users className="w-4 h-4 text-green-500" />}
                  {activity.type === 'message' && <MessageSquare className="w-4 h-4 text-orange-500" />}
                </div>
                <span className="text-gray-700">{activity.action}</span>
              </div>
              <span className="text-sm text-gray-500">{activity.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex; 