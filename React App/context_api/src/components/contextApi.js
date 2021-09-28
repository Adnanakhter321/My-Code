import React, { useContext, useState } from 'react';
import NoteContext from '../context/noteContext';
const ContextApi = () => {
    const useCont = useContext(NoteContext)
    const [input, setInput] = useState("")
    const func1 = (event) =>{
       setInput(event.target.value)

       useCont.setState({name : event.target.value})
    }

    return (
        <div>
            <h1>Name: {useCont.state.name}</h1>
            Change Name: <input type="text" value={input} onChange={func1} />
            {/* <button onClick={func1}>Change...!</button> */}
        </div>
    )
}

export default ContextApi;
