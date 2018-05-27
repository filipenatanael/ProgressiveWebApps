// if (navigator.serviceWorker) {
//   // Register the Service Worker
//   navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
//   }).catch(console.log)
//
//   navigator.serviceWorker.addEventListener('message', (e) => {
//     console.log(e.data);
//   });
//
// }


if (window.caches) {

  //  Open to chache
  //  caches.open('myChache1')

  // Checking chache key
  // caches.keys().then(console.log);
  // caches.keys('myChache1').then(console.log);

  // Return true or false
  // caches.has('myChache1').then(console.log);

  // To delete caches
  // caches.delete('myChache1').then(console.log);

}
