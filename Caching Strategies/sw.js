// Cache name
const CACHE_NAME = 'pwa-cache-2.5';
// Assets to cache
const STATIC_ASSETS = ['./', './main.js', 'index.html', '../resources/style.css', '../resources/logo.png', '../resources/noconnection.png'];

self.addEventListener('fetch', (e) => {

  // Cache and Network Race
  //
  let  firstResponse = new Promise(function(resolve, reject) {

    // Track rejections
    let firstRejectionReceived = false;
    let rejectOnce = () => {
      if (firstRejectionReceived) {
        // Change the images
        if (e.request.url.match('logo.png')) {
          resolve(caches.match('../resources/noconnection.png'));
        } else {
          reject('No response received.');
        }

      } else {
        firstRejectionReceived = true;
      }
    }

    // Try Network
    fetch(e.request).then((res) => {
      //Check res is ok
      res.ok ? resolve(res) : rejectOnce();
    }).catch(rejectOnce);

    // Try Cache
    caches.match(e.request).then((res) => {
      // Check cache found
      res ? resolve(res) : rejectOnce();
    }).catch(rejectOnce);
  });

  e.respondWith(firstResponse);

  // 4. Update cache when network is connected
  //
  // e.respondWith(
  //   caches.open(CACHE_NAME).then((cache) => {
  //     // Return from the cache
  //     return cache.match(e.request).then((res) => {
  //       // Updated
  //       let updatedRes = fetch(e.request).then((newRes) => {
  //         cache.put(e.request, newRes.clone());
  //         return newRes;
  //       });
  //       return res || updatedRes;
  //     });
  //   });
  // );

  // Service Worker fetch handler
  //
  //   console.log(e.request);
  //   // 3. Network with cache fallback
  //   e.respondWith(
  //     fetch(e.request).then((res) => {
  //       caches.open(CACHE_NAME).then(cache => cache.put(e.request, res));
  //       return res.clone();
  //     }).catch(error => caches.match(e.request))
  //   );

  // 2. Cache with Network Fallback
  //
  // e.respondWith(
  //   caches.match(e.request).then(res) => {
  //     if(res) return res;
  //     // Fallback
  //     return fetch(e.request).then((newRes) => {
  //       caches.open(CACHE_NAME).then(cache => put.request, newRes);
  //       return newRes.clone();
  //     })
  //   }
  // );

  /* 1. Cache only. Static assets - App Shell
  e.respondWith(caches.match(e.request)); */
});

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
