import React from 'react';

const Number = props => {
  const parsed = parseInt(props.id)

  if (isNaN(parsed)) {
    console.log("Is not a number")
  }
  return (
    <p>The number is: </p> 
  )
}

export default Number;