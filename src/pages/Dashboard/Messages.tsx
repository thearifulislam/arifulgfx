import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Message } from '../../types/message';
import { 
  Mail, 
  Clock, 
  Phone, 
  Building,
  CheckCircle,
  Circle,
  Search,
  X
} from 'lucide-react';
import { toast } from 'react-hot-toast';

const Messages: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const messagesQuery = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const messageData: Message[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        messageData.push({
          ...data,
          id: doc.id,
          createdAt: data.createdAt?.toDate() || new Date(),
        } as Message);
      });
      setMessages(messageData);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleMarkAsRead = async (messageId: string, isRead: boolean) => {
    try {
      const messageRef = doc(db, 'messages', messageId);
      await updateDoc(messageRef, {
        isRead,
        lastUpdated: serverTimestamp()
      });
      toast.success(isRead ? 'Message marked as read' : 'Message marked as unread');
    } catch (error) {
      console.error('Error updating message status:', error);
      toast.error('Failed to update message status');
    }
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor(diff / (1000 * 60));

    if (hours < 24) {
      if (hours === 0) {
        return `${minutes} minutes ago`;
      }
      return `${hours} hours ago`;
    }

    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(date);
  };

  const filteredMessages = messages.filter(message => 
    message.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.senderName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    message.senderEmail.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-full flex flex-col lg:flex-row gap-6">
      {/* Message List */}
      <div className="flex-1 bg-white rounded-xl shadow-sm">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search messages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-y-auto h-[calc(100vh-180px)]">
          {isLoading ? (
            <div className="h-full flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4318FF]" />
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">No messages</p>
                <p className="text-sm mt-1">Your inbox is empty</p>
              </div>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => {
                  setSelectedMessage(message);
                  if (!message.isRead) {
                    handleMarkAsRead(message.id, true);
                  }
                }}
                className={`p-4 border-b cursor-pointer hover:bg-gray-50 ${
                  selectedMessage?.id === message.id ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-gray-900 truncate">{message.subject}</h3>
                      {!message.isRead && (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 truncate">{message.senderName}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 mt-1">
                      <Clock className="w-3 h-3" />
                      <span>{formatDate(message.createdAt)}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className="hidden lg:block w-[600px] bg-white rounded-xl shadow-sm">
        {selectedMessage ? (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                <button
                  onClick={() => handleMarkAsRead(selectedMessage.id, !selectedMessage.isRead)}
                  className={`p-2 rounded-lg hover:bg-gray-100 ${
                    selectedMessage.isRead ? 'text-blue-500' : 'text-green-500'
                  }`}
                  title={selectedMessage.isRead ? "Mark as unread" : "Mark as read"}
                >
                  {selectedMessage.isRead ? <CheckCircle size={20} /> : <Circle size={20} />}
                </button>
              </div>
              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="font-medium">From:</span>
                  <span>{selectedMessage.senderName} ({selectedMessage.senderEmail})</span>
                </div>
                {selectedMessage.phone && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone className="w-4 h-4" />
                    <span>{selectedMessage.phone}</span>
                  </div>
                )}
                {selectedMessage.company && (
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Building className="w-4 h-4" />
                    <span>{selectedMessage.company}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4" />
                  <span>{formatDate(selectedMessage.createdAt)}</span>
                </div>
              </div>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="prose max-w-none">
                <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-gray-500">
            <div className="text-center">
              <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-lg font-medium">Select a message</p>
              <p className="text-sm mt-1">Choose a message to view its details</p>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Message Detail */}
      {selectedMessage && (
        <div className="lg:hidden fixed inset-0 z-50 bg-white">
          <div className="h-full flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <button
                onClick={() => setSelectedMessage(null)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => handleMarkAsRead(selectedMessage.id, !selectedMessage.isRead)}
                className={`p-2 rounded-lg hover:bg-gray-100 ${
                  selectedMessage.isRead ? 'text-blue-500' : 'text-green-500'
                }`}
              >
                {selectedMessage.isRead ? <CheckCircle size={20} /> : <Circle size={20} />}
              </button>
            </div>
            <div className="flex-1 overflow-y-auto">
              <div className="p-4 border-b">
                <h2 className="text-xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="font-medium">From:</span>
                    <span>{selectedMessage.senderName} ({selectedMessage.senderEmail})</span>
                  </div>
                  {selectedMessage.phone && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{selectedMessage.phone}</span>
                    </div>
                  )}
                  {selectedMessage.company && (
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="w-4 h-4" />
                      <span>{selectedMessage.company}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{formatDate(selectedMessage.createdAt)}</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="prose max-w-none">
                  <p className="whitespace-pre-wrap">{selectedMessage.message}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Messages; 