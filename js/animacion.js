
// Obtenemos el elemento a animar
var cuadrado = document.getElementById('cuadrado');
// Creamos una animación con Anime.js
var animacion = anime({
    targets: cuadrado,    // Este es el elemento que animare,os
    translateX: 500,     // con esto lo que haremos es mover 1000 píxeles hacia la derecha.
    opacity: 0,
    duration: 10000,       // Duración de la animación en milisegundo
    easing: 'linear', 
    loop:true
});
