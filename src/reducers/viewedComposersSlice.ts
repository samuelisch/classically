import { createSlice } from "@reduxjs/toolkit";
import { ComposerType } from "../components/assets/types";

const initialState: ComposerType[] = [];

const viewedComposerSlice = createSlice({
  name: "viewedComposers",
  initialState,
  reducers: {
    addViewedComposers(state, action) {
      if (
        state.find((composer) => composer.id === action.payload.id) ===
        undefined
      ) {
        if (state.length >= 6) {
          state.pop();
        }
        state.unshift(action.payload);
      }
    },
  },
});

export const { addViewedComposers } = viewedComposerSlice.actions;

export default viewedComposerSlice.reducer;
