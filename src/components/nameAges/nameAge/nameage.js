import React from 'react';
import Radium from 'radium';
import './nameage.css';

const NameAge = (props) => {
  return (
    <div className="nameage">
      <h1>{props.name}</h1>
      <p onClick={props.click}>Your age: {props.age}</p>
      <input className="text" type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default Radium(NameAge);