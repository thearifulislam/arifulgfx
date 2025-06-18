export interface MessageFile {
  name: string;
  url: string;
  type: string;
  size: number;
  uploadedAt: Date;
}

export interface Message {
  id: string;
  subject: string;
  message: string;
  senderName: string;
  senderEmail: string;
  phone?: string;
  company?: string;
  createdAt: Date;
  isRead: boolean;
  lastUpdated?: Date;
}

export interface Notification {
  id: string;
  type: 'message' | 'file' | 'system';
  title: string;
  description: string;
  createdAt: Date;
  isRead: boolean;
  messageId?: string;
} 