
// THIS I UR FIDDLE NUm POOP http://jsfiddle.net/ot0r1ukh/1/
var map;
var initialize = function(map) {
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


  trail1.setMap(map);
 
  
  
}




$(document).ready(function(){
	google.maps.event.addDomListener(window, 'load', initialize);
	alert('shouldaloaded');
	//click handler for filter buttons
	$('#filters').on('click','.hideT',function(){
		console.log('remove line');
	});


	$('#filters').on('click','.showT',function(){
		console.log('show line');
	});




});