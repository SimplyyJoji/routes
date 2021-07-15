import React from 'react';

const Hello = props => {
    const parsed = parseInt(props.id)
  
    if (isNaN(parsed)) {
    return ( 
      <p>The Word is: {props.id}</p> 
    )
    } else {
      return (
      <p>The number is: {props.id}</p> 
        )
      
    }
  }


export default Hello