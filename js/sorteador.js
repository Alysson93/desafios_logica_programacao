function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
    let numeros = [];
    let result = 'Números sorteados: ';
    for (let i = 0; i < quantidade; i++) {
        let valor = Math.floor(Math.random() * (ate - de + 1)) + de;
        numeros.push(valor);
        result += `${valor} `;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = result;
    let btn_sortear = document.getElementById('btn-sortear');
    let btn_reiniciar = document.getElementById('btn-reiniciar');
    btn_sortear.setAttribute('disabled');
    btn_reiniciar.removeAttribute('disabled');
}

function reiniciar() {
    let quantidade = document.getElementById('quantidade');
    let de = document.getElementById('de');
    let ate = document.getElementById('ate');
    let resultado = document.getElementById('resultado');

}
