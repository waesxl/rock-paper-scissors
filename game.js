const startGame = document.querySelector('.btn-start-game'),
      countGame = document.querySelector('#number-of-games'),
      userInput = document.querySelector('#user-item');

function game (input, countGame) {
    const comp = getComputerChoice();
    return playRound(input.value.toLowerCase(), comp)
}

function getComputerChoice() {
    const option = Math.floor(Math.random() * 3);
    if (option === 0) return 'камень';
    if (option === 1) return 'ножницы';
    if (option === 2) return 'бумага';
};

function playRound(playerSelection, computerSelection) {

    if(playerSelection == 'камень' && computerSelection == 'ножницы' ) {
        return 'Победил пользователь!'
    }

    if(playerSelection == 'камень' && computerSelection == 'бумага' ) {
        return 'Победил компьютер!'
    }

    if(playerSelection == 'бумага' && computerSelection == 'камень' ) {
        return 'Победил пользователь!'
    }

    if(playerSelection == 'бумага' && computerSelection == 'ножницы' ) {
        return 'Победил компьютер!'
    }

    if(playerSelection == 'ножницы' && computerSelection == 'бумага' ) {
        return 'Победил пользователь!'
    }

    if(playerSelection == 'ножницы' && computerSelection == 'камень' ) {
        return 'Победил компьютер!'
    }

    if(playerSelection == 'камень' && computerSelection == 'камень' ) {
        return 'Победила дружба!'
    }
};

startGame.addEventListener('click', (e) => {
    e.preventDefault();
    const count = countGame.value;

    for(let k = 1; k <= count; k++) {
        const result = game(userInput);
        const el = document.createElement('div');
        el.className = 'result-game'
        el.textContent = `Игра №${k}: ${result}`;
        document.querySelector('.game').append(el)
    };
});

countGame.addEventListener('change', () => {
    const allResults = document.querySelectorAll('.result-game');
    allResults.forEach(item => {
        item.remove();
    })
})