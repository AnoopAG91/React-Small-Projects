import React from 'react'
import PropChild from './PropChild'

function PropParent() {
  const obj = {
    name:"Anoop",
    age: 30,
    place: "Kerala"
  }
  return (
    <PropChild name={obj.name} age={obj.age} place={obj.place}/>
  )
}

export default PropParent