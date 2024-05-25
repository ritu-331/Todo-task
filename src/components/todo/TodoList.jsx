import React from 'react'
import TodoItem from './TodoItem'

function TodoList(props) {
    let list=props.listOfTask;
    
  return (
    <>
   
   <div>
   <ul className='ml-2 mt-10'>
  {
    list.map((e) => <TodoItem todo={e}/>)
  }
</ul>
   </div>
    </>
  )
}

export default TodoList
