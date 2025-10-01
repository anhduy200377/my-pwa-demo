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

window.onload = () => {
  const rect = rejectBtn.getBoundingClientRect();
  const parentRect = letterBox.getBoundingClientRect();

  rejectBtn.style.left = (rect.left - parentRect.left) + "px";
  rejectBtn.style.top = (rect.top - parentRect.top) + "px";

  // xóa right/bottom để không xung đột
  rejectBtn.style.right = "auto";
  rejectBtn.style.bottom = "auto";
};