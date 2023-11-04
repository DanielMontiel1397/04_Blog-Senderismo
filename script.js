const imagenEverest= document.querySelector('.imageEverest');
const imagenK2= document.querySelector('.imageK2');
const imagenkachen= document.querySelector('.imageKachen');
const imagenLhotse= document.querySelector('.imageLhotse');

imagenEverest.addEventListener('click', expander1);
imagenK2.addEventListener('click', expander2);
imagenkachen.addEventListener('click', expander3);
imagenLhotse.addEventListener('click', expander4);

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