/*
    2C = Two of Clubs
    2D = Two of Diamonds
    2H = Two of Hearts
    2S = Two of Spades
*/

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

// Creacion del deck ya barajado
const crearDeck = () => {
    for (let i = 2; i <= 10; i++){
        for (let tipo of tipos)
            deck.push(i + tipo);
    }

    for (let especial of especiales){
        for (let tipo of tipos)
            deck.push(especial + tipo);
    }

    return _.shuffle(deck);
}

// Funcion para tomar una carta de la baraja
const pedirCarta = () => {
    if (deck.length === 0) throw 'No hay cartas';

    let carta = deck.pop();
    return carta;
}


deck = crearDeck();
console.info(deck);
let carta = pedirCarta();
console.info(carta);
console.info(deck);
