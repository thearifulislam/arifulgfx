import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { Notification } from '../types/message';
import { Bell, BellOff, Mail, File, Info } from 'lucide-react';
import toast from 'react-hot-toast';

const NotificationCenter: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const unreadCount = notifications.filter(n => !n.isRead).length;

  useEffect(() => {
    const q = query(collection(db, 'notifications'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const notifData: Notification[] = [];
      snapshot.forEach((doc) => {
        notifData.push({ id: doc.id, ...doc.data() } as Notification);
      });
      setNotifications(notifData);
    });

    return () => unsubscribe();
  }, []);

  const handleMarkAsRead = async (notification: Notification) => {
    try {
      await updateDoc(doc(db, 'notifications', notification.id), {
        isRead: true
      });
    } catch (error) {
      toast.error('Failed to update notification');
      console.error(error);
    }
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'message':
        return <Mail className="w-5 h-5" />;
      case 'file':
        return <File className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-gray-300 hover:text-white transition-colors"
      >
        {unreadCount > 0 ? <Bell className="w-6 h-6" /> : <BellOff className="w-6 h-6" />}
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-gray-800 rounded-xl shadow-xl border border-gray-700 overflow-hidden z-50">
          <div className="p-4 border-b border-gray-700">
            <h3 className="text-lg font-semibold text-white">Notifications</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length > 0 ? (
              <div className="divide-y divide-gray-700">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-4 ${
                      notification.isRead ? 'bg-gray-800' : 'bg-gray-700'
                    } hover:bg-gray-700 transition-colors cursor-pointer`}
                    onClick={() => handleMarkAsRead(notification)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`text-${
                        notification.type === 'message' ? 'blue' : 
                        notification.type === 'file' ? 'green' : 'gray'
                      }-400`}>
                        {getIcon(notification.type)}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-white">
                          {notification.title}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {notification.description}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                      {!notification.isRead && (
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-4 text-center text-gray-400">
                No notifications
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter; 