const CACHE_NAME = "smilup-cache-v1";
const urlsToCache = [
  "./",
  "./logo.png",
  "./manifest.json"
  "./Homepage.html"
  "./chatroom.html"
  "./User-Sign_in.html"
  "./icon-192.png"
  "./icon-512.png"
  "./pop-sms.mp3"
  "./settings.html"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
