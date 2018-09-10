
class Message {
  // this.messages
  // this.socket

  constructor() {
    this.messages = [];

    // Connect to socket server
    this.socket = io();

    // Handle connection error
    this.socket.once('connect_error', () => {
      // Notify main.js via an Event
      window.dispatchEvent(new Event('messages_error'));
    });

    // Listen for all server messages [sent on connects]
    this.socket.on('all_messages', (messages) => {
      this.messages = messages; // globalMessages
      window.dispatchEvent(new Event('messages_ready'));
    });

    // Listen for new message from Server
    this.socket.on('new_message', (message) => {
      this.messages.unshift(message);
      window.dispatchEvent(new CustomEvent('new_message', { detail: message }));
    });
  }

  get all(){
    return this.messages;
  }

  add(data_uri, caption_text) {
    // Create message object
    let message = {
      photo: data_uri,
      caption: caption_text
    }
    // add to local messages
    this.messages.unshift(message);
    // Emit to server
    this.socket.emit('new_message', message);
    // Return formatted message object
    return message;
  }

}
