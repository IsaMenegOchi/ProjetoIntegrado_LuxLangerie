<?php

include("../design/header/header.php");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../design/header/header.css">
    <link rel="stylesheet" href="produtos.css">
    <title>Produtos</title>
</head>

<body>
    <main>
        <p id="tituloFiltro">Ordenar por:</p>

        <form action="" id="filtroProdutos">
            <div>
                <input type="radio" id="escolha1" name="escolhas" value="menorPreco">
                <label for="">Menor preço</label>

                <input type="radio" id="escolha2" name="escolhas" value="maiorPreco">
                <label for="">Maior preço</label>

                <input type="radio" id="escolha3" name="escolhas" value="deAZ">
                <label for="">De A-Z</label>

                <input type="radio" id="escolha4" name="escolhas" value="deZA">
                <label for="">De Z-A</label>
            </div>
        </form>

    </main>

</body>

</html>