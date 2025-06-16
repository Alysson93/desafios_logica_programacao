let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    if (amigo == '') alert('Campo vazio')
    else if (amigos.includes(amigo)) alert('Nome já adicionado');
    else {
        amigos.push(amigo);
        document.getElementById('lista-amigos').innerHTML = amigos;
        document.getElementById('nome-amigo').value = '';
    }
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos.')
        return
    }
    amigos.sort();
    let sorteio = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML += amigos[i] + ' --> ' + amigos[i+1] + '<br>';
        }
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}