import { createStore } from 'redux';
import { createSlice, createReducer, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0, isCounterOpen: true };

// It's an alternative of reducer function.
const counterSlice = createSlice({
  name: 'counter',
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
    toggleCounter(state) {
      state.isCounterOpen = !state.isCounterOpen;
    },
  },
});

// Create the store.
const store = createStore(counterSlice.reducer);

// Export it.
export const counterActions = counterSlice.actions;
export default store;
