import React from 'react';

const minSize = 5;
const maxSize = 10;

const validator = (props) => {

    let text  = null;

    if(props.size <= minSize){
        text = 'This text is so short'
    }else if(props.size > minSize && props.size <= maxSize){
        text = 'This text lenght is fine';
    }else if(props.size > maxSize){
        text = 'This text is to long';
    }

    return (<div>
         <p>{text}</p> 
         </div>

       
    )
}

export default validator;