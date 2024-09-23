function criaCartao (categoria, pergunta, resposta) {
    let container = document.getElementById('container')
    let cartao = document.createElement('article')
        cartao.className = 'cartao'
}
cartao.innerHTML = `
<div class="cartao__conteudo">
<h3>$Que livro é esse?</h3>
<div class="cartao__conteudo__pergunta">
        <p>$Uma princesa perdida que precisa retomar o trono e enfrentar inimigos..</p>
</div>
<div class="cartao__conteudo__resposta">
        <p>$Trono de VIdro.</p>
</div>
</div>
`
container.appendChild(cartao)