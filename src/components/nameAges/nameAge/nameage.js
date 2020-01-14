import React, { Component } from 'react';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

import classes from './nameage.css';

class NameAge extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('Nameage.js getDerivedStateFromProps');
    return null;
  }

  render() {
    return (
      <Aux>
        <h1>{this.props.name}</h1>,
        <p onClick={this.props.click}>Your age: {this.props.age}</p>,
        <input className="text" type="text" onChange={this.props.changed} value={this.props.name} />
      </Aux>
    );
  }
}

export default withClass(NameAge, classes.NameAge);