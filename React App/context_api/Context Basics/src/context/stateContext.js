import { useState } from 'react';
import ContextApi from '../context/noteContext';



const StateContext = (props) => {
    const s1 = {
        name: 'Adnan',
        class : 'Developer'
    }
    const [state, setState] = useState(s1)
    return (
        <ContextApi.Provider value={{state ,setState}}>
            {props.children}
        </ContextApi.Provider>
    )
}

export default StateContext;