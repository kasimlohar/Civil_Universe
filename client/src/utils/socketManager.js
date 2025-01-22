import io from 'socket.io-client';

class SocketManager {
  constructor() {
    this.socket = null;
    this.listeners = new Map();
  }

  connect(token) {
    this.socket = io(process.env.REACT_APP_SOCKET_URL, {
      auth: { token }
    });

    this.socket.on('connect', () => {
      console.log('Socket connected');
      this.listeners.forEach((handler, event) => {
        this.socket.on(event, handler);
      });
    });

    return this.socket;
  }

  subscribe(event, handler) {
    this.listeners.set(event, handler);
    if (this.socket) {
      this.socket.on(event, handler);
    }
  }

  unsubscribe(event) {
    this.listeners.delete(event);
    if (this.socket) {
      this.socket.off(event);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
    }
  }
}

export default new SocketManager();
