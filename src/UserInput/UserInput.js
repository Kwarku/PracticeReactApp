import React from 'react';

const userInput = (props) => {
    return <input onChange={props.change} value={props.normalName} type="text"/>;
}


export default userInput;