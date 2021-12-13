'use strict';

//desestruturamos o objeto
import{postProduto} from "../../../produtos.js";
// import{imagemPreview} from "./imagemPreview.js"

const salvarProduto = () => {
    const produto = {
        nome: document.getElementById('nomeProduto').value,
        preco: document.getElementById('preco').value,
        quantidade: document.getElementById('quantidade').value,
        foto: document.getElementById('imagePreview').src,
        descricao: document.getElementById('descricao').value,
        cor: document.getElementById('cor').value,
        tamanho: document.getElementById('tamanho').value,
        desconto: document.getElementById('desconto').value,
    };
    postProduto(produto);
}