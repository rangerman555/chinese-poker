import { HandType, GameType, CardType } from '../redux/gameSlice';


export const initGame: () => GameType = () => {
    const deck = getDeck();
    const { hands0, hands1 } = initHands(deck);
    return {
        deck,
        players: {
            '0': {
                hands: hands0
            },
            '1': {
                hands: hands1
            }
        }
    }
}

export const initHands = (deck: CardType[]) => {
    const hands0: HandType[] = [];
    const hands1: HandType[] = [];
    for (let i = 0; i < 5; i++) {
        hands0[i] = { cards: [deck.pop()!], score: 0}
        hands1[i] = { cards: [deck.pop()!], score: 0}
    }

    return {hands0, hands1}
}


export const getDeck = () => {
    const cardsByName: CardType[] = [];
    const baseCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]
    baseCards.forEach(c => {
        cardsByName.push({
            name: `${c}C`,
            suit: 'clubs',
            value: 0,
            open: true
        }, {
            name: `${c}D`,
            suit: 'diamond',
            value: 0,
            open: true
        },{
            name: `${c}H`,
            suit: 'clubs',
            value: 0,
            open: true
        }, {
            name: `${c}S`,
            suit: 'diamond',
            value: 0,
            open: true
        })
    })
    return cardsByName;
}

export const getCardFromDeck = () => {
    return {
        name: `5S`,
        suit: 'diamond',
        value: 0,
        open: true
    }
}