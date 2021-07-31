function placeMarker(location) {
  if (marker) {
      //if marker already was created change positon
      marker.setPosition(location);
  } else {
      //create a marker
      marker = new google.maps.Marker({          
          position: location,
          map: map,
          draggable: true
      });
  }
}

call :

 google.maps.event.addListener(map, 'click', function (evt) {
      placeMarker(evt.latLng);
  });