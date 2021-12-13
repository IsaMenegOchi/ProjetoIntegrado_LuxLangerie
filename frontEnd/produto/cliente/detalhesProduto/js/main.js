'use strict';

//desestruturamos o objeto
import{getProdutos} from "../../../produtos.js";
// import{imagemPreview} from "./imagemPreview.js"


//deste modo desestruturamos os produtos
const criarProduto = ({nome, preco, modelo, descricao, foto}) => {
    
    const produto = document.createElement('div');
    produto.classList.add("produto");
    produto.innerHTML = `<div class="fotoProduto">

    <div class="fotoPrincipal">
        <img src="${foto}" alt="">
    </div>

    <div class="outrasFotos">
        <img src="../../../../Imagens do design/Rectangle 39.png" alt="" class="fotoP1">
        <img src="../../../../Imagens do design/Rectangle 39.png" alt="" class="fotoP2">
        <img src="../../../../Imagens do design/Rectangle 39.png" alt="" class="fotoP3">
        <img src="../../../../Imagens do design/Rectangle 39.png" alt="" class="fotoP4">
    </div>

</div>

<div class="informacoesProduto">

    <h2>${nome}</h2>
    <div class="divValor">
        <span>R$ ${preco}</span>
    </div>

    <div class="divModelo">
        <span>Modelo</span>
        <input type="text" class="inputModelo" disabled value="${modelo}">
    </div>

    <div class="divTamanho">
        <span>Tamanho</span>
        <select class="selectTamanho">
            <option>P</option>
            <option>M</option>
            <option>G</option>
            <option>GG</option>
        </select>
    </div>
    <div class="divQtde">
        <span>Quantidade</span>
        <input type="number" class="inputQtde" min="1" max="5" value="1">
    </div>
    <a href="../../../cliente/sacola/sacola.html">
        <button>COMPRAR</button>
    </a>
    <div class="divFav">
        <img src="../../../icons/favorito_linha.svg" alt="Favoritar" id="imagemFavoritar">
        <span id="spanFav">Favoritar</span>
    </div>

</div>
`
   
    // const descricaoP = document.createElement('div');
    
    
    return produto;
}


//lista os produtos
//?o await (de gete produtos) funciona apenas com função assincrona
const carregarProdutos = async() => {
    const conteiner = document.querySelector(".main");
    //pegar todos os produtos
    //?colocamos o await aq pois o getProdutos() devolve uma promessa
    const produtos = await getProdutos();
    const arrayProduto = produtos.data;
    //me devolve todas as linhas do jason
    const card = arrayProduto.map(criarProduto);
    //os tres pontos espalhas os objetos e não precisamos fazer a mão
    conteiner.replaceChildren(...card)
}

//passamos onde vai estar a imagem, e a imagem
// const handleFile = () => imagemPreview("inputFile", "imagePreview");

// const salvarProduto = () => {
//     const produto = {
//         nome: document.getElementById('product').value,
//         preco: document.getElementById('price').value,
//         categoria: document.getElementById('category').value,
//         foto: document.getElementById('imagePreview').src,
//     };
//     postProduto(produto);
//     closeModal();
//     carregarTabela();
// }

//target - onde eu executei a ação
// const handleClickTbody = ({target}) => {

//     if(target.type === 'button'){
//         const acaoBotao = target.textContent.trim();
//         if (acaoBotao === 'excluir'){
//             deleteProdutos(target.dataset.idproduto);
//             carregarTabela();
//         }

//     }

// }

carregarProdutos();

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

//EVENTOS
// document
//     .getElementById('cadastrarCliente')
//     .addEventListener('click', openModal);

// document.getElementById('modalClose').addEventListener('click', closeModal);

// document.getElementById('cancel').addEventListener('click', closeModal);

// document.getElementById('inputFile').addEventListener('change', handleFile);

// document.getElementById('save').addEventListener('click', salvarProduto);

// document.getElementById('.records tbody').addEventListener('click', handleClickTbody);