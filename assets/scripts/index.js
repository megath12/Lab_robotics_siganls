
var texto = "Medical Robotics and Biosignals Laboratory implementa técnicas de matemática aplicada y novedosas tecnologías para el desarrollo de soluciones biomédicas integrales.";
var index = 0;

function mostrarTexto() {
  var miTexto = document.getElementById("descripcion");
  miTexto.textContent += texto[index];
  index++;

  if (index >= texto.length) {
    clearInterval(intervalo);
  }
}

var intervalo = setInterval(mostrarTexto, 100); // Ajusta el valor para controlar la velocidad de aparición



function registroCerrado(){
  alert("Evento Concluido")
}


if (window.location.hash) {
  window.location.href = "./index.html";
}


var vid=document.getElementById("videoo");
vid.innerHTML=`
<video autoplay loop style="width: 100%;">
<source src="./assets/images/index/protto.mp4" type="video/mp4">
</video>
`;