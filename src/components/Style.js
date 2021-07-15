import React from 'react';


const Style = props => {
  const styleWord = {
    backgroundColor: props.color1,
    color: props.color2
    }
  return (


    <p style={ styleWord }>{props.id} </p> 
  )
}

export default Style;