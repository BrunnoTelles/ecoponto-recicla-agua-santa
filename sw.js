const CACHE_NAME = 'recicla-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/busca.html',
  '/conscientizacao.html',
  '/style.css',
  '/logo-pino.png',
  '/logo-192.png',
  '/logo-512.png',
  '/rua-limpa.jpg',
  '/rua-suja.jpg',
  '/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});