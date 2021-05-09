import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

interface DeckReducer {
    cardsByName: string[];
}

const initialState: DeckReducer = {
    cardsByName: []
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        initCards: (state, action: PayloadAction<string[]>) => {
            state.cardsByName = action.payload;
        }
    }
    
})

export const { initCards } = deckSlice.actions;

export default deckSlice.reducer;