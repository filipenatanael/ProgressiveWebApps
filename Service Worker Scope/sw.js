// Service Worker

// self.addEventListener('install', (e) => {
//   e.waitUntil(new Promise((resolve) => {
//     setTimeout(resolve, 5000);
//   }))
// });
//
// self.addEventListener('activate', () => {
//   console.log('Service Worker Activate');
// });

self.addEventListener('message', (e) => {
  // Respond to all clients
 self.clients.matchAll().then((clients) => {
   clients.forEach((client) => {
     // Only respond to sending client
     if (e.source.id === client.id) {
       client.postMessage("[ Private ] Hello from Service Worker.");
     }
   });
 });
})

self.addEventListener('push', () => {
   console.log('Push Received.');
})
