//geo location api

function getUserGeoLocation(){
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((location)=>{
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
    },
    (error) =>{
        console.log(error);
    }

    );
}
else{
    alert("Browser location not supported.")
}
}
getUserGeoLocation();