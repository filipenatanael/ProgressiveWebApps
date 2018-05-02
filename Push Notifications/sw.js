// Respond to all clients

// self.addEventListener('message', (e) => {
//  self.clients.matchAll().then((clients) => {
//    clients.forEach((client) => {
//      // Only respond to sending client
//      if (e.source.id === client.id) {
//        client.postMessage("[ Private ] Hello from Service Worker.");
//      }
//    });
//  });
// })

// Seed notification on push
self.addEventListener('push', (e) => {
  let options = {
      body: 'A notification from the service worker.',
      icon: 'icon.png',
    }

  let n = self.registration.showNotification('Service worker notification', options);


});
