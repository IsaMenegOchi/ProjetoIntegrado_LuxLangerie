<!DOCTYPE html>
<html lang="pt-BR">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="header.css" />
        <title>Header</title>
    </head>

    <body>
        <header>
                <form action="" id="formPesquisa">
                    <input type="text" id="caixaPesquisa" placeholder="O que você procura?" />
                    <a href="index.php" id="containerLupa">
                        <img src="../icons/lupa-de-pesquisa.svg" alt="" id="lupa" />
                    </a>
                </form>

                <div id="containerLogo">
                    <img src="../icons/logo-lux.png" alt="" id="luxLogo" />
                </div>

                <div class="menuCliente">
                    <div class="clienteMenuProdutos">
                        <img src="../icons/shopping_bag_black_24dp 1.svg" alt="" id="iconeSacola" />
                        <p class="textoCliente">Meus produtos</p>
                    </div>

                    <div class="clienteMenuFavoritos">
                        <img src="../icons/favorite_border_black_24dp 2.svg" alt="" id="iconeCoracao" />
                        <p class="textoCliente">Meus favoritos</p>
                    </div>
                </div>

            <div class="navegacao">
                <a href="index.php"> Início </a>
                <a href="index.php"> Produtos </a>
                <a href="index.php"> Quem somos </a>
                <a href="index.php"> Trocas e devoluções </a>
                <a href="index.php">
                    <img src="../icons/person_black_24dp 1.svg" alt="" id="iconePerfil" />
                </a>
            </div>
        </header>
    </body>
</html>
