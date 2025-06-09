function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);
    total = parseInt(document.getElementById(`qtd-${tipo}`).innerHTML);
    if (qtd > total) {
        alert('Quantidade indisponível.');
    } else {
        document.getElementById(`qtd-${tipo}`).innerHTML = total - qtd;
    }
}
