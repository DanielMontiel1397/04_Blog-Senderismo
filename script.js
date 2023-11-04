const imagenEverest= document.querySelector('.imageEverest');
const imagenK2= document.querySelector('.imageK2');
const imagenkachen= document.querySelector('.imageKachen');
const imagenLhotse= document.querySelector('.imageLhotse');

const queEsSenderismo = document.querySelector('.queEsSenderismo');
const mountainTallMexico = document.querySelector('.mountainTallMexico');
const mountainTallWorld = document.querySelector('.mountainTallWorld');
const escaladoresMasGrandes = document.querySelector('.escaladoresMasGrandes');

const acercaDe1 = document.querySelector('.acercaDe1');
const acercaDe2 = document.querySelector('.acercaDe2');
const acercaDe3 = document.querySelector('.acercaDe3');
const acercaDe4 = document.querySelector('.acercaDe4');

const irSectionMain = document.querySelector('.irSectionMain');
const irSectionMontanasMexico = document.querySelector('.irSectionMontanasMexico');
const irSectionMontanasMundo = document.querySelector('.irSectionMontanasMundo');
const irSectionGaleria = document.querySelector('.irSectionGaleria');
const irSectionReview = document.querySelector('.irSectionReview');
const irSectionContacto = document.querySelector('.irSectionContacto');

const sectionMain = document.querySelector('.section-main');
const sectionMontanasMexico = document.querySelector('.section-montanasMexico');
const sectionMontanasMundo = document.querySelector('.section-montanasMundo');
const sectionGaleria = document.querySelector('.section-galeria');
const sectionReview = document.querySelector('.section-review');
const sectionContacto = document.querySelector('.section-contacto');

imagenEverest.addEventListener('click', expander1);
imagenK2.addEventListener('click', expander2);
imagenkachen.addEventListener('click', expander3);
imagenLhotse.addEventListener('click', expander4);
acercaDe1.addEventListener('click', cambiarAcercaDe1);
acercaDe2.addEventListener('click', cambiarAcercaDe2);
acercaDe3.addEventListener('click', cambiarAcercaDe3);
acercaDe4.addEventListener('click', cambiarAcercaDe4);

irSectionMain.addEventListener('click', aparecerMenu);
irSectionMontanasMexico.addEventListener('click',aparecerMontanasMexico);
irSectionMontanasMundo.addEventListener('click',aparecerMontanasMundo);
irSectionGaleria.addEventListener('click',aparecerGaleria);
irSectionReview.addEventListener('click',aparecerReview);
irSectionContacto.addEventListener('click',aparecerContacto);

//Funciones para apecer Secciones
function aparecerMenu(){
    sectionMain.classList.remove('section-inactive');
    sectionMontanasMexico.classList.add('section-inactive');
    sectionMontanasMundo.classList.add('section-inactive');
    sectionGaleria.classList.add('section-inactive');
    sectionReview.classList.add('section-inactive');
    sectionContacto.classList.add('section-inactive');
}

function aparecerMontanasMexico(){
    sectionMain.classList.add('section-inactive');
    sectionMontanasMexico.classList.remove('section-inactive');
    sectionMontanasMundo.classList.add('section-inactive');
    sectionGaleria.classList.add('section-inactive');
    sectionReview.classList.add('section-inactive');
    sectionContacto.classList.add('section-inactive');
}

function aparecerMontanasMundo(){
    sectionMain.classList.add('section-inactive');
    sectionMontanasMexico.classList.add('section-inactive');
    sectionMontanasMundo.classList.remove('section-inactive');
    sectionGaleria.classList.add('section-inactive');
    sectionReview.classList.add('section-inactive');
    sectionContacto.classList.add('section-inactive');
}

function aparecerGaleria(){
    sectionMain.classList.add('section-inactive');
    sectionMontanasMexico.classList.add('section-inactive');
    sectionMontanasMundo.classList.add('section-inactive');
    sectionGaleria.classList.remove('section-inactive');
    sectionReview.classList.add('section-inactive');
    sectionContacto.classList.add('section-inactive');
}

function aparecerReview(){
    sectionMain.classList.add('section-inactive');
    sectionMontanasMexico.classList.add('section-inactive');
    sectionMontanasMundo.classList.add('section-inactive');
    sectionGaleria.classList.add('section-inactive');
    sectionReview.classList.remove('section-inactive');
    sectionContacto.classList.add('section-inactive');
}

function aparecerContacto(){

}

//Funciones para expander imagenes de section Montañas del Mundo
function expander1(){
    const isExpander2Open= imagenK2.classList.contains('expander');
    const isExpander3Open= imagenkachen.classList.contains('expander');
    const isExpander4Open= imagenLhotse.classList.contains('expander');

    if(isExpander2Open){
        imagenK2.classList.toggle('expander');
    }

    if(isExpander3Open){
        imagenkachen.classList.toggle('expander');
    }

    if(isExpander4Open){
        imagenLhotse.classList.toggle('expander');
    }

    imagenEverest.classList.toggle('expander');
}

function expander2(){
    const isExpander1Open= imagenEverest.classList.contains('expander');
    const isExpander3Open= imagenkachen.classList.contains('expander');
    const isExpander4Open= imagenLhotse.classList.contains('expander');

    if(isExpander1Open){
        imagenEverest.classList.toggle('expander');
    }

    if(isExpander3Open){
        imagenkachen.classList.toggle('expander');
    }

    if(isExpander4Open){
        imagenLhotse.classList.toggle('expander');
    }

    imagenK2.classList.toggle('expander');
}

function expander3(){
    const isExpander1Open= imagenEverest.classList.contains('expander');
    const isExpander2Open= imagenK2.classList.contains('expander');
    const isExpander4Open= imagenLhotse.classList.contains('expander');

    if(isExpander1Open){
        imagenEverest.classList.toggle('expander');
    }

    if(isExpander2Open){
        imagenK2.classList.toggle('expander');
    }

    if(isExpander4Open){
        imagenLhotse.classList.toggle('expander');
    }

    imagenkachen.classList.toggle('expander');
}

function expander4(){
    const isExpander1Open= imagenEverest.classList.contains('expander');
    const isExpander2Open= imagenK2.classList.contains('expander');
    const isExpander3Open= imagenkachen.classList.contains('expander');

    if(isExpander1Open){
        imagenEverest.classList.toggle('expander');
    }

    if(isExpander2Open){
        imagenK2.classList.toggle('expander');
    }

    if(isExpander3Open){
        imagenkachen.classList.toggle('expander');
    }
    imagenLhotse.classList.toggle('expander');
}


//Seccion para aparecer temas de la Seccion Main
function cambiarAcercaDe1(){
    mountainTallMexico.classList.add('inactive');
    mountainTallWorld.classList.add('inactive');
    escaladoresMasGrandes.classList.add('inactive');
    queEsSenderismo.classList.remove('inactive');
}

function cambiarAcercaDe2(){
    mountainTallMexico.classList.remove('inactive');
    mountainTallWorld.classList.add('inactive');
    escaladoresMasGrandes.classList.add('inactive');
    queEsSenderismo.classList.add('inactive');
}

function cambiarAcercaDe3(){
    mountainTallMexico.classList.add('inactive');
    mountainTallWorld.classList.remove('inactive');
    escaladoresMasGrandes.classList.add('inactive');
    queEsSenderismo.classList.add('inactive');
}

function cambiarAcercaDe4(){
    mountainTallMexico.classList.add('inactive');
    mountainTallWorld.classList.add('inactive');
    escaladoresMasGrandes.classList.remove('inactive');
    queEsSenderismo.classList.add('inactive');
}
