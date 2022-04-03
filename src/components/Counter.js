import { useSelector, useDispatch } from 'react-redux';

import { counterActions } from '../store/index';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, isCounterOpen } = useSelector((state) => state);

  // INC
  const incrementHandler = () => {
    // dispatch({ type: 'inc' });
    dispatch(counterActions.increment()); // {type: unique_identifier, payload: null}
  };

  // increase
  const increaseHandler = () => {
    // dispatch({ type: 'increase', amount: 5 });
    dispatch(counterActions.increase(10)); // {type: unique_identifier, payload: 10}
  };

  // DEC
  const decrementHandler = () => {
    // dispatch({ type: 'dec' });
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    // dispatch({ type: 'toggle' });
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isCounterOpen && (
        <>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>INC</button>
            <button onClick={increaseHandler}>INC 5</button>
            <button onClick={decrementHandler}>DEC</button>
          </div>
        </>
      )}
      <button onClick={toggleCounterHandler}>
        {isCounterOpen ? 'Close' : 'Open'}
      </button>
    </main>
  );
};

export default Counter;
