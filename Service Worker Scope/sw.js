// Service Worker

self.addEventListener('install', () => {
  console.log('Service Worker Activate.');
});

self.addEventListener('fetch', () => {
  console.log(`Service Worker Fetch: ${e.request.url}`);
});
