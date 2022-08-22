import { createSlice } from "@reduxjs/toolkit";

const data = {
  data: false,
};
const ratingNextSlicer = createSlice({
  name: "ratingNextSlicerer",
  initialState: data,
  reducers: {
    setNext: (state) => {
      state.data = true;
    },
    setCancel: (state) => {
      state.data = false;
    },
  },
});

export const { setNext, setCancel } = ratingNextSlicer.actions;
export default ratingNextSlicer.reducer;
