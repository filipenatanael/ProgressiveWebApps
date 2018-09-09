

class Message {
  // this.messages

  constructor() {
    this.messages = [];
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
    console.log('Sending to server.');
    // Return formatted message object
    return message;
  }

}
