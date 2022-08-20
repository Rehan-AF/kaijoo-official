import { createSlice } from "@reduxjs/toolkit";

const data = {
  data: [],
};
const chipDataSlicer = createSlice({
  name: "chipDataSlicer",
  initialState: data,
  reducers: {
    selectData: (state, action) => {
      if (action.payload) {
        if (!state.data.includes(action.payload)) {
          state.data.push(action.payload);
        }
      }
    },
    removeData: (state, action) => {
      if (action.payload) {
        state.data = state.data.filter((chip) => chip !== action.payload);
      }
    },
  },
});

export const { selectData, removeData } = chipDataSlicer.actions;
export default chipDataSlicer.reducer;
