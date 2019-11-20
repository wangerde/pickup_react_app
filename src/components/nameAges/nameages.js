import React from 'react';
import NameAge from './nameAge/nameage';

const nameages = (props) => 
    props.nameages.map((nameage, index) => {
        return <NameAge 
            click={()=>props.clicked(index)}
            name={nameage.name} 
            age={nameage.age}
            key={nameage.id}
            changed={(event)=> props.changed(event, nameage.id)} />
    });

export default nameages;
