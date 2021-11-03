var CACHE_NAME = 'PressSim';
var urlsToCache = [
  'https://lvoz2.github.io/PressSim/favicon.ico',
  'https://lvoz2.github.io/PressSim/index.html',
  'https://lvoz2.github.io/PressSim/jquery-3.6.0.min.js',
  'https://lvoz2.github.io/PressSim/manifest.json',
  'https://lvoz2.github.io/PressSim/worker.js',
  'https://lvoz2.github.io/PressSim/PressSim.png',
  'https://lvoz2.github.io/PressSim/PressSim_x192.png',
  'https://lvoz2.github.io/PressSim/PressSim_x512.png',
  'https://lvoz2.github.io/PressSim/js/game.js',
  'https://lvoz2.github.io/PressSim/js/startup.js',
  'https://lvoz2.github.io/PressSim/js/variables.js',
  'https://lvoz2.github.io/PressSim/css/game.css',
  'https://lvoz2.github.io/PressSim/css/navbar.png',
  'https://lvoz2.github.io/PressSim/css/fonts.css',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bold/bold.ttf',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bold/bold.woff',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bold/bold.woff2',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bolditalic/bolditalic.ttf',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bolditalic/bolditalic.woff',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/bolditalic/bolditalic.woff2',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/italic/italic.ttf',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/italic/italic.woff',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/italic/italic.woff2',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/regular/regular.ttf',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/regular/regular.woff',
  'https://lvoz2.github.io/PressSim/fonts/Arvo/regular/regular.woff2',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/alertify.min.js',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/alertify.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/alertify.rtl.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/bootstrap.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/bootstrap.rtl.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/default.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/default.rtl.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/semantic.min.css',
  'https://lvoz2.github.io/PressSim/external/alertifyjs/css/themes/semantic.rtl.min.css'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  var cacheWhitelist = ['PressSim'];
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
