let index = 0;
const images = document.querySelectorAll(".container img");

function trocarImagem() {
    images[index].classList.remove("ativar");
    index = (index + 1) % images.length;
    images[index].classList.add("ativar");
}

setInterval(trocarImagem, 5000);
