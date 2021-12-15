const imgFavorito = document.getElementById("imagemFavoritar");
const textoFav = document.getElementById("spanFav")

function trocarImagem (){
    
    if(imgFavorito.src.includes("linha")){
        imgFavorito.src = "../../../icons/favorito_preenchido.svg"
        textoFav.textContent = "Favorito"
    }
    else{
        imgFavorito.src = "../../../icons/favorito_linha.svg"
        textoFav.textContent = "Favoritar"
    }
}

imgFavorito.addEventListener("click", trocarImagem)