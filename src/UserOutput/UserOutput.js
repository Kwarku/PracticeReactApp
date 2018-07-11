import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello {props.name}'s</p>
            <p>Whats the weather in {props.city}?</p>
        </div>
    )
}

export default userOutput;