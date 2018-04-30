// Progressive Enhancement Service Worker Supported

/* if('serviceWorker' in navigator) {} */

if (navigator.serviceWorker) {
  //Register the Service Worker
  navigator.serviceWorker.register('sw.js').then(function(registration) {
    console.log('Service Worker Registered.');
  }).catch(console.log)
}
