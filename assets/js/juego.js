/*
    2C = Two of Clubs
    2D = Two of Diamonds
    2H = Two of Hearts
    2S = Two of Spades
*/

let deck            = [];
const tipos         = ['C', 'D', 'H', 'S'];
const especiales    = ['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora = 0;

// Referencias del HTML
const btnPedir = document.querySelector('#btnPedir');
const lblPuntos = document.querySelectorAll('small');
const divCartasJugador = document.querySelector('#jugador-cartas');


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

// Funcion para obtener el valor de una carta
const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1);

    return    ( isNaN(valor) ) ?
                    (( valor === 'A' ) ? 11 : 10):
                    valor * 1;
}

deck = crearDeck();
console.info(deck);

// Eventos
btnPedir.addEventListener('click', () => {
    const carta = pedirCarta();
    puntosJugador += valorCarta(carta);
    lblPuntos[0].innerText = puntosJugador;

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('cartas');
    divCartasJugador.append(imgCarta);

    if ( puntosJugador > 21 ){
        console.warn('You Lose');
        btnPedir.disabled = true;
    }else if ( puntosJugador === 21 ){
        console.warn('21, genial!');
        btnPedir.disabled = true;
    }
});
