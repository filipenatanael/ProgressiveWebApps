/* Service Worker */

/* Cache name */
const CACHE_NAME = 'pwa-cache-2.5';

/* Assets to cache */
const STATIC_ASSETS = ['/', 'index.html', '../Resources/style.css', '/main.js', '../Resources/logo.png'];



/* Service Worker Install */
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_ASSETS))
  );
});

/* Cache Cleanup */
self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== PWA_CACHE) {
        return caches.delete(key);
      }
    });
  });
  e.waitUntil(cacheCleaned);
});
