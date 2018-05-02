//Service Worker Supported
if (navigator.serviceWorker) {
  // Register the Service Worker
  navigator.serviceWorker.register('sw.js', {scope: './'}).then(function(registration) {
  }).catch(console.log)

}


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
//       showNotification();
//   } else if (Notification.permission !== 'danied') {
//     Notification.requestPermission((permission) => {
//       if (permission === 'granted') {
//         showNotification();
//       }
//     })
//   }
// }
