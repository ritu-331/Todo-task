import React from 'react'
import DeleteBtn from './DeleteBtn'


function TodoReactBtn({data,updatework,deletework }) {
  return (
    <>
    
    {

data.map((item) =>
    <div id="react" className='mt-12'>
 <div id="reactApp" className={`h-[6vh] m-4 ${item.status? "bg-green-900":"bg-red-900"} text-white rounded-lg  w-[50vw] px-4 flex justify-between items-center`}><div>{item.task}-{item.time}</div><div className='flex'>
  
   {
    item.status?
  <button onClick={() =>updatework(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 mx-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg></button>
:
<button onClick={()=>updatework(item)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg></button>
}

<DeleteBtn hidden={item.status} deletework={() =>{deletework(item)}}/>

</div></div>

 </div>
)
}
    </>
  )
}

export default TodoReactBtn
