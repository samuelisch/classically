import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicCall from "../apiCalls/musicCall";
import { RandomWorkType } from "../components/assets/types";

type RandomWorkState = {
  status: "loading" | "idle" | "loaded";
  error: string | null;
  recommendedWorks: RandomWorkType[];
};

const initialState = {
  status: "idle",
  recommendedWorks: [],
  error: null,
} as RandomWorkState;

export const recommendedWorksSlice = createSlice({
  name: "recommendedWorks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRecommendedWorks.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchRecommendedWorks.fulfilled, (state, action) => {
      state.recommendedWorks = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchRecommendedWorks.rejected, (state, action) => {
      if (action.payload) {
        state.error = "Failed to fetch composers";
      }
      state.status = "idle";
    });
  },
});

export const fetchRecommendedWorks = createAsyncThunk<RandomWorkType[]>(
  "recommended/init",
  async () => {
    const data = await musicCall.getRandomWorks();
    const slicedWorks = data.works.slice(0, 6);
    return slicedWorks;
  }
);

export default recommendedWorksSlice.reducer;
