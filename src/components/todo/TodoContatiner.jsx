
import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'



var list=[
  { Task:"wakeup", isComplete:false},
  { Task:"run", isComplete:true},
  { Task:"ready", isComplete:false},
  { Task:"lunch", isComplete:false},
  { Task:"study", isComplete:false},
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
