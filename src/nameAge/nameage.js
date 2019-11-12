import React from 'react';
import './nameage.css';

const NameAge = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p onClick={props.click}>Your age: {props.age}</p>
      <input className="text" type="text" onChange={props.changed} value={props.name} />
    </div>
  );
}

export default NameAge;