import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Add } from '../Actions/Actions'
const Redux = () => {
    const dispatch = useDispatch()
    const [inputField, setinputField] = useState('')
    const list = useSelector((state) => state.todoReducer.list)

    return (
        <>
            <div className="mainDiv" style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '30rem'
            }}>
                <div className="childDiv">
                    <input type="text" onChange={(event) => {
                        setinputField(event.target.value)
                    }} value={inputField} />
                    <button onClick={() => {
                        dispatch(Add(inputField))
                        setinputField('')
                    }}>Add</button>
                    <div className="items">
                        {list.map((elem)=>{
                            return(
                                <h1 keys={elem.id}>{elem.data}
                                <button>delete</button>
                                </h1>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Redux
