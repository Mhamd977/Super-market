$(document).ready(function () {
    mapboxgl.accessToken = jQuery('#hdnMapAPI').val();
    mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js');
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v10',
        center: [-3.703790, 40.416775],
        zoom: 3
    });
  
    var geojson = {
        type: 'FeatureCollection',
        features: [{
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [-3.703790, 40.416775]
            }
        }, ]
    };
  
    geojson.features.forEach(function (marker) {
        var el = document.createElement('div');
        el.className = 'fa fa-map-marker fa-2x map-marker-color';
        new mapboxgl.Marker(el)
            .setLngLat(marker.geometry.coordinates)
            .addTo(map);
    });
    
    map.scrollZoom.disable();
    map.addControl(new mapboxgl.NavigationControl());
    var el = jQuery('<div>').width(40).height(40).append(function () {
        return jQuery('<span>').addClass('map-marker').append(function () {
            return jQuery('<span>').addClass('fa fa-map-marker fa-2x map-marker-color');
        });
    });
  })