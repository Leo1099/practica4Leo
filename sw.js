self.addEventListener('install', (event) => {
    console.log("SW si funciona ");
    const promiseCache = caches.open('cache-v1.1').then((cache) => {
        return cache.addAll(
            [
                './',
                './index.html',
                './pages/sumar.html',
                './pages/restar.html',
                './pages/multiplicar.html',
                './pages/dividir.html',
                './js/app.js',
                './css/style.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js'

            ]
        );
    })
    event.waitUntil(promiseCache)
})

self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request);
    event.respondWith(respCache);
})