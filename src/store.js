import { configureStore } from "@reduxjs/toolkit";
import chipDataSlicer from "./features/chipDataSlicer/chipDataslicer";
export const store = configureStore({
  reducer: {
    chipDataSlicer,
  },
});
