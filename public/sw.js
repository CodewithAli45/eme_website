const CACHE_NAME = "eme-pwa-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/about",
  "/ongoing-project",
  "/completed-project",
  "/career",
  "/manifest.json",
  "/favicon.ico",
  "/eme_logo.png",
  "/turnkey.png",
  "/icon-192.png",
  "/icon-512.png"
];

// Install Event - Pre-cache essential resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching static assets");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// Activate Event - Clean up stale caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch Event - Stale-while-revalidate strategy for same-origin resources
self.addEventListener("fetch", (event) => {
  // Only handle standard HTTP GET requests
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          })
          .catch(() => {
            // Network failure - fallback to cached response if available
            return cachedResponse;
          });

        return cachedResponse || fetchPromise;
      });
    })
  );
});
