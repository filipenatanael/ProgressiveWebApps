// Service Worker Supported
if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {

    let pubKey = 'BA_kcDJ9MyfRQ1QBYmrrBv-PzcUfmBFfm_9UebAp1nm5WK5VFgUgLYsMgda0539pVuUXMf3O4gHfUI5kjHGNteM';
    registration.pushManager.getSubscription().then((sub) => {
      // IF SUBSCRIPTION FOUND, RETURN SUB TO .THEN
      if (sub) return sub;
      // CALL FUNCTION TO CONVERT KEY
      let applicationServerKey = urlBase64ToUint8Array(pubKey);
      // SUBSCRIBE
      return registration.pushManager.subscribe({userVisibleOnly: true, applicationServerKey});

    }).then( sub => sub.toJSON() )
    .then(console.log)
    .catch(console.log);
  }).catch(console.log);

  // CONVERT KEY
  function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
    .replace(/\-/g, '+')
    .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }
}

// PUSH NOTIFICATION EXAMPLE
//
// if (window.Notification) {
//   function showNotification() {
//
//     let options = {
//       body: 'Some notification information.',
//       icon: 'icon.png',
//     }
//
//     let notificate = new Notification('A new notification.', options);
//
//     notificate.onclick = () => {
//       console.log('Notification Clicked.');
//     }
//   }
//
//   // Manage permission
//   if (Notification.permission === 'granted') {
//     showNotification();
//   } else if (Notification.permission !== 'danied') {
//     Notification.requestPermission((permission) => {
//       if (permission === 'granted') {
//         showNotification();
//       }
//     })
//   }
// }
