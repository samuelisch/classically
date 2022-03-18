import { configureStore } from '@reduxjs/toolkit';
import composersSlice from './composersSlice';

export const store = configureStore({
  reducer: {
    composers: composersSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch