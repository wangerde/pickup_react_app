import React from 'react';

const Incubee = (props) => {

        return(
            <div className="incubee_info">
                <div className="incubee_name">{props.name}</div>
                <div className="incubee_age">{props.age}</div>
                <div className="incubee_process">{props.process}</div>
                <button className="delete_incubee" onChange={props.deleted}>Delete</button>
            </div>
        )
}

export default Incubee;