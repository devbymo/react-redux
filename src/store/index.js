import { createStore } from 'redux';

const initialState = { counter: 0, isCounterOpen: true };

const counterReducer = (oldState = initialState, action) => {
  // Never ever mutate the state.
  // if (action.type === 'inc') {
  //   oldState.counter++;

  //   return oldState;
  // }

  if (action.type === 'inc') {
    return {
      ...oldState,
      counter: oldState.counter + 1,
    };
  }

  if (action.type === 'increase') {
    return {
      ...oldState,
      counter: oldState.counter + action.amount,
    };
  }

  if (action.type === 'dec') {
    return {
      ...oldState,
      counter: oldState.counter - 1,
    };
  }

  if (action.type === 'toggle') {
    return {
      ...oldState,
      isCounterOpen: !oldState.isCounterOpen,
    };
  }

  return oldState;
};

const store = createStore(counterReducer);

export default store;
