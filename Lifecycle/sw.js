// Service Worker

self.addEventListener('install', (e) => {
  let installPromise = new Promise(function(resolve, reject) {
    // Some async tasks
    setTimeout(resolve, 3000);
  });
  // Tasks for the install event
  e.waitUntil(installPromise);
});

self.addEventListener('activate', (e) => {
  let activatePromise = new Promise(function(resolve, reject) {
    setTimeout(resolve, 3000);
  });

  e.waitUntil(activatePromise);
});
