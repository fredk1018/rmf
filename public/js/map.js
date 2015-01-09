
function drawMap(){
var map;
function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(33.439346,-86.88312500000001)
  };
  map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);


  var trail1Co = [
    new google.maps.LatLng(33.439346, -86.8834),
    new google.maps.LatLng(33.439346, -86.8855),
    new google.maps.LatLng(33.439346, -86.8876),
    new google.maps.LatLng(33.439346, -86.8897)
  ];
  var trail1 = new google.maps.Polyline({
    path: trail1Co,
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  var trail2Co = [
    new google.maps.LatLng(33.439, -86.8834),
    new google.maps.LatLng(33.437, -86.8834),
    new google.maps.LatLng(33.435, -86.8834),
    new google.maps.LatLng(33.433, -86.8834)
  ];
  var trail2 = new google.maps.Polyline({
    path: trail2Co,
    geodesic: true,
    strokeColor: '#2DA1D3',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

function addT1() {
  trail1.setMap(map);
}

function removeT1() {
  trail1.setMap(null);
}



  trail1.setMap(map);
  trail2.setMap(map);
  removeT1();
  
}


google.maps.event.addDomListener(window, 'load', initialize);



};


$(document).ready(function(){
	drawMap();
	//click handler for filter buttons
	$('#filters').on('click','.hideT',function(){
		console.log('remove line');
	});


	$('#filters').on('click','.showT',function(){
		console.log('show line');
	});




});