import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isConnected: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isConnected = true;
    },

    logout(state) {
      state.isConnected = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
