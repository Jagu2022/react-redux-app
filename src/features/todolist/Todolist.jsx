import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add, del } from './todoSlice'

function Todolist() {
   const todos = useSelector(state => state.todos.todos)
   const [item, setItem] = useState([])
   const dispatch = useDispatch()
   const handleItem = (e) => {
    setItem(e.target.value)
   }
   console.log(todos)
  return (
    <div>
        <h1>Todolist</h1>
        <input type='text'onChange={handleItem}/>
        <button onClick={()=>dispatch(add(item))}>add item</button>
        <ul>
            {
                todos.map((eachItem, i) => {
                    return (
                        <li key={Math.random()}>
                            {eachItem}
                            <button onClick={()=>dispatch(del(i))}>del</button>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Todolist