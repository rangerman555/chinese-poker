import { configureStore } from '@reduxjs/toolkit'
import deckReducer from './deckSlice';

const store = configureStore({
  reducer: {
    deck: deckReducer
  },
})
export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch