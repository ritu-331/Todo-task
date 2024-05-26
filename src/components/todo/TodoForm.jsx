
import React, { useState } from 'react'
import TodoReactBtn from './TodoReactBtn'
import TodoFormBtns from './TodoFormBtns'
import TodoInputBtn from './TodoInputBtn'


let tasks=[
  {
      task:"First - ",
      time:"7 AM",
      status:false
  },
  {
      task:"Second - ",
      time:"8 AM",
      status:true
  }
]

function TodoForm() {
  const[listOfTasks,setListOfTasks]=useState([])
  
  const filterL =(status) =>{
      setListOfTasks(tasks.filter((item)=>status == undefined ? true : status==item.status))
     
  }



function addnewwork(newtask) {
  listOfTasks.push( newtask)
setListOfTasks([...listOfTasks])
}

const updatework=(taskToUpdate)=>{
let index = listOfTasks.indexOf(taskToUpdate)
listOfTasks[index] ={...taskToUpdate, status:!taskToUpdate.status}
setListOfTasks([...listOfTasks])
}

  return (
    <>
    <div className='flex justify-center items-center'>
     <div id="container"className='flex justify-center items-center h-[70vh] w-[80vw] bg-gray-900 rounded-lg ml-4' >
 <div className='h-[60vh] w-[70vw] bg-gray-600 flex flex-col items-center overflow-y-auto'>
  <TodoInputBtn addwork={addnewwork}/>
 
 <div className='flex'> 
 <TodoFormBtns btntext="All" color="blue" filter={() =>{filterL()}}/>
 <TodoFormBtns btntext="Completed" color="green" filter={() =>{filterL(true)}}/>
 <TodoFormBtns btntext="Incompleted" color="red" filter={() =>{filterL(false)}}/>
 </div>
 <TodoReactBtn data={listOfTasks} updatework={updatework}/>
 
 </div>
  </div>    
  </div>



    </>
  )
}

export default TodoForm
