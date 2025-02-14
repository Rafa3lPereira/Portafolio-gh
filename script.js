const btnSkill = document.querySelector("#btn-skills");
const btnInfo = document.querySelector("#btn-info-sobre-mi");
let itemSkills = document.querySelectorAll('.relleno');

btnSkill.addEventListener('click',function(){
    document.querySelector('#info-sobre-mi').style.display = 'none';
    document.querySelector('#info-skills').style.display = 'block';

    btnInfo.classList.remove('selected');
    btnSkill.classList.add("selected");

    itemSkills[0].style.animation = 'animHtml 2s forwards';
    itemSkills[1].style.animation = 'animCss 2s forwards';
    itemSkills[2].style.animation = 'animJs 2s forwards';
    itemSkills[3].style.animation = 'animReact 2s forwards';
    itemSkills[4].style.animation = 'animBoostrap 2s forwards';
});

btnInfo.addEventListener('click',function(){
    document.querySelector('#info-sobre-mi').style.display = 'block';
    document.querySelector('#info-skills').style.display = 'none';

    btnInfo.classList.add('selected');
    btnSkill.classList.remove("selected");
});

// Función para abrir el modal
function openModal(id) {
    // Obtiene el modal por su ID
    var modal = document.getElementById(id);
    // Muestra el modal
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal(id) {
    // Obtiene el modal por su ID
    var modal = document.getElementById(id);
    // Oculta el modal
    modal.style.display = "none";
}

// Cierra el modal haciendo clic fuera del contenido
window.onclick = function(event) {
    // Si se hace clic fuera del modal, se cierra
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
