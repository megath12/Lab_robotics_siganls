


var btnMar = document.getElementById("mariana");
var btnDav = document.getElementById("david");
var btnIva = document.getElementById("ivan");
var btnLeo = document.getElementById("leonardo");



var divMod = document.getElementById("div-modal");

btnMar.addEventListener("click", mariana);
btnDav.addEventListener("click", david);
btnIva.addEventListener("click", ivan);
btnLeo.addEventListener("click", leonardo);

let cont=0;



function mariana() {
    divMod.innerHTML=
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header invs-h">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Mariana Felisa Ballesteros Escamilla</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body invs-b">
        <img src="./assets/images/integrantes/mariana-ballesteros.jpg" alt=""><br>
        <br>
        <p>Doctora en Ciencias con especialidad en Control Automático del Centro de Investigación y Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN)</p>
        <p>Lineas de Investigación</p>
        <ul>
            <li>Identificación de Sistemas y modelado </li>
            <li>Control Adaptable</li>
            <li>Ingeniería Biomédica</li>
        </ul>
        <br>
        <a href="https://mx.linkedin.com/in/mariana-felisa-ballesteros-escamilla-474aa11ab" target="_blank"><i class="fa-brands fa-linkedin fa-2xl">&nbsp&nbsp&nbsp</i></a>
        <a href="https://ipn.elsevierpure.com/en/persons/mariana-felisa-ballesteros-escamilla" target="_blank"><i class="fa-solid fa-book fa-2xl"></i></a>
        </div>
    
    </div>
    </div>
    </div>
    `;
/*     if (cont==0){
        btnMar.click();
        console.log(cont)
        cont++;
    }
    else{
        console.log(cont)
        cont--;
    } */
    btnMar.click();
  }

  function david() {
    divMod.innerHTML=
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header invs-h">
        <h1 class="modal-title fs-5" id="exampleModalLabel">David Cruz Ortiz</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body invs-b">
        <img src="./assets/images/integrantes/david-cruz.jpg" alt=""><br>
        <br>
        <p>Doctora en Ciencias con especialidad en Control Automático del Centro de Investigación y Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN)</p>
        <p>Lineas de Investigación</p>
        <ul>
            <li>Identificación de Sistemas y modelado </li>
            <li>Control Adaptable</li>
            <li>Ingeniería Biomédica</li>
        </ul>
        <br>
        <a href="https://mx.linkedin.com/in/david-cruz-ortiz-1bb2bb155" target="_blank"><i class="fa-brands fa-linkedin fa-2xl">&nbsp&nbsp&nbsp</i></a>
        <a href="https://ipn.elsevierpure.com/es/persons/david-cruz-ortiz" target="_blank"><i class="fa-solid fa-book fa-2xl"></i></a>
        </div>
    
    </div>
    </div>
    </div>
    `;
/*     if (cont==0){
        btnDav.click();
        console.log(cont)
        cont++;
    }
    else{
        console.log(cont)
        cont--;
    } */
    btnDav.click();

  }


  function ivan() {
    divMod.innerHTML=
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header invs-h">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Iván de Jesús Salgado Ramos</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body invs-b">
        <img src="./assets/images/integrantes/ivan-salgado.jpg" alt=""><br>
        <br>
        <p>Doctora en Ciencias con especialidad en Control Automático del Centro de Investigación y Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN)</p>
        <p>Lineas de Investigación</p>
        <ul>
            <li>Identificación de Sistemas y modelado </li>
            <li>Control Adaptable</li>
            <li>Ingeniería Biomédica</li>
        </ul>
        <br>
        <a href="https://scholar.google.com.mx/citations?user=abEx3G4AAAAJ&hl=en" target="_blank"><i class="fa-regular fa-newspaper fa-2xl">&nbsp&nbsp&nbsp</i></a>   
        <a href="https://ipn.elsevierpure.com/es/persons/ivan-de-jesus-salgado-ramos" target="_blank"><i class="fa-solid fa-book fa-2xl"></i></a>
        </div>
    
    </div>
    </div>
    </div>
    `;

    btnIva.click();
  }


  function leonardo() {
    divMod.innerHTML=
    `
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header invs-h">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Manuel Leonardo Mera Hernandez</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body invs-b">
        <img src="./assets/images/integrantes/leonardo-mera.jpg" alt=""><br>
        <br>
        <p>Doctora en Ciencias con especialidad en Control Automático del Centro de Investigación y Estudios Avanzados del Instituto Politécnico Nacional (CINVESTAV-IPN)</p>
        <p>Lineas de Investigación</p>
        <ul>
            <li>Identificación de Sistemas y modelado </li>
            <li>Control Adaptable</li>
            <li>Ingeniería Biomédica</li>
        </ul>
        <br>
        <a href="https://mx.linkedin.com/in/manuel-mera-1b973516" target="_blank"><i class="fa-brands fa-linkedin fa-2xl">&nbsp&nbsp&nbsp</i></a>
        <a href="https://ipn.elsevierpure.com/es/persons/manuel-leonardo-mera-hern%C3%A1ndez" target="_blank"><i class="fa-solid fa-book fa-2xl"></i></a>
        </div>
    
    </div>
    </div>
    </div>
    `;
    btnLeo.click();
  }
