'use strict';

//desestruturamos o objeto
import{getProdutos} from "../../../produtos.js";
// import{imagemPreview} from "./imagemPreview.js"


//deste modo desestruturamos os produtos
const criarProduto = ({nome, preco, descricao, foto}) => {
    
    const linha = document.createElement('div');
    linha.classList.add("card")
    linha.innerHTML = `
        <div id="containerFavoritar">
            <div href="" id="buttonFavoritar">
                <img id="imgCoracao" src="../../../icons/favorito_linha.svg" alt="" />
            </div>
        </div>
        <a href="../detalhesProduto/detalhesProduto.html">
            <img id="imgProduto" src="${foto}" alt=""
                style="width: 100%" />
        </a>
        <h1>${nome}</h1>
        <p class="preco">R$${preco}</p>
        <p class="descricao">${descricao}</p>`
    return linha;
}


//lista os produtos
//?o await (de gete produtos) funciona apenas com função assincrona
const carregarProdutos = async() => {
    const conteiner = document.querySelector(".containerCard");
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


//EVENTOS
// document
//     .getElementById('cadastrarCliente')
//     .addEventListener('click', openModal);

// document.getElementById('modalClose').addEventListener('click', closeModal);

// document.getElementById('cancel').addEventListener('click', closeModal);

// document.getElementById('inputFile').addEventListener('change', handleFile);

// document.getElementById('save').addEventListener('click', salvarProduto);

// document.getElementById('.records tbody').addEventListener('click', handleClickTbody);