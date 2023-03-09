import { configureStore } from "@reduxjs/toolkit";

import alertSlice from "./Features/alert-slice";

export const store = configureStore({
  reducer: {
    alertSlice,
  },
});
