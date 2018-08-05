// Cache name
const CACHE_NAME = 'pwa-cache-2.9';
// Assets to cache
const STATIC_ASSETS = [
  './',
  './main.js',
  'index.html',
  'home.html',
  './style.css',
  './logo.png',
  './icons/icon-72.png',
  './icons/icon-96.png',
  './icons/icon-128.png',
  './icons/icon-144.png',
  './icons/icon-152.png',
  './icons/icon-192.png'
];

// Service Worker Install
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => { return cache.addAll(STATIC_ASSETS) })
  );
});

// Cache Cleanup
self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== CACHE_NAME) {
        return caches.delete(key);
      }
    });
  });
  e.waitUntil(cacheCleaned);
});

self.addEventListener('fetch', (e) => {
  let res = caches.match(e.request).then((res) => {
    // Check cache has response
    if(res) return res;

    // Fallback to network
    return fetch(e.request).then((fetchRes) => {
      caches.open(CACHE_NAME).then(cache => cache.put(e.request, fetchRes));
      // Return clone of fetched response
      return fetchRes.clone();
    });

  })
  e.respondWith(res);
});
