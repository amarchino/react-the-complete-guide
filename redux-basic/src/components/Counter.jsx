import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementHandler = () => dispatch( counterActions.increment() );
  const decrementHandler = () => dispatch( counterActions.decrement() );
  const increaseHandler = () => dispatch( counterActions.increase(5) );

  const toggleCounterHandler = () => dispatch( counterActions.toggleCounter() );

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      { counter.showCounter && <div className={classes.value}>{ counter.counter }</div> }
      <div >
        <button onClick={ incrementHandler }>Increment</button>
        <button onClick={ increaseHandler }>Increase by 5</button>
        <button onClick={ decrementHandler }>Decrement</button>
      </div>
      <button onClick={ toggleCounterHandler }>Toggle Counter</button>
    </main>
  );
};

export default Counter;
