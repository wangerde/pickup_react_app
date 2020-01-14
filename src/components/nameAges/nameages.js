import React, { Component } from 'react';
import NameAge from './nameAge/nameage';

class Nameages extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('Nameages.js getDerivedStateFromProps');
        return null;
    }

    componentWillUnmount() {
        console.log('nameageS will unmount');
    }

    render() {
        console.log('nameages rendering...');
        return this.props.nameages.map((nameage, index) => {    
        return <NameAge 
            click={()=>this.props.clicked(index)}
            name={nameage.name} 
            age={nameage.age}
            key={nameage.id}
            changed={(event)=> this.props.changed(event, nameage.id)} />
    });
    }
}

export default Nameages;
