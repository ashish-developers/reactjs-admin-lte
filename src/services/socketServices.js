import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:10000'; // Replace with your server URL

class WebSocketService {
  constructor() {
    this.socket = io(SOCKET_SERVER_URL);
  }

  connect() {
    this.socket.connect();
  }

  disconnect() {
    this.socket.disconnect();
  }

  sendMessage(message) {
    this.socket.emit('message', message);
  }

  subscribeToMessages(callback) {
    this.socket.on('message', callback);
  }

  unsubscribeFromMessages(callback) {
    this.socket.off('message', callback);
  }
}

const webSocketService = new WebSocketService();

export default webSocketService;
