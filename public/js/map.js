
// THIS I UR FIDDLE NUm POOP http://jsfiddle.net/ot0r1ukh/1/
var flightPath;
var map;
function initialize() {
  var mapOptions = {
    zoom: 3,
    center: new google.maps.LatLng(0, -180),
    mapTypeId: google.maps.MapTypeId.TERRAIN
  };

  map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var flightPlanCoordinates = [
    new google.maps.LatLng(37.772323, -122.214897),
    new google.maps.LatLng(21.291982, -157.821856),
    new google.maps.LatLng(-18.142599, 178.431),
    new google.maps.LatLng(-27.46758, 153.027892)
  ];

  flightPath = new google.maps.Polyline({
    path: flightPlanCoordinates,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  addLine();
}

function addLine() {
  flightPath.setMap(map);
}

function removeLine() {
  flightPath.setMap(null);
}

google.maps.event.addDomListener(window, 'load', initialize)




$(document).ready(function(){
	alert('shouldaloaded');
	//click handler for filter buttons
	$('#filters').on('click','.hideT',function(){
		console.log('remove line');
	});


	$('#filters').on('click','.showT',function(){
		console.log('show line');
	});

});