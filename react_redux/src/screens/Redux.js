import React from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import '../App.css'
import { Increment , Decrement } from '../Actions/Actions'
const Redux = () => {
    let Dispatch = useDispatch()
    const State = useSelector((state) => state.AddSub)
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'20rem' }}>
            <div>
                <button onClick={()=>{Dispatch(Increment()) }}>Add</button>
                <input type="text" value={State} size='3' />
                <button onClick={()=>{Dispatch(Decrement()) }}> Subtract</button>
            </div>
        </div >
    )
}

export default Redux
