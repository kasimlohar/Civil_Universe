import React, { useState, useEffect, useCallback } from 'react';
import { io } from 'socket.io-client';
import { useNotifications } from '../../context/NotificationContext';
import notificationService from '../../services/notificationService';
import Toast from '../common/Toast';

const NotificationSystem = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [socket, setSocket] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { 
    notifications, 
    unreadCount, 
    addNotification, 
    markAsRead, 
    clearAll 
  } = useNotifications();

  // Socket initialization and notification fetching
  useEffect(() => {
    const initializeNotifications = async () => {
      try {
        // Initialize socket
        const newSocket = io(process.env.REACT_APP_SOCKET_URL, {
          auth: { token: localStorage.getItem('token') }
        });
        setSocket(newSocket);

        // Fetch existing notifications
        const existingNotifications = await notificationService.fetchNotifications();
        existingNotifications.forEach(addNotification);
        
        setLoading(false);
      } catch (err) {
        setError('Failed to initialize notifications');
        setLoading(false);
      }
    };

    initializeNotifications();

    return () => socket?.close();
  }, []);

  // Socket event handlers
  useEffect(() => {
    if (!socket) return;

    const cleanup = notificationService.subscribeToNotifications(socket, (notification) => {
      addNotification(notification);
      showToast(notification);
    });

    return cleanup;
  }, [socket, addNotification]);

  const handleMarkAsRead = async (id) => {
    try {
      await notificationService.markAsRead(id);
      markAsRead(id);
    } catch (error) {
      setError('Failed to mark notification as read');
    }
  };

  const handleClearAll = async () => {
    try {
      await notificationService.clearAllNotifications();
      clearAll();
      setIsOpen(false);
    } catch (error) {
      setError('Failed to clear notifications');
    }
  };

  const showToast = useCallback((notification) => {
    return (
      <Toast
        type={notification.type}
        message={notification.message}
        duration={5000}
        onClose={() => {}}
      />
    );
  }, []);

  if (loading) return <div>Loading notifications...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="relative">
      {/* Notification Bell */}
      <button 
        className="relative p-2 hover:bg-gray-100 rounded-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="sr-only">Notifications</span>
        {/* Bell icon and unread count badge */}
        // ...existing bell icon code...
      </button>

      {/* Notification Panel */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">Notifications</h3>
              {notifications.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear all
                </button>
              )}
            </div>
          </div>

          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-4 text-center text-gray-500">
                No notifications
              </div>
            ) : (
              <div className="divide-y">
                {notifications.map(notification => (
                  <div
                    key={notification.id}
                    className={`p-4 hover:bg-gray-50 ${
                      !notification.read ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex justify-between">
                      <div className="flex-1">
                        <p className="text-sm">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(notification.createdAt).toLocaleString()}
                        </p>
                      </div>
                      {!notification.read && (
                        <button
                          onClick={() => handleMarkAsRead(notification.id)}
                          className="text-xs text-blue-600 hover:text-blue-800"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSystem;
