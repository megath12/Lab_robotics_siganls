
/* Documentacion
    https://developers.google.com/maps/documentation/javascript/overview?hl=es-419#maps_map_simple-html
    Google maps 

    https://leafletjs.com/reference.html#tilelayer-url-template
    leaflet maps
*/



function iniciarMap(){
    var coord = {lat:19.515069 ,lng: -99.127783};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15.5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

/* iniciarMap(); */

