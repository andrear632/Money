var cacheName = 'pwa-Money';
var filesToCache = [
    '/',
    '/index.html',
    '/style.css',
    '/icon.png',
    '/logic.js',
    '/splash.png',
    '/manifest.json',
    '/bootstrap.min.css',
    '/service-worker.js',
    '/favicon.ico'
]; 

/* Avvia il Service Worker e Memorizza il contenuto nella cache */
self.addEventListener('install', function(e) {
    self.skipWaiting();
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            return cache.addAll(filesToCache);
        })
    );
});

/* Serve i Contenuti Memorizzati quando sei Offline */
self.addEventListener('fetch', function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            return response || fetch(e.request);
        })
    );
});