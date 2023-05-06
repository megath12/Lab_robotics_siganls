
/* 
window.addEventListener('load', function() {

});
 */


let nav=this.document.getElementById("nav-bar")
let footer=this.document.getElementById("foot-er")

nav.innerHTML=`
<nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <img src="./assets/images/logo_lab.png" alt="Logo Medical Robotics & Biosignals Lab" class="logoMed">
    <h1 class="navbar-brand">Medical Robotics & Biosignals Lab</h1>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse navega" id="navbarNavAltMarkup">
      <div class="div-nav navbar-nav ms-auto">
        <a class="nav-link" href="./index.html">Inicio</a>
        <a class="nav-link" href="./publicaciones.html">Publicaciones</a>
        <a class="nav-link" href="./integrantes.html">Nosotros</a>
  <!--             <a class="nav-link" href="./investigacion.html">Líneas de Investigación</a> -->
        <a class="nav-link" href="./contacto.html">Contáctanos</a>
        <a class="logo-aw" href="./reconocimientos.html"> <i class="fa-solid fa-trophy"></i> </a>
        <a class="logo-ig" href="https://www.instagram.com/med_robotics_biosignals_lab/?igshid=YmMyMTA2M2Y%3D" target="_blank"><i class="fa-brands fa-instagram fa-xl"></i></a>
        <a class="logo-yt " href="https://www.instagram.com/med_robotics_biosignals_lab/?igshid=YmMyMTA2M2Y%3D" target="_blank"><i class="fa-brands fa-youtube fa-xl"></i></a>
      </div>
    </div>
  </div>
</nav>

`;

footer.innerHTML=`
<div class="row">
<div class="imgs-ipn col-lg-7 col-md-7 col-sm-12">
  <a href="https://www.upibi.ipn.mx" target="_blank"><img src="./assets/images/Logo_upibi.png" alt="UPIBI Logo" class="logos_ipn"></a>
  <a href="https://www.ipn.mx" target="_blank"><img src="./assets/images/Logo_IPN.png" alt="IPN Logo" class="logos_ipn"></a>
  <a href="https://www.cidetec.ipn.mx" target="_blank"><img src="./assets/images/logo_cidetec_ipn.png" alt="CIDETEC Logo" class="logos_ipn"></a>  
</div>

<div class="info-foot col-lg-5 col-md-5 col-sm-12">
  <p><i>"Comprometidos con la formacion de jovenes investigadores"</i> </p>
  <p>© 2023 Medical Robotics & Biosignals Lab</p>
</div>
</div>
`;



