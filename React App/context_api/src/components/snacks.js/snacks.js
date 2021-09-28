import React from 'react'

export default function Snacks() {
    return (
        <div>
            <h3>This is yummy {state?.snacks} and {state?.drink} for {state?.user?.userName}</h3>
            <input type="text" value={newSnack} onChange={(ev) => { setNewSnack(ev.target.value) }} />
            <button onClick={updateSnack}>Update Snack</button>
        </div>  
    )
}
