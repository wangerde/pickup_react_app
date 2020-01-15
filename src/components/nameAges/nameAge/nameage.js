import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';

import classes from './nameage.css';

class NameAge extends Component {
  constructor(){
    super();
    this.inputElementRef = React.createRef();
  }
  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    return (
      <Aux>
        {this.props.isAuth ? <p>Authenticated!</p>:<p>Please log in!</p>}
        <h1>{this.props.name}</h1>,
        <p onClick={this.props.click}>Your age: {this.props.age}</p>,
        <input 
          className="text" 
          // ref={(inputEl)=>{this.inputElement = inputEl}}
          ref={this.inputElementRef}
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} />
      </Aux>
    );
  }
}

NameAge.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(NameAge, classes.NameAge);