let cachceData = "v1"

this.addEventListener("install", (event)=>{
    event.waitUntil(
        caches.open(cachceData).then((cache) => {
           return cache.addAll([
                // "/static/js/bundle.js",
                "/static/js/main.bb9c9b53.js",
                "/static/css/main.9363e7f5.css",
                "/index.html",
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
    else{
        return fetch(event.request);
    }
    
})