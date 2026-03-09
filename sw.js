self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('silverplay-v2').then((cache) => {
      // 캐시할 파일 목록
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});