const imgCoracao = document.getElementById("imgCoracao")

function trocarImagem() {
    if (imgCoracao.src.includes("linha")) {
        imgCoracao.src = "../../icons/favorito_preenchido.svg"
    } else {
        imgCoracao.src = "../../icons/favorito_linha.svg"
    }
}

// document.getElementById("buttonFavoritar").addEventListener("click", trocarImagem)
