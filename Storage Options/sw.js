// Service Worker

const MYCACHE = 'pwa-cache-2.5';

self.addEventListener('install', (e) => {

  let cacheReady = caches.open(MYCACHE).then((cache) => {
    console.log('New cache ready!');
    return cache.addAll([
      './',
      './main.js',
      '../Resources/style.css',
      '../Resources/logo.png'
    ]);
  });

  e.waitUntil(cacheReady);
});


self.addEventListener('activate', (e) => {
  let cacheCleaned = caches.keys().then((keys) => {
    keys.forEach((key) => {
      if (key !== MYCACHE) {
        return caches.delete(key);
      }
    });
  });
  e.waitUntil(cacheCleaned);
});


self.addEventListener('fetch', (e) => {
  // Skip for remote fetch
  if (!e.request.url.match(location.origin)) return;

  // Serve local fetch from cache
  let newResponse = caches.open(MYCACHE).then((cache) => {
    return cache.match(e.request).then((response) => {
      // Check request was found in cache, if true return them!
      if (response) {
        console.log(`Serving ${response.url} from cache.`);
        return response;
      }

      return fetch(e.request).then((fetchResponse) => {
        cache.put(e.request, fetchResponse.clone());
        return fetchResponse;
      });

    });
  });

  e.respondWith(newResponse);
});
