import React from 'react'

function PropChild(props) {
  return (
    <div>
      <h1>My name is {props.name}. I am {props.age} years old guy from {props.place}</h1>
    </div>
  )
}

export default PropChild