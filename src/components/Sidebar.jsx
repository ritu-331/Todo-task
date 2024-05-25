import React from 'react'

function Sidebar() {
  return (
    <>
    <aside className=" bg-gray-900 w-[25vw] sm:w-[20vw] md:w-[20vw] lg:w-[10vw] flex  flex-col  items-center" > <div  className='text-white'>
    <h2 className='text-5xl text-white'>Tasks</h2>
  <ul className='mt-6'>
    <li>Todo Task</li>
  </ul>
    </div></aside>
       
   
    </>
  )
}

export default Sidebar
