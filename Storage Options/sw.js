// Service Worker

const MYCACHE = 'pwa-cache-2.0';

self.addEventListener('install', (e) => {

  let cacheReady = caches.open(MYCACHE).then((cache) => {
    console.log('New cache ready!');
    return cache.add('/');
  });

  e.waitUntil(cacheReady);
});
