import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicCall from "../musicCall";
import type { RootState } from "./store";
import type { ComposerType } from "./composersSlice";

type PopularState = {
  status: "loading" | "idle" | "loaded";
  error: string | null;
  popularList: ComposerType[];
};

const initialState = {
  status: 'idle',
  popularList: [],
  error: null,
} as PopularState

export const popularSlice = createSlice({
  name: 'popular',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPopularComposers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchPopularComposers.fulfilled, (state, action) => {
      state.popularList = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchPopularComposers.rejected, (state, action) => {
      if (action.payload) {
        state.error = "Failed to fetch composers";
      }
      state.status = "idle";
    });
  },
})

export const selectStatus = (state: RootState) => state.popular.status
export const selectComposers = (state: RootState) => state.popular.popularList;

export const fetchPopularComposers = createAsyncThunk<ComposerType[]>(
  "popular/init",
  async () => {
    const data = await musicCall.getPopularComposers();
    return data.composers;
  }
)

export default popularSlice.reducer;