


var btnMar = document.getElementById("mariana");
var btnDav = document.getElementById("david");

var divMod = document.getElementById("div-modal");

btnMar.addEventListener("click", mariana);
btnDav.addEventListener("click", david);

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
    btnDav.click();
  }


