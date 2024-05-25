import React from 'react'

export default function TodoFormBtns({btntext , filter}) {
  return (
    <>
    <div id="btn3" className='mt-20 '>
 <button onClick={filter} className=  "bg-gray-900 h-[6vh] px-6 ml-2  text-white rounded-lg"  >{btntext}</button>
 
 </div>
    </>
  )
}
