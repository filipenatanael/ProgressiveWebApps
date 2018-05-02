// WEB PUSH MODULE
const webpush = require('web-push');
const vapid = require('./vapid.json');

// CONFIGURE KEY
webpush.setVapidDetails(
  'mailto:filipe@learinig.com',
  vapid.publicKey,
  vapid.privateKey
);

const pushSubscription = {
  endpoint: 'https://fcm.googleapis.com/fcm/send/fGqxXjvXtfs:APA91bEnZnTWlIPlTdRBPqs_xFWPr3YzSjKpFCwBCC_Yz1NTw_iDi5aeZjOficB6aNeY-sNDbRecR7eo8ZgpbKk9kPc4jv-e9OwroEvK7Z8VXe8TyPpxS4vriv9nNkvxGjOqEVMqHUtv',
  keys: {
    auth: 'EaBtZ4-Y6tscUO_P9QXndQ==',
    p256dh: 'BKCow82Ve2vfQHaUyjiMs1io1_kuw3Z8Hit9I6tl87sJ2r5n8WZ-kE_2LIbHkEsfOSmzi6Qf-5FPkt9TwTLb1Q0='
  }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server.');
console.log('Push sent to client!');
