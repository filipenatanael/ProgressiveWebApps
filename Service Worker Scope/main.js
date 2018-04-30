if (navigator.serviceWorker) {
  //Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
    console.log('Service Worker Registered.');
  }).catch(console.log)
}
