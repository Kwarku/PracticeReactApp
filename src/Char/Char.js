import React from 'react';
import './Char.css'

const char = (props) => {
    return (
        <div className="CharElement"> 
            <p>{props.text}</p>
        </div>

    )
}

export default char;