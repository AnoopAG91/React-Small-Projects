import React,{ createContext } from 'react'
import Child1 from './Child1'

const data = createContext();
const data1= createContext();

function Parent() {
    const name = "Anoop"
    const age= 30;
  return (
    <data.Provider value={name}>
        <data1.Provider value={age}>
    <Child1/>
    </data1.Provider>
    </data.Provider> 
  )
}

export default Parent
export {data, data1}