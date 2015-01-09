var map;




function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(33.439346,-86.88312500000001)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);