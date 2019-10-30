import React from 'react';
import './nameage.css';

const NameAge = (props) => {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>Your age: {props.age}</p>
    </div>
  );
}

export default NameAge;