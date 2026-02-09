import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import {CounterAction} from '../store/index'
const Counter = () => {
  const toggleCounterHandler = () => {
    dispatch(CounterAction.toggle());
  };
  const counter = useSelector((state) => state.counter);
  const showToggle = useSelector((state) => state.toggle);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(CounterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(CounterAction.decrement());
  };
  const increasesHandler = () => {
    dispatch(CounterAction.increase(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showToggle && <div className={classes.value}>{counter}</div>}
      <div className="counter">
        <button onClick={incrementHandler}>increment</button>
        <button onClick={increasesHandler}>Increases</button>
        <button onClick={decrementHandler}>decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
