import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessage: [],
};

export const alertSlice = createSlice({
  name: "alertSlice",
  initialState,
  reducers: {
    setAlertMessage: (state, action) => {
      state.alertMessage.push(action.payload);
    },
  },
});

export const { setAlertMessage } = alertSlice.actions;
export default alertSlice.reducer;
