'use strict';

function initialize() {
    var mapOptions = {
        center: {
            lat: 50.850340,
            lng: 4.351710
        },
        zoom: 6
    };

    var mapCanvas = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    locations.map(function (location) {
        var marker = new google.maps.Marker(location);
        google.maps.event.addListener(marker, 'click', function () {
            marker.info.open(marker.get('map'), marker);
        });
        marker.setMap(mapCanvas);
    });
}

google.maps.event.addDomListener(window, 'load', initialize);