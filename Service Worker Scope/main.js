if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
    // console.log(registration);
    registration.onupdatefound = () => {
      console.log("New Service Worker Found.");
      console.log(registration.installing);
    }
    
  }).catch(console.log)
}
