
/* Guias
    https://developers.google.com/maps/documentation/javascript/overview?hl=es-419#maps_map_simple-html
    Google maps 

    https://leafletjs.com/reference.html#tilelayer-url-template
    leaflet maps
*/



/* function iniciarMap(){
    var coord = {lat:19.515069 ,lng: -99.127783};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 15.5,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} */

/* iniciarMap(); */



var map = L.map('map').setView([19.515069, -99.127783], 15);
/* var marker = L.marker([51.5, -0.09]).addTo(map); */

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([19.515069, -99.127783]).addTo(map);




document.addEventListener("DOMContentLoaded", function() {
  var total=0;
  const regexCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
  var nombre=document.getElementById("nombre").value;
  var correo=document.getElementById("correo").value;
  var mensaje=document.getElementById("mensaje").value;
  if (nombre.length > 0  && mensaje.length > 10) {
    total++;
  }
  if(!regexCorreo.test(correo)& total==1){
    console.log(correo)
    var com=document.getElementById("enviado");
    com.innerHTML=`
    <div class="alert alert-success" role="alert">
      Datos enviados
    </div>
    `;
  }
});

/* function formu(){
  var total=0;
  const regexCorreo = /[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{1,5}/;
  var nombre=document.getElementById("nombre").value;
  var correo=document.getElementById("correo").value;
  var mensaje=document.getElementById("mensaje").value;
  if (nombre.length > 0  && mensaje.length > 10) {
    total++;
    console.log(nombre)
    var com=document.getElementById("enviado");
    com.innerHTML=`
    <div class="alert alert-success" role="alert">
      Datos enviados
    </div>
    `;
  }
  if(!regexCorreo.test(correo)& total==1){
    console.log(correo)
    var com=document.getElementById("enviado");
    com.innerHTML=`
    <div class="alert alert-success" role="alert">
      Datos enviados
    </div>
    `;
  }
}


 */