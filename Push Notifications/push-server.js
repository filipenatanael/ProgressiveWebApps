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
  endpoint: 'https://fcm.googleapis.com/fcm/send/cldZxQiy4po:APA91bHfAsEnvwrKhdF4E1Ek_KwG7l_xRAxXEFJX1WDsGlMFB9OEONYnh19GBs7I_3RLcp6eemPcJLSvoWLEFzpxmZKJh5A_LdlweLbPXX36UiT4MT_8I8bBoJlPV4Kfxu0P9cn_K2FP',
  keys: {
    auth: 'EaBtZ4-Y6tscUO_P9QXndQ==',
    p256dh: 'BKCow82Ve2vfQHaUyjiMs1io1_kuw3Z8Hit9I6tl87sJ2r5n8WZ-kE_2LIbHkEsfOSmzi6Qf-5FPkt9TwTLb1Q0='
  }
};

webpush.sendNotification(pushSubscription, 'A notification from the push server.');
console.log('Push sent to client!');
