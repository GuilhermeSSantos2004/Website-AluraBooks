const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? FilterPorDisponibilidade() : livros.filter(livro => livro.categoria == categoria)
    exibirOsLivrosNaTela(livrosFiltrados)
    if (categoria == 'disponivel') {
        exibirValorTortalDosLivrosDisponiveisNaTela()
    }
}

function FilterPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTortalDosLivrosDisponiveisNaTela(){
    elementoComValorTotalDeLIvroDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">299,00</span></p>
    </div>
    `
}