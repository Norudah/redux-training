import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter);
  const isDisplayed = useSelector((state) => state.counter.isDisplayed);
  const dispatch = useDispatch();

  // OLD

  // const decrementHandler = () => dispatch({ type: "DECREMENT" });
  // const incrementHandler = () => dispatch({ type: "INCREMENT" });
  // const increaseByHandler = () => dispatch({ type: "INCREASE_BY", value: 10 });
  // const toggleCounterHandler = () => dispatch({ type: "TOGGLE" });

  // MODERN

  const decrementHandler = () => dispatch(counterActions.decrement());
  const incrementHandler = () => dispatch(counterActions.increment());
  const increaseByHandler = () => dispatch(counterActions.increaseBy(10));
  const toggleCounterHandler = () => dispatch(counterActions.toggle());

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {isDisplayed && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={decrementHandler}>Decrement</button>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseByHandler}>Increase by 10</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
