import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Add, Delete, DeleteAll } from '../Actions/Actions'
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
                        if (inputField !== '') {
                            dispatch(Add(inputField))
                            setinputField('')
                        }
                        else {
                            alert('input Field cant be empty')
                        }
                    }}>Add</button>
                    <div className="items">
                        {list.map((elem) => {
                            return (
                                <div key={elem.id} id={elem.id} >
                                    <h1>{elem.data}
                                        <button onClick={() => {
                                            dispatch(Delete(elem.id))
                                        }}>delete</button>
                                    </h1>
                                </div>
                            )
                        })}
                        <button onClick={() => {
                            dispatch(DeleteAll())
                        }}>DELETE ALL</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Redux
