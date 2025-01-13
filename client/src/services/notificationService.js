import axiosInstance from '../utils/axiosInstance';

class NotificationService {
  async fetchNotifications() {
    const response = await axiosInstance.get('/notifications');
    return response.data;
  }

  async markAsRead(notificationId) {
    const response = await axiosInstance.put(`/notifications/${notificationId}/read`);
    return response.data;
  }

  async deleteNotification(notificationId) {
    const response = await axiosInstance.delete(`/notifications/${notificationId}`);
    return response.data;
  }

  async clearAllNotifications() {
    const response = await axiosInstance.delete('/notifications/clear-all');
    return response.data;
  }

  subscribeToNotifications(socket, callback) {
    socket.on('notification', callback);
    return () => socket.off('notification', callback);
  }
}

export default new NotificationService();
