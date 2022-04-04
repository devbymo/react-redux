import { createStore } from 'redux';
import { createSlice, createReducer, configureStore } from '@reduxjs/toolkit';

const counterInitialState = { counter: 0, isCounterOpen: true };
const authInitialState = { isAuth: false };

// Counter slice.
const counterSlice = createSlice({
  name: 'counter',
  initialState: counterInitialState,
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

// Authntication slice.
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

// Create the store.
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer,
  },
});
// const store = configureStore({
//   reducer: counterSlice.reducer,
// });
// const store = createStore(counterSlice.reducer);

// Export it.
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;
