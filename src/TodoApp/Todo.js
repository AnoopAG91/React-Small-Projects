import React, { useState } from 'react'
import styles from '../TodoApp/Todo.css'

function Todo() {
    const [items, setItems] = useState("");
    const[addItems, setAddItems] = useState([])

    function handleClick(){
        setAddItems([...addItems, items])
        setItems("")
    }

    function handleDelete(index){
     const removedItems = addItems.filter((elem, id)=>{
       return index != id
     })
     setAddItems(removedItems) 
    }
  
  return (
    <div className={styles.container}>T
         <h1>TODO APP</h1>
         <input type='text' placeholder='Enter Items' value={items} onChange={(e) => setItems(e.target.value)}/>
         <button onClick={handleClick}>Add</button>
         {
            addItems.map((item, index) =>(
                <div key={index}>
                    <span>{item}</span>
                    <button onClick={()=> handleDelete(index)}>Delete</button>
                </div>
            ))
         }

    </div>
  )
}

export default Todo