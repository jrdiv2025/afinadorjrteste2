const CACHE_NAME = 'afinador-v1';
const ASSETS = [
  '/afinadorjrteste/',
  '/afinadorjrteste/index.html',
  '/afinadorjrteste/manifest.json',
  '/afinadorjrteste/icon-192x192.png',
  '/afinadorjrteste/icon-512x512.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});