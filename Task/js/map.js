
let geocoder;
let map;
let address = "Renaissance Tower 1201 Elm St Dallas, TX 75270";
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        disableDefaultUI: true,
        center: {lat: 32.781354, lng: -96.802347}
    });
    geocoder = new google.maps.Geocoder();
    codeAddress(geocoder, map);
}

function codeAddress(geocoder, map) {
    geocoder.geocode({'address': address}, function(results, status) {
        if (status === 'OK') {
           map.setCenter(results[0].geometry.location);
            let marker = new google.maps.Marker({
            map: map,
           	position: results[0].geometry.location
           });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
    });
}