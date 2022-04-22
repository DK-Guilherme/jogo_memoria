const cards = [
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    }, {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }, {
        name: 'milkshake',
        img: 'images/milkshake.png'
    }
];

let points = 0;

const gamePanel = document.querySelector('.game-panel');
let cardsChoosenList = [];

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

// logica pra colocar os cards na mesa
function initGame() {
    shuffle(cards);
    for (let i = 0; i < cards.length; i++) {
        // colocar ele no game panel
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.addEventListener('click', function () {
            flipCard(i);
        });
        card.setAttribute('id', i);
        card.classList.add('card')
        gamePanel.appendChild(card);
    }
}

// checar se as cartas são as mesmas depois de clicar
function checkMatch() {
    let card1 = document.getElementById(cardsChoosenList[0]);
    let card2 = document.getElementById(cardsChoosenList[1]);


    if (cards[cardsChoosenList[0]].name == cards[cardsChoosenList[1]].name) {
        card1.classList.add('pair-cards');
        card2.classList.add('pair-cards');
        points++;
        alert('Você encontrou um par!');
        alert(`Pontos: ${points}`);
    }
    else {
        card1.setAttribute('src', 'images/blank.png');
        card2.setAttribute('src', 'images/blank.png');
    }
}

// vira a carta
function flipCard(id) {
    if (cardsChoosenList.length == 2) return;
    if (cardsChoosenList.includes(id)) return;
    const cardChoosen = document.getElementById(id);
    cardChoosen.setAttribute('src', cards[id].img);
    cardsChoosenList.push(id);
    if (cardsChoosenList.length == 2) {
        setTimeout(() => {
            checkMatch();
            cardsChoosenList = [];
        }, 750);
    }
}

function reset() {

    let cardContainer = document.querySelector('.game-panel');
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild);
    }
    initGame();
    points = 0;
}

initGame();