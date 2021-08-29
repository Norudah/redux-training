import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  isDisplayed: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    // ? : Will not work. Why the method version bellow works but the property which contains the functions does not work ?
    // increment: (state) => state.counter++,

    increment(state) {
      state.counter++;
    },

    decrement(state) {
      state.counter--;
    },

    toggle(state) {
      state.isDisplayed = !state.isDisplayed;
    },

    increaseBy(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;