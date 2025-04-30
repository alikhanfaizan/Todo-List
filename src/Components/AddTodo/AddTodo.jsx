import React, { useState } from 'react'

function AddTodo({updateList}) {
    const [inputtext, setInputText] =useState('');
  return (
    <div>
        <input type="text" name="" id="" placeholder='Add new Todo' value={inputtext} onChange={(e)=>setInputText(e.target.value)} />
        <button onClick={()=>{
            updateList(inputtext)
            setInputText('');
             }}>Add</button>
    </div>
  )
}

export default AddTodo