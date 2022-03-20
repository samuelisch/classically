import { configureStore } from '@reduxjs/toolkit';
import composersSlice from './composersSlice';
import popularSlice from './popularSlice';

export const store = configureStore({
  reducer: {
    composers: composersSlice,
    popular: popularSlice,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch