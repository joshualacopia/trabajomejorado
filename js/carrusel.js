const carrusel = document.querySelector('.carrusel-ites');
let maxscrollLeft  = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let paso = 1;
const start = () => {
intervalo = setInterval(function () {
    carrusel.scrollLeft = carrusel.scrollLeft + paso;
    if (carrusel.scrollLeft  === maxscrollLeft){
        paso = paso * -1;
    }  else if (carrusel.scrollLeft === 0){
        paso =paso * -1;
    }
    },10)
};

start();