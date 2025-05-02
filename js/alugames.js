function alterarStatus(id) {
    let li = document.getElementById(`game-${id}`);
    let div = li.querySelector('.dashboard__item__img');
    let a = li.querySelector('.dashboard__item__button');
    
    if (div.classList.contains('dashboard__item__img--rented')) {
        div.classList.remove('dashboard__item__img--rented');
        a.classList.remove('dashboard__item__button--return');
        a.textContent = 'Alugar';
    } else {
        div.classList.add('dashboard__item__img--rented');
        a.classList.add('dashboard__item__button--return');
        a.textContent = 'Devolver';
    }
}