import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import musicCall from "../apiCalls/musicCall";

export type ComposerWorkType = {
  genre: string,
  subtitle: string,
  title: string,
}

type DumpComposerType = {
  birth: string,
  complete_name: string,
  death: string,
  epoch: string,
  name: string,
  works: ComposerWorkType[]
}

type DumpState = {
  status: "loading" | "idle" | "loaded";
  error: string | null;
  dumpList: DumpComposerType[],
}

const initialState = {
  status: 'idle',
  dumpList: [],
  error: null,
} as DumpState

export const dumpSlice = createSlice({
  name: 'dump',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEverything.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchEverything.fulfilled, (state, action) => {
      state.dumpList = action.payload;
      state.status = "loaded";
    });
    builder.addCase(fetchEverything.rejected, (state, action) => {
      if (action.payload) {
        state.error = "Failed to fetch composers";
      }
      state.status = "idle";
    });
  },
})

export const fetchEverything = createAsyncThunk<DumpComposerType[]>(
  "dump/init",
  async () => {
    const data = await musicCall.getEverything();
    console.log('fetched')
    return data.composers;
  }
);

export default dumpSlice.reducer;