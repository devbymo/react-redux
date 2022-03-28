import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const { counter, isCounterOpen } = useSelector((state) => state);

  // INC
  const incrementHandler = () => {
    dispatch({ type: 'inc' });
  };

  // increase
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 });
  };

  // DEC
  const decrementHandler = () => {
    dispatch({ type: 'dec' });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
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
