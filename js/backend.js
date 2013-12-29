function call_backend(date, minLat, maxLat, minLng, maxLng) {
var units = {};
var url = "http://localhost:8080/ww2maps/getUnitsForMapBoundsAndDate?date="+date+"&minlat="+minLat+"&maxlat="+maxLat+"&minlng="+minLng+"&maxlng="+maxLng;
$.ajax({
  url: url,
  dataType: 'json',
  async: false,
  success: function(data) {
      var response = JSON.parse(data);
      $.each(response, function(key, value) {
	      var unit = new Unit(key, value.name, value.lat, value.lng);
	      units[key]=unit;
	    });        
	  }
	});
	
	return units;
}
