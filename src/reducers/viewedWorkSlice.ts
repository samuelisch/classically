import { createSlice } from "@reduxjs/toolkit";
import { WorkType } from "../components/works/WorkPage";
import { ComposerType } from "./composersSlice";

type ViewedWorkType = {
  workComposer: ComposerType,
  viewedWork: WorkType
}

const initialState: ViewedWorkType[] = []

const viewedWorkSlice = createSlice({
  name: 'viewedWorks',
  initialState,
  reducers: {
    addViewedWorks(state, action) {
      if (state.find(obj => obj.viewedWork.id === action.payload.viewedWork.id) === undefined) {
        if (state.length >= 6) {
          state.pop();
        }
        state.unshift(action.payload)
      }
    }
  }
})

export const { addViewedWorks } = viewedWorkSlice.actions

export default viewedWorkSlice.reducer;