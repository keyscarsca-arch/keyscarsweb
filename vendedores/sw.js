/* Service worker del catálogo de vendedores. Alcance: solo /vendedores/ (no toca la página pública). */
const CACHE = 'kc-vend-v5';
const SHELL = ['./', 'index.html', 'manifest.json', 'logo.png', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch', e=>{
  const req = e.request;
  if(req.method !== 'GET') return;
  const url = new URL(req.url);
  if(url.origin !== location.origin) return;
  const isImage = url.pathname.indexOf('/imagenes_productos/') !== -1;
  if(isImage){ // fotos: primero caché (rápido y sin gastar datos), y se guardan al verlas
    e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(r=>{
      if(r.ok){ const cp = r.clone(); caches.open(CACHE).then(c=>c.put(req, cp)); }
      return r;
    })));
    return;
  }
  // página y precios: primero internet (siempre lo más nuevo); sin internet, la última copia
  e.respondWith(fetch(req, {cache:'reload'}).then(r=>{
    if(r.ok && url.pathname.indexOf('/vendedores/') !== -1){ const cp = r.clone(); caches.open(CACHE).then(c=>c.put(req, cp)); }
    return r;
  }).catch(()=>caches.match(req).then(h=>h || caches.match('index.html'))));
});
