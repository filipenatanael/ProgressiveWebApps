if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
  }).catch(console.log)

}

// Working with caches
//
// if (window.caches) {
//
//   // Open to chache
//   // caches.open('myChache1')
//
//   // Checking chache key
//   // caches.keys().then(console.log);
//   // caches.keys('myChache1').then(console.log);
//
//   // Return true or false
//   // caches.has('myChache1').then(console.log);
//
//   // To delete caches
//   // caches.delete('myChache1').then(console.log);
//
//
//   // Cache API
//   caches.open('pwa-v2.0').then((cache) => {
//
//     // cache.addAll([
//     //   './index.html',
//     //   '../resources/style.css',
//     //   './main.js'
//     // ]);
//
//     cache.match('./index.html').then((response) => {
//       response.text().then(console.log);
//     });
//
//     //cache.put('./index.html', new Response('My own HTML Now'));
//
//
//   });
//
// }
