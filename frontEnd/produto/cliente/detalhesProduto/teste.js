
const criarHeader = () => {
    
    const novaDivSlide = document.createElement("div")
    novaDivSlide.id = `${limparId(urlImage)}`
    novaDivSlide.classList.add("slide")
    
    novaDivSlide.innerHTML = `
    <div class="imagem-container">
        <a href="" class="fechar">&#10006;</a>
        <a href="#zenitsu-agatsuma" class="navegacao anterior">&#171;</a>
        <img src="${urlImage}" alt="">
        <a href="#giyu-tomioka" class="navegacao proximo">&#187;</a>
    </div>`
}
