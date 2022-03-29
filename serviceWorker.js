const staticDevmoto = "dev-Moto-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/moto1.jpg",
  "/images/moto2.jpg",
  "/images/moto3.jpg",
  "/images/moto4.jpg",
  "/images/moto5.jpg",
  "/images/moto6.jpg",
  "/images/moto7.jpg",
  "/images/moto8.jpg"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevmoto).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
