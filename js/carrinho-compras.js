let valorCarrinho = 0;
document.getElementById('lista-produtos').innerHTML = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function adicionar() {
    let produto = document.getElementById('produto').value.split('- R$');
    let nome = produto[0];
    let valorUnitario = parseInt(produto[1]);
    let quantidade = parseInt(document.getElementById('quantidade').value || 1);
    
    let valorTotal = valorUnitario * quantidade;

    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML += `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$ ${valorTotal}</span>
        </section>
    `

    valorCarrinho += valorTotal;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$${valorCarrinho}`;
    document.getElementById('quantidade').value = 1;
}


function limpar() {
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = '';

    valorCarrinho = 0;

    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$${valorCarrinho}`;
}