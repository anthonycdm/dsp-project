function initMap() {
  var coords = {lat: 43.7860691, lng: 6.3300434};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 10,
    center: coords
  });
   var contentString ='<h5 id="firstHeading" class="firstHeading">Gorges du Verdon</h5>';

  var infowindow = new google.maps.InfoWindow({
          content: contentString,
          maxWidth: 200
  });

  var marker = new google.maps.Marker({
    position: coords,
    map: map,
    title:'Gorges du Verdon'
  });
  marker.addListener('click', function() {
      infowindow.open(map, marker);
  });

}
