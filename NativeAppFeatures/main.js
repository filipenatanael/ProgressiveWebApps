if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
  }).catch(console.log)

}
