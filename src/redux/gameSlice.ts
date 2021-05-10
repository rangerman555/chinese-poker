import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface HandType {
    cards: string[];
    score: number;
}

export interface PlayerType {
    hands: HandType[];
}

export interface GameType {
    deck: string[];
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
        initDeck: (state, action: PayloadAction<string[]>) => {
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
