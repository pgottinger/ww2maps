L.tileLayer('http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png', {
  maxZoom: 20,
  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>'
}).addTo(map);

var markers = new Array();

function fillMarkers() {
  var bounds = map.getBounds();
  var units = call_backend("1945-05-01", bounds.getSouth(), bounds.getNorth(), bounds.getWest(), bounds.getEast());
  $.each(units, function(id, unit) {
    var marker = L.marker([unit.lat, unit.lng]);
    marker.bindPopup("Name: "+unit.name);
    marker.setIcon(icon);
    marker.addTo(map);
    markers.push(marker);
   });
}
		
var icon = L.icon({
  iconUrl: 'img/unit.png',
  iconSize: [29,20]
});
		
var iconAxis = L.icon({
  iconUrl: 'img/unit-axis.png',
	iconSize: [29,20]
});
				
function moveMarker(marker) {
  var latLng = marker.getLatLng();
	marker.setLatLng([latLng.lat, latLng.lng+1]); 
	marker.update(); 
}
		
function moveMarkers(markers) {
  for(x in markers) {
  	moveMarker(markers[x]);
	}
}

fillMarkers();
var popup = L.popup();
function onMapClick(e) {
  popup
  .setLatLng(e.latlng)
  .setContent("You clicked the map at " + map.getBounds().toBBoxString())
  .openOn(map);
}

map.on('click', onMapClick);
