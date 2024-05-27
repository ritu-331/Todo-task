import React, { useState } from 'react'

export default function TodoInputBtn({ addwork }) {
    const [inputField, setInputField] = useState()
    
    const changeInputWork = (e) => {
        setInputField(e.target.value)
    }

    

    const addNewWork = () => {
        if(inputField==""){
            alert("Please Enter Any Task")
            return
        }
        addwork ({
            task: inputField,
            time: `${new Date().getHours()}: ${new Date().getMinutes()}`,
            status: true
            
        })
        setInputField("")
    }
    return (
        <div id="input-btn" className='mt-10'>
        <input  placeholder='Enter New Task' className='h-[6vh] w-[50vw] rounded-lg border-2 border-gray-900 font-semibold ' type="text" value={inputField} onChange={changeInputWork} />
     <button className=' mt-2 bg-gray-900 h-[6vh] px-7 ml-2  text-white rounded-lg ' onClick={addNewWork} >Add Task</button>
     </div>
    )
}
