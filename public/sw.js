let cachceData = "v1"

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cachceData).then((cache) => {
           return cache.addAll([
                // "/static/js/bundle.js",
                "/favicon.ico",
                "/logo192.png",
                "/static/js/main.87f7c25c.js",
                "/static/js/472.c2b6b84f.chunk.js",
                "/static/css/main.abc2e9aa.css",
                "/static/css/472.39d41967.chunk.css",
                "/index.html",
                "/manifest.json",
                "/static/media/group.d619c56b5a9c096c6e45.png",
                "/"
            ]);
        })
    )
})

this.addEventListener("fetch", (event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then(res => {
                return res
            })
            
        )
    }
})