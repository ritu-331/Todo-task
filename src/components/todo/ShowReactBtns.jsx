import React, { useState } from 'react'
import TodoFormBtns from './TodoFormBtns'
import TodoReactBtn from './TodoReactBtn'

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

export default function ShowReactBtns() {
const[listOfTasks,setListOfTasks]=useState(tasks)
const filter =(status) =>{
    setListOfTasks(tasks.filter((item)=>status ==item.status))
   
}


  return (
   <>
    <div className='flex'> 
 <div onClick={()=>{filter()}}><TodoFormBtns btntext="All" color="blue"/></div>
 <div onClick={()=>{filter(true)}}><TodoFormBtns btntext="Completed" color="green"/></div>
 <div onClick={() =>{filter(false)}}><TodoFormBtns btntext="Incompleted" color="red"/></div>
 </div>
 <TodoReactBtn data={listOfTasks}/>
   </>
  )
}
