import React, { useState } from 'react';

export default function Pricing(prop) {
    let [num, setnum] = useState(0);
    let Addnum = ()=>{
        setnum(num + 1);
    }
    let Subnum = ()=>{
        setnum(num - 1);
    }

    return (
      <>
        <div className="container my-3">
           <h1>{num}</h1>
           <button className='btn btn-primary' onClick={Addnum}>Add</button> <button onClick={Subnum} className='btn btn-primary'>Minize</button>
        </div>
      </>
    )
  }