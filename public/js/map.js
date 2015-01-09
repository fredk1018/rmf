$(document).ready(function(){
	alert('Hey this is an alert from begginging of  map.js');


function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("map-canvas"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

	






	alert('Hey this is an alert from end of  map.js');
});