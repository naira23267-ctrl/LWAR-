const CACHE_NAME = 'lwar-arena-v1.1';
const ASSETS = [
  'index.html',
  'manifest.json',
  'icon-192.png.JPG',
  'icon-512.png.JPG'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
