import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Add } from '../Actions/Actions'
const Redux = () => {
    const dispatch = useDispatch()
    const [inputField, setinputField] = useState('')
    return (
       <>
       <div className="mainDiv" style={{
           display:'flex',
           justifyContent:'center',
           alignItems:'center',
           minHeight:'30rem'
       }}>
           <div className="childDiv">
               <input type="text" onChange={(event)=>{
                   setinputField(event.target.value)
               }} value={inputField}/>
               <button onClick={()=>{
                   dispatch(Add(inputField))
               }}>Add</button>
           </div>
       </div>
       </>
    )
}

export default Redux
