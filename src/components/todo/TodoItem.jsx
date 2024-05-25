import React from 'react'

function TodoItem({todo}) {
  const {Task,isComplete}=todo;
  return (
   <>
  <h1>
    {Task}- <span style={{backgroundColor:isComplete?'green':'red'}}>{isComplete}</span>
  </h1>
   </>
  )
}

export default TodoItem
