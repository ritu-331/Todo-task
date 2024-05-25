
import React, { useState } from 'react'
import TodoReactBtn from './TodoReactBtn'
import TodoFormBtns from './TodoFormBtns'
import ShowReactBtns from './ShowReactBtns'

let list=["React Todo App","ReactjsxExample.com"]
let list2=["React" ,"JavaScript"]
function TodoForm(props) {
const [inputValue, setInputValue]= useState('')
const buttonClick =()=>{
  props.add({Task:inputValue, isComplete:false})
  setInputValue('')
}

  return (
    <>
    <div className='flex justify-center items-center'>
     <div id="container"className='flex justify-center items-center h-[70vh] w-[80vw] bg-gray-900 rounded-lg ml-4' >
 <div className='h-[60vh] w-[70vw] bg-gray-600 flex flex-col items-center '>
  <div id="input-btn" className='mt-10'>
    <input  placeholder='Enter New Task' className='h-[6vh] w-[50vw] rounded-lg border-2 border-gray-900 font-semibold ' type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
 <button className=' mt-2 bg-gray-900 h-[6vh] px-7 ml-2  text-white rounded-lg ' onClick={buttonClick} >Add Task</button>
 </div>
 
<ShowReactBtns/>
 
 </div>
  </div>    
  </div>



    </>
  )
}

export default TodoForm
