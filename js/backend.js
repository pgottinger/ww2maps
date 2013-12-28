function call_backend(date, minLat, maxLat, minLng, maxLng) {
var units = {};
var url = "http://localhost:8080/ww2maps/"+date+"/"+minLat+"/"+maxLat+"/"+minLng+"/"+maxLng;
$.ajax({
  url: url,
  dataType: 'json',
  async: false,
  success: function(data) {
      $.each(data, function(key, value) {
	      var unit = new Unit(key, value.name, value.co, value.lat, value.lng);
	      units[key]=unit;
	    });        
	  }
	});
	
	return units;
}
