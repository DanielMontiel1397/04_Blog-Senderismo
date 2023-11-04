const imagenMountains= document.querySelector('.imagenMountainTall');

imagenMountains.addEventListener('click', expander);

function expander(){
    imagenMountains.classList.toggle('expander');
    console.log("se agrego");
}
