// Notification Support

// self.addEventListener('message', (e) => {
//   // Respond to all clients
//  self.clients.matchAll().then((clients) => {
//    clients.forEach((client) => {
//      // Only respond to sending client
//      if (e.source.id === client.id) {
//        client.postMessage("[ Private ] Hello from Service Worker.");
//      }
//    });
//  });
// })
