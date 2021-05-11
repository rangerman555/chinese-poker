import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CardType {
    name: string;
    suit: string;
    value: number;
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
}

const initialState: GameType = {
    deck: [],
    players: {}
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
        }
    }
})

export const { initDeck, initGame } = gameSlice.actions;

export default gameSlice.reducer;
