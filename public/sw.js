let cachceData = "v1"

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cachceData).then((cache) => {
           return cache.addAll([
                // "/static/js/bundle.js",
                "/favicon.ico",
                "/logo192.png",
                "/static/js/main.bb9c9b53.js",
                "/static/css/main.9363e7f5.css",
                "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?cs=srgb&dl=pexels-fauxels-3184398.jpg&fm=jpg",
                "/manifest.json",
                "/index.html",
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