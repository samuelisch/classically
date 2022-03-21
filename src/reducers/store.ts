import { configureStore } from '@reduxjs/toolkit';
import composersSlice from './composersSlice';
import dumpSlice from './dumpSlice';
import popularSlice from './popularSlice';

export const store = configureStore({
  reducer: {
    composers: composersSlice,
    popular: popularSlice,
    dump: dumpSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch