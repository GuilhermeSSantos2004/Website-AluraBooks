let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    LivrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirOsLivrosNaTela(LivrosOrdenados)
}
