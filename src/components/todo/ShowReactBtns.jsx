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
const filter =(filterByText) =>{
    switch (filterByText) {
        case "All":
            setListOfTasks(tasks)
            break;
            case "Completed":
                setListOfTasks(tasks.filter((t) =>t.status))
                break;
                case "Incompleted":
                    setListOfTasks(tasks.filter((t) => !t.status))
                    break;
    
        default:
            setListOfTasks(tasks)
            break;
    }
}


  return (
   <>
    <div className='flex'> 
 <div onClick={()=>filter("All")}><TodoFormBtns btntext="All" color="blue"/></div>
 <div onClick={()=>filter("Completed")}><TodoFormBtns btntext="Completed" color="green"/></div>
 <div onClick={() =>filter("Incompleted")}><TodoFormBtns btntext="Incompleted" color="red"/></div>
 </div>
 <TodoReactBtn data={listOfTasks}/>
   </>
  )
}
