import { configureStore } from "@reduxjs/toolkit";
import composersSlice from "./composersSlice";
import popularSlice from "./popularSlice";
import viewedComposerSlice from "./viewedComposersSlice";
import viewedWorkSlice from "./viewedWorkSlice";

export const store = configureStore({
  reducer: {
    composers: composersSlice,
    popular: popularSlice,
    viewedComposers: viewedComposerSlice,
    viewedWorks: viewedWorkSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
