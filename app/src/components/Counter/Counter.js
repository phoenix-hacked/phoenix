import React from 'react';
import { useCountValue, useActions } from '../../redux/counter';
import classes from './Counter.module.css';

const Counter = (props) => {

  const Success = () => {
    return (
      <div className={classes.counter} >
        <h2 className={classes.header}>{props.user.name}</h2>

        <img src={`${props.user.profileImg}`} className="rounded-circle display-pic" alt="..."></img>
        <div>
          <button variant="danger" onClick={props.logout}>Logout</button>
        </div>
      </div >
    );
  }

  if(props.user.flow === "signup") {
    return (
      <div className={classes.counter}>
        <h2 className={classes.header}>{props.user.name}</h2>
        <h3> Complete the profile..</h3>
        <div>
          <span> Type</span><select>
            <option> Select type</option>
            <option> Individual</option>
            <option> Company/Institution</option>
          </select>
          <button> Submit</button>
        </div>
        <div>
          <button variant="danger" onClick={props.logout}>Cancel</button>
        </div>
      </div>
    )
  } else {
    return (
      <Success />
    )
  }

};

export default Counter;
