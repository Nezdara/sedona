function initMap() {
  var mapOptions = {
    zoom: 13,
    center: {lat: 34.689968, lng: -111.761011},
    disableDefaultUI: true
  }

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var myLatLng = new google.maps.LatLng(34.689968, -111.761011);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    animation: google.maps.Animation.DROP
  });
}
