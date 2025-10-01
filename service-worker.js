const CACHE_NAME = "pwa-demo-cache-v1";
const FILES_TO_CACHE = [
  "index.html",
  "manifest.json"
];

// Cài đặt SW và cache file
self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
  );
});

// Hoạt động offline
self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
