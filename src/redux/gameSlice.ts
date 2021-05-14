import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardType {
    name: string;
    suit: string;
    value: number;
    open: boolean;
}

export interface HandType {
    cards: CardType[];
    score: number;
}

export interface PlayerType {
    hands: HandType[];
}

export interface GameType {
    deck: CardType[];
    players: {[id: string]: PlayerType}
    isActive?: boolean;
}

const initialState: GameType = {
    deck: [],
    players: {},
    isActive: false
}

const gameSlice = createSlice({
    name: 'game',
    initialState,
    reducers: {
        initDeck: (state, action: PayloadAction<CardType[]>) => {
            state.deck = action.payload;
        },
        initGame: (state, action: PayloadAction<GameType>) => {
            state.deck = action.payload.deck;
            state.players = action.payload.players;
        },
        addCard: (state, action: PayloadAction<{playerId: string, handId: number, card: CardType}>) => {
            const { playerId, handId, card } = action.payload;
            if (state.players[playerId].hands[handId].cards.length < 5) {
                state.players[playerId].hands[handId].cards.push(card);
            }
        },
        startGame: (state) => {
            state.isActive = true;
        },
        endGame: (state) => {
            state.isActive = false;
        }
    }
})

export const { 
    initDeck, 
    initGame, 
    addCard, 
    startGame, 
    endGame 
} = gameSlice.actions;

export default gameSlice.reducer;
