import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Hello {props.name}'s</p>
            <p>Whats the weather in {props.city}?</p>
        </div>
    )
}

export default userOutput;