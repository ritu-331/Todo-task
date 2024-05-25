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
const filterL =(status) =>{
    setListOfTasks(tasks.filter((item)=>status == undefined ? true : status==item.status))
   
}


  return (
   <>
    <div className='flex'> 
 <TodoFormBtns btntext="All" color="blue" filter={() =>{filterL()}}/>
 <TodoFormBtns btntext="Completed" color="green" filter={() =>{filterL(true)}}/>
 <TodoFormBtns btntext="Incompleted" color="red" filter={() =>{filterL(false)}}/>
 </div>
 <TodoReactBtn data={listOfTasks}/>
   </>
  )
}
