import { configureStore } from "@reduxjs/toolkit";
import chipDataSlicer from "./features/chipDataSlicer/chipDataslicer";
import ratingNextSlicer from "./features/ratingNextSlicer/ratingNextSlicer";
export const store = configureStore({
  reducer: {
    chipDataSlicer,
    ratingNextSlicer,
  },
});
