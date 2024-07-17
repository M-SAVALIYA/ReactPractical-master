import { configureStore } from "@reduxjs/toolkit";
import reduxSlice from "../Slice/reduxSlice";
export const store = configureStore({
  reducer: {
    product : reduxSlice
  },
});
