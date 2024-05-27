
import React, { useState } from 'react'
import TodoReactBtn from './TodoReactBtn'
import TodoFormBtns from './TodoFormBtns'
import TodoInputBtn from './TodoInputBtn'




function TodoForm() {
  const[listOfTasks,setListOfTasks]=useState([])
  const[templist,setTemplist]=useState([])
  
  
  const filterL =(status) =>{
      setListOfTasks(templist.filter((item)=>status == undefined ? true : status==item.status))
     
  }



function addnewwork(newtask) {
  setTemplist([...templist,newtask])
setListOfTasks([...templist,newtask])
}

const updatework=(taskToUpdate)=>{
let index = templist.indexOf(taskToUpdate)
templist[index] ={...taskToUpdate, status:!taskToUpdate.status}
setTemplist([...templist])
setListOfTasks([...templist])
}

const deletework=(taskToUpdate)=>{
  let index = templist.indexOf(taskToUpdate)
  templist.splice(index,1)
  setTemplist([...templist])
  setListOfTasks([...templist])
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
 <TodoReactBtn data={listOfTasks} updatework={updatework} deletework={deletework}/>
 
 </div>
  </div>    
  </div>



    </>
  )
}

export default TodoForm
