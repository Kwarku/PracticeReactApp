import React from 'react';

const validator = (props) => {

    let text  = null;

    if(props.size <= 5){
        text = 'This text is so short'
    }else if(props.size > 5 && props.size < 11){
        text = 'This text lenght is fine';
    }else if(props.size >= 11){
        text = 'This text is to long';
    }

    return (<div>
         <p>{text}</p> 
         </div>

       
    )
}

export default validator;