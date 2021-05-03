function createscript1() {
	var script1 = document.createElement('script')
	script1.src = './alertifyjs/alertify.min.js'
	document.head.append(script1)
	setTimeout(createscript2, 100)
}
function createscript2() {
	var script2 = document.createElement('script')
	script2.src = './js/game.js'
	document.head.append(script2)
}
createscript1()

var CACHE_NAME = 'PressSim';
var urlsToCache = [
  'https://lvoz2.github.io/PressSim/index.html'
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
  var cacheWhitelist = ['example'];
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
