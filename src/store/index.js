import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggle: false };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

// const store = createStore(counterSlice.reducer);
const store = configureStore({
  reducer : counterSlice.reducer
})
export const CounterAction = counterSlice.actions;

export default store;
