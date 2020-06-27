import React from 'react';
import { useCountValue, useActions } from '../../redux/counter';
import classes from './Counter.module.css';

const Counter = (props) => {
  /**
   *  Get count value from Redux store. We defined selector
   *  (state => state.counter.value) inside counter feature folder,
   *  to make component global state agnostic
   */
  const count = useCountValue();

  /** Create incrementCounter action, using custom hook from feature */
  const { incrementCounter } = useActions();

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Sync counter</h2>
      <button
        className={classes.button}
        type="button"
        onClick={incrementCounter}>
        Increment by one
      </button>
      <div>
        Total value: <strong>{count}</strong>
      </div>

      <img src={`${props.user.profileImg}`} className="rounded-circle display-pic" alt="..."></img>
      <button variant="danger" onClick={props.logout}>Logout</button>
    </div >
  );
};

export default Counter;
