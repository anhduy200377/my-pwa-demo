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
const buttonsArea = document.querySelector('.buttons-area');

rejectBtn.addEventListener('click', () => {
  // Thu nhỏ dần
  size -= 0.1;
  if (size > 0.3) {
    rejectBtn.style.transform = `scale(${size})`;
  } else {
    rejectBtn.style.display = "none"; 
  }

  // Giới hạn trong vùng buttons-area
  const maxX = buttonsArea.clientWidth - rejectBtn.offsetWidth;
  const maxY = buttonsArea.clientHeight - rejectBtn.offsetHeight;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  rejectBtn.style.left = `${randomX}px`;
  rejectBtn.style.top = `${randomY}px`;

  // Lời năn nỉ
  if (index < phrases.length) {
    let p = document.createElement("p");
    p.textContent = phrases[index];
    messageBox.appendChild(p);
    index++;
  }
});
