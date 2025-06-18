// src/components/dashboard/DashboardLayout.tsx

import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  MessageSquare, 
  LogOut,
  Menu,
  X,
  Bell
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { toast } from 'react-hot-toast';

interface MessageCount {
  unread: number;
}

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [messageCount, setMessageCount] = useState<MessageCount>({ unread: 0 });

  useEffect(() => {
    if (!user) return;

    // Subscribe to unread messages
    const messagesQuery = query(
      collection(db, 'messages'),
      where('isRead', '==', false)
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      setMessageCount({ unread: snapshot.size });
    });

    return () => unsubscribe();
  }, [user]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error('Failed to log out');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-lg hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
          <h1 className="text-xl font-bold text-[#4318FF]">Messages</h1>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-lg hover:bg-gray-100 relative">
              <Bell className="w-6 h-6 text-gray-600" />
              {messageCount.unread > 0 && (
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-gray-900 bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-64 bg-white">
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#4318FF] flex items-center justify-center text-white font-medium">
                    {user?.email?.[0].toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
                    <p className="text-xs text-gray-500">Admin</p>
                  </div>
                </div>
              </div>
              <nav className="flex-1 p-4">
                <Link
                  to="/dashboard"
                  className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Messages</span>
                  {messageCount.unread > 0 && (
                    <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {messageCount.unread}
                    </span>
                  )}
                </Link>
              </nav>
              <div className="p-4 border-t">
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-3 w-full px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white border-r">
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-4 border-b">
            <h1 className="text-2xl font-bold text-[#4318FF]">Messages</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Messages</span>
              {messageCount.unread > 0 && (
                <span className="ml-auto inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                  {messageCount.unread}
                </span>
              )}
            </Link>
          </nav>

          {/* User Section */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4318FF] flex items-center justify-center text-white font-medium">
                {user?.email?.[0].toUpperCase()}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">{user?.email}</p>
                <p className="text-xs text-gray-500">Admin</p>
              </div>
              <button
                onClick={handleLogout}
                className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:pl-64">
        <main className="p-8 pt-20 lg:pt-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
