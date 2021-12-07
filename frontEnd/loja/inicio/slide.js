"use strict"

var slideIndex = 1;
mostrarSlides(slideIndex);

// Controles de próximo/anterior
function maisSlides(n) {
    mostrarSlides(slideIndex += n);
}

function slideAtual(n) {
    mostrarSlides(slideIndex = n);
}

function mostrarSlides(n) {
    var i;
    var slides = document.getElementsByClassName("meusSlides");
    var bolinhas = document.getElementsByClassName("bolinha");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < bolinhas.length; i++) {
        bolinhas[i].className = bolinhas[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    bolinhas[slideIndex - 1].className += " active";
}