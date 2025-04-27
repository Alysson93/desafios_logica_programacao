function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeros = [];
    for (let i = 0; i < quantidade; i++) {
        let valor;
        do {
            valor = Math.floor(Math.random() * (ate - de + 1)) + de;
        } while(numeros.includes(valor) || numeros.length > quantidade);
        numeros.push(valor);
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numeros}</label>`
    alterarBotao();
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarBotao();
}

function alterarBotao() {
    let sortear = document.getElementById('btn-sortear');
    let reiniciar = document.getElementById('btn-reiniciar');
    if (sortear.classList.contains('container__botao')) {
        console.log('ok');
        sortear.classList.remove('container__botao');
        sortear.classList.add('container__botao-desabilitado');
        reiniciar.classList.remove('container__botao-desabilitado');
        reiniciar.classList.add('container__botao');
    } else {
        sortear.classList.remove('container__botao-desabilitado');
        sortear.classList.add('container__botao');
        reiniciar.classList.remove('container__botao');
        reiniciar.classList.add('container__botao-desabilitado');
    }
}
