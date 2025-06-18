import React, { useState, useEffect } from 'react';
import { 
  collection, 
  query, 
  orderBy, 
  onSnapshot, 
  doc, 
  updateDoc, 
  deleteDoc, 
  where,
  serverTimestamp,
  writeBatch,
  getDocs
} from 'firebase/firestore';
import { db } from '../config/firebase';
import { Message } from '../types/message';
import toast from 'react-hot-toast';
import { 
  Trash2, 
  Mail,
  Search,
  CheckCircle,
  Circle,
  X,
  MoreVertical,
  RefreshCw,
  Trash,
  Phone,
  Clock
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface MessagesProps {
  activeFilter: string;
}

const Messages: React.FC<MessagesProps> = ({ activeFilter }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const [selectedMessages, setSelectedMessages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch messages based on active filter
  useEffect(() => {
    if (!user) {
      console.log('No user found, skipping message fetch');
      return;
    }

    const isTrash = activeFilter === 'trash';
    console.log('Fetching messages for user:', user.uid, 'filter:', activeFilter, 'isTrash:', isTrash);

    // First, let's check all messages without filters
    const allMessagesQuery = query(
      collection(db, 'messages'),
      orderBy('createdAt', 'desc')
    );

    // Then filter for the specific view
    const filteredQuery = query(
      collection(db, 'messages'),
      where('isTrashed', '==', isTrash),
      orderBy('createdAt', 'desc')
    );

    setIsLoading(true);

    // Set up real-time listener for all messages first
    const allMessagesUnsubscribe = onSnapshot(allMessagesQuery, 
      (snapshot) => {
        console.log('All messages in database:', snapshot.size);
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log('Message in database:', {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate()
          });
        });
      },
      (error) => {
        console.error('Error fetching all messages:', error);
      }
    );

    // Set up real-time listener for filtered messages
    const filteredUnsubscribe = onSnapshot(filteredQuery, 
      (snapshot) => {
        const messageData: Message[] = [];
        console.log('Filtered messages count:', snapshot.size);
        
        snapshot.forEach((doc) => {
          const data = doc.data();
          console.log('Filtered message:', {
            id: doc.id,
            ...data,
            createdAt: data.createdAt?.toDate()
          });
          
          messageData.push({
            ...data,
            id: doc.id,
            createdAt: data.createdAt?.toDate() || new Date(),
          } as Message);
        });

        console.log('Setting messages in state:', messageData.length);
        setMessages(messageData);
        setIsLoading(false);
        
        // Clear selected message if it's not in the current view
        if (selectedMessage && selectedMessage.isTrashed !== isTrash) {
          setSelectedMessage(null);
          setShowMobileDetail(false);
        }
      },
      (error) => {
        console.error('Error fetching filtered messages:', error);
        toast.error('Failed to fetch messages');
        setIsLoading(false);
      }
    );

    return () => {
      allMessagesUnsubscribe();
      filteredUnsubscribe();
    };
  }, [activeFilter, user]);

  // Handle moving message to trash
  const handleMoveToTrash = async (messageId: string) => {
    try {
      console.log('Moving message to trash:', messageId);
      const messageRef = doc(db, 'messages', messageId);
      
      // Update the message
      await updateDoc(messageRef, {
        isTrashed: true,
        lastUpdated: serverTimestamp()
      });

      console.log('Message moved to trash successfully');
      toast.success('Message moved to trash');
      
      // Clear selected message if it's the one being moved
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
        setShowMobileDetail(false);
      }
    } catch (error) {
      console.error('Error moving message to trash:', error);
      toast.error('Failed to move message to trash');
    }
  };

  // Handle recovering message from trash
  const handleRecoverMessage = async (messageId: string) => {
    try {
      console.log('Recovering message from trash:', messageId);
      const messageRef = doc(db, 'messages', messageId);
      
      // Update the message
      await updateDoc(messageRef, {
        isTrashed: false,
        lastUpdated: serverTimestamp()
      });

      console.log('Message recovered successfully');
      toast.success('Message recovered from trash');
      
      // Clear selected message if it's the one being recovered
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
        setShowMobileDetail(false);
      }
    } catch (error) {
      console.error('Error recovering message:', error);
      toast.error('Failed to recover message');
    }
  };

  // Handle permanent deletion
  const handleDeletePermanently = async (messageId: string) => {
    try {
      console.log('Deleting message permanently:', messageId);
      const messageRef = doc(db, 'messages', messageId);
      
      // Delete the message
      await deleteDoc(messageRef);

      console.log('Message deleted permanently');
      toast.success('Message deleted permanently');
      
      // Clear selected message if it's the one being deleted
      if (selectedMessage?.id === messageId) {
        setSelectedMessage(null);
        setShowMobileDetail(false);
      }
    } catch (error) {
      console.error('Error deleting message:', error);
      toast.error('Failed to delete message');
    }
  };

  // Handle marking message as read
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

  // Filter messages based on search term
  const filteredMessages = messages.filter(message => {
    if (!searchTerm) return true;
    const search = searchTerm.toLowerCase();
    return (
      message.senderName.toLowerCase().includes(search) ||
      message.senderEmail.toLowerCase().includes(search) ||
      message.subject.toLowerCase().includes(search) ||
      message.message.toLowerCase().includes(search)
    );
  });

  return (
    <div className="h-full flex">
      {/* Message List */}
      <div className={`w-full md:w-96 border-r bg-white ${showMobileDetail ? 'hidden md:block' : 'block'}`}>
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
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
                {activeFilter === 'trash' ? (
                  <>
                    <Trash2 className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium">Trash is empty</p>
                    <p className="text-sm mt-1">Deleted messages will appear here</p>
                  </>
                ) : (
                  <>
                    <Mail className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                    <p className="text-lg font-medium">No messages</p>
                    <p className="text-sm mt-1">Your inbox is empty</p>
                  </>
                )}
              </div>
            </div>
          ) : (
            filteredMessages.map((message) => (
              <div
                key={message.id}
                onClick={() => {
                  setSelectedMessage(message);
                  setShowMobileDetail(true);
                  if (!message.isRead && !message.isTrashed) {
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
                      {!message.isRead && !message.isTrashed && (
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
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      if (message.isTrashed) {
                        handleDeletePermanently(message.id);
                      } else {
                        handleMoveToTrash(message.id);
                      }
                    }}
                    className="p-1 rounded-full hover:bg-gray-100"
                    title={message.isTrashed ? "Delete permanently" : "Move to trash"}
                  >
                    {message.isTrashed ? (
                      <Trash className="w-4 h-4 text-red-500" />
                    ) : (
                      <Trash2 className="w-4 h-4 text-red-500" />
                    )}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Message Detail */}
      <div className={`flex-1 ${showMobileDetail ? 'block' : 'hidden md:block'}`}>
        {selectedMessage ? (
          <div className="h-full flex flex-col bg-gray-50">
            <div className="p-4 border-b flex items-center justify-between bg-white shadow-sm">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{selectedMessage.subject}</h2>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <span>From {selectedMessage.senderName}</span>
                  <span>•</span>
                  <span>{formatDate(selectedMessage.createdAt)}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {selectedMessage.isTrashed ? (
                  <>
                    <button
                      onClick={() => handleRecoverMessage(selectedMessage.id)}
                      className="p-2 rounded-full hover:bg-gray-100 text-green-500"
                      title="Recover message"
                    >
                      <RefreshCw size={20} />
                    </button>
                    <button
                      onClick={() => handleDeletePermanently(selectedMessage.id)}
                      className="p-2 rounded-full hover:bg-gray-100 text-red-500"
                      title="Delete permanently"
                    >
                      <Trash size={20} />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleMarkAsRead(selectedMessage.id, !selectedMessage.isRead)}
                      className={`p-2 rounded-full hover:bg-gray-100 ${
                        selectedMessage.isRead ? 'text-blue-500' : 'text-green-500'
                      }`}
                      title={selectedMessage.isRead ? "Mark as unread" : "Mark as read"}
                    >
                      {selectedMessage.isRead ? <CheckCircle size={20} /> : <Circle size={20} />}
                    </button>
                    <button
                      onClick={() => handleMoveToTrash(selectedMessage.id)}
                      className="p-2 rounded-full hover:bg-gray-100 text-red-500"
                      title="Move to trash"
                    >
                      <Trash2 size={20} />
                    </button>
                  </>
                )}
                <button
                  onClick={() => setShowMobileDetail(false)}
                  className="md:hidden p-2 rounded-full hover:bg-gray-100 text-gray-500"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{selectedMessage.senderEmail}</span>
                      </div>
                      {selectedMessage.phone && (
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          <span>{selectedMessage.phone}</span>
                        </div>
                      )}
                    </div>
                    {selectedMessage.company && (
                      <div className="text-sm text-gray-500">
                        <span className="font-medium">Company:</span> {selectedMessage.company}
                      </div>
                    )}
                    <div className="border-t pt-4">
                      <p className="text-gray-700 whitespace-pre-wrap">{selectedMessage.message}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <Mail className="w-12 h-12 mx-auto mb-4" />
              <p>Select a message to view its details</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;