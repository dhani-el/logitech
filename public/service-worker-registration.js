

function register(){
    if(!('serviceWorker' in navigator)){
        console.log("Service Worker Not Supported on your device")
        return 
    }
    else{
        navigator.serviceWorker.register(
            './service-worker-registration.js'
        )
        .then((registration)=>{
            console.log("serviceWorker registration complete at scope: ",registration.scope);
        }).catch((error)=>{
            console.log("There was an error registering a service worker: ",error);
        })
    }

}

register()