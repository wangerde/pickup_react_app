import React from 'react';

class Square extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: null,
      }
      console.log(this);
    }
    render() {
      return (
        <button 
          className="square" 
          onClick={() => {this.setState({value: 'X'});console.log(this)}}
        >
          {this.state.value}
        </button>
      );
    }
  }

export default Square;

