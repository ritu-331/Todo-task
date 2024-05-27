
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'



var list=[
  { Task:"" },
  { Task:"" },
  { Task:""},
  { Task:"" },
  { Task:"" },
]
function TodoContatiner  () {
const [Task, setTask] =useState(list)
const addTask=  (nextTask) => {
 
 setTask([...Task,nextTask])
}
  return (
   <>
   <TodoList listOfTask={Task}/>
  <TodoForm add={addTask}/>
  
   </>
  )
}

export default TodoContatiner
