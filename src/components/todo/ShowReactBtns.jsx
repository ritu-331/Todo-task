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
const onbtnclick =() =>{
    setListOfTasks(tasks)
}


  return (
   <>
    <div className='flex'> 
 <div onClick={onbtnclick}><TodoFormBtns btntext="All" color="blue"/></div>
 <div onClick={() =>{
    let filteredList= tasks.filter((t) => t.status)
    setListOfTasks(filteredList)
 }}><TodoFormBtns btntext="Completed" color="green"/></div>
 <div onClick={() =>{
    let filteredList = tasks.filter((t) =>!t.status)
    setListOfTasks(filteredList)
 }}><TodoFormBtns btntext="Incompleted" color="red"/></div>
 </div>
 <TodoReactBtn data={listOfTasks}/>
   </>
  )
}
