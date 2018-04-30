// Service Worker

// self.addEventListener('install', (e) => {
//   let installPromise = new Promise(function(resolve, reject) {
//     // Some async tasks
//     setTimeout(resolve, 3000);
//   });
//   // Tasks for the install event
//   e.waitUntil(installPromise);
// });


// self.addEventListener('activate', (e) => {
//   let activatePromise = new Promise(function(resolve, reject) {
//     setTimeout(resolve, 3000);
//   });
//   e.waitUntil(activatePromise);
// });

self.addEventListener('fetch', (e) => {
  // Remember to enable Update on reload
  if(e.request.url.endsWith('style.css')) {
     console.log(`Fetch event for style.css: ${e.request.url}`);
     e.respondWith(fetch('style2.css'));
  }

  if(e.request.url.endsWith('/greet')) {
     let headers = new Headers({ 'Content-Type': 'text/html' });
     let customResponse = new Response('<h1>Hello World!</h1>', {headers: headers});
     e.respondWith(customResponse)
  }

});
